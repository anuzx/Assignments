import type { Request, Response } from "express";
import { prisma } from "../../client.js";
import { ErrorResponse, SuccessResponse } from "../utility/ApiResponse.js";
import { DsaSolutionSchema } from "../schema/schema.js";
import fs from "fs";
import path from "path";
import { runDocker } from "../utility/RunDocker.js";

function normalize(output: string) {
  return output.trim().replace(/\r\n/g, "\n");
}

//using docker for code execution
export const submitDsaSolution = async (req: Request, res: Response) => {
  try {
    const parsedData = DsaSolutionSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
    }

    const problemId = req.params.problemId as string;

    // Fetch problem with test cases
    const problem = await prisma.dsaProblem.findUnique({
      where: { id: problemId },
      include: {
        testCases: true,
        contest: true,
      },
    });

    if (!problem) {
      return res.status(404).json(ErrorResponse("PROBLEM_NOT_FOUND"));
    }

    if (req.user.role === "creator" && problem.contest.creatorId === req.user.id) {
       return res.status(403).json(ErrorResponse("FORBIDDEN"));
    }

    const now = new Date();

    if (now < problem.contest.startTime || now > problem.contest.endTime) {
      return res.status(400).json(ErrorResponse("CONTEST_NOT_ACTIVE"));
    }

    const testCases = problem.testCases;
    const totalTestCases = testCases.length;

    let passed = 0;
    let status: string = "accepted";

    //  Create unique temp directory per submission
    const submissionDir = path.join(
      process.cwd(),
      "temp",
      `${Date.now()}_${req.user.id}`,
    );

    fs.mkdirSync(submissionDir, { recursive: true });

    // Base user code
    const userCode = parsedData.data.code;

    for (const testCase of testCases) {
      const wrappedCode = `
${userCode}

try {
  const input = ${testCase.input};

  const fn = Object.values(global)
    .find(v => typeof v === "function");

  if (!fn) throw new Error("No function found");

  const result = Array.isArray(input)
    ? fn(...input)
    : fn(input);

  if (typeof result === "object") {
    console.log(JSON.stringify(result));
  } else {
    console.log(result);
  }

} catch (err) {
  console.error(err.message);
  process.exit(1);
}
`;

      const filePath = path.join(submissionDir, "solution.js");
      fs.writeFileSync(filePath, wrappedCode);

      try {
        const result = await runDocker(
          submissionDir,
          problem.timeLimit, // timeLimit is INT in DB (milliseconds)
        );

        if (normalize(result) === normalize(testCase.expectedOutput)) {
          passed++;
        } else {
          status = "wrong_answer";
        }
      } catch (error: any) {
        if (error.message === "TLE") {
          status = "time_limit_exceeded";
        } else {
          status = "runtime_error";
        }
        break;
      }
    }

    if (passed !== totalTestCases && status === "accepted") {
      status = "wrong_answer";
    }

    const pointsEarned = Math.floor((passed / totalTestCases) * problem.points);

    // Save submission
    const submission = await prisma.dsaSubmission.create({
      data: {
        code: parsedData.data.code,
        language: parsedData.data.language,
        userId: req.user.id,
        questionId: problemId,
        status,
        testCasesPassed: passed,
        totalTestCases,
        pointsEarned,
        executionTime: 0, // can improve later
      },
      select: {
        status: true,
        pointsEarned: true,
        testCasesPassed: true,
        totalTestCases: true,
      },
    });

    // Cleanup temp folder after execution
    fs.rmSync(submissionDir, { recursive: true, force: true });

    return res.status(201).json(SuccessResponse(submission));
  } catch (error) {
    console.error(error);
    return res.status(500).json(ErrorResponse("INTERNAL_SERVER_ERROR"));
  }
};



export const getDsaProblem = async (req: Request, res: Response) => {
  const promblemId = req.params.problemId as string;

  const problem = await prisma.dsaProblem.findUnique({
    where: {
      id: promblemId,
    },
    select: {
      id: true,
      contestId: true,
      title: true,
      description: true,
      tags: true,
      points: true,
      timeLimit: true,
      memoryLimit: true,
      testCases: {
        where: { isHidden: false },
        select: {
          input: true,
          expectedOutput: true,
        },
      },
    },
  });

  if (!problem) {
    return res.status(404).json(ErrorResponse("PROBLEM_NOT_FOUND"));
  }

  // Remove testCases from response and rename it
  const { testCases, ...rest } = problem;

  const finalRes = {
    ...rest,
    visibleTestCases: problem?.testCases,
  };

  return res.status(200).json(SuccessResponse(finalRes));
};
