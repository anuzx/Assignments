import type { Request, Response } from "express";
import { prisma } from "../../client.js";
import { ErrorResponse, SuccessResponse } from "../utility/ApiResponse.js";
import { DsaSolutionSchema } from "../schema/schema.js";
import fs from "fs";
import path from "path";
import { runDocker } from "../utility/RunDocker.js";

//using docker for code execution
export const submitDsaSolution = async (req: Request, res: Response) => {
  const parsedData = DsaSolutionSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
  }

  const problemId = req.params.problemId as string;

  //get problem with testCases
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

  const now = new Date();

  if (now < problem.contest.startTime || now > problem.contest.endTime) {
    return res.status(400).json(ErrorResponse("CONTEST_NOT_ACTIVE"));
  }

  const testCases = problem.testCases;
  const totalTestCases = testCases.length;

  let passed = 0;
  let status = "accepted";

  //create temporary folder
  const tempDir = path.join(__dirname, "../temp");
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  const filePath = path.join(tempDir, "solution.js");

  //save user code into file
  fs.writeFileSync(filePath, parsedData.data.code);

  //run for each test case
  for (const testCase of testCases) {
    try {
      const result = await runDocker(
        testCase.input,
        tempDir,
        problem.timeLimit,
      );

      if (result.trim() === testCase.expectedOutput.trim()) {
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

  //calculate points
  const pointsEarned = Math.floor((passed / totalTestCases) * problem.points);

  //save submission
  const submission = await prisma.dsaSubmission.create({
    data: {
      code: parsedData.data.code,
      language: parsedData.data.language,
      userId: req.user.id,
      pointsEarned: pointsEarned,
      questionId: problemId,
      status,
      testCasesPassed: passed,
      totalTestCases,
      executionTime: 0,
    },
    select: {
      status: true,
      pointsEarned: true,
      testCasesPassed: true,
      totalTestCases: true,
    },
  });

  return res.status(201).json(SuccessResponse(submission));
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

  const finalRes = {
    ...problem,
    visibleTestCases: problem?.testCases,
  };

  return res.status(200).json(SuccessResponse(finalRes));
};
