import { ContestSchema, DsaSchema, McqSchema, McqSubmissionSchema, } from "../schema/schema.js";
import { ErrorResponse, SuccessResponse } from "../utility/ApiResponse.js";
import { prisma } from "../../client.js";
export const createContest = async (req, res) => {
    const parsedData = ContestSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
    }
    try {
        const contest = await prisma.contest.create({
            data: {
                title: parsedData.data?.title,
                description: parsedData.data.description,
                startTime: parsedData.data.startTime,
                endTime: parsedData.data.endTime,
                creator: {
                    connect: { id: req.user.id },
                },
            },
            select: {
                id: true,
                title: true,
                description: true,
                creatorId: true,
                startTime: true,
                endTime: true,
            },
        });
        return res.status(201).json(SuccessResponse(contest));
    }
    catch (error) {
        console.error(error);
        return res.status(500).json(ErrorResponse("server error"));
    }
};
export const getContestDetails = async (req, res) => {
    const contestId = req.params.contestId;
    const contest = await prisma.contest.findUnique({
        where: {
            id: contestId,
        },
        select: {
            id: true,
            title: true,
            description: true,
            startTime: true,
            endTime: true,
            creatorId: true,
            mcqQuestions: {
                select: {
                    id: true,
                    questionText: true,
                    options: true,
                    points: true,
                },
            },
            dsaQuestions: {
                select: {
                    id: true,
                    title: true,
                    description: true,
                    tags: true,
                    points: true,
                    timeLimit: true,
                    memoryLimit: true,
                },
            },
        },
    });
    if (!contest) {
        return res.status(404).json(ErrorResponse("CONTEST_NOT_FOUND"));
    }
    const finalResult = {
        ...contest,
        mcqs: contest.mcqQuestions,
        dsaProblems: contest.dsaQuestions,
    };
    return res.status(200).json(SuccessResponse(finalResult));
};
export const addMcq = async (req, res) => {
    const contestId = req.params.contestId;
    const existContest = await prisma.contest.findUnique({
        where: {
            id: contestId,
        },
    });
    if (!existContest) {
        return res.status(404).json(ErrorResponse("CONTEST_NOT_FOUND"));
    }
    const parsedData = McqSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
    }
    const mcqContest = await prisma.mcqQuestion.create({
        data: {
            questionText: parsedData.data.questionText,
            options: parsedData.data.options,
            correctOptionIndex: parsedData.data.correctOptionIndex,
            points: parsedData.data.points,
            contest: {
                connect: { id: contestId },
            },
        },
        select: {
            id: true,
            contestId: true,
        },
    });
    return res.status(201).json(SuccessResponse(mcqContest));
};
export const submitMcq = async (req, res) => {
    const parsedData = McqSubmissionSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
    }
    const { contestId, questionId } = req.params;
    const existContest = await prisma.contest.findUnique({
        where: {
            id: contestId,
        },
    });
    if (!existContest) {
        return res.status(400).json(ErrorResponse("CONTEST_NOT_ACTIVE"));
    }
    const now = new Date();
    if (existContest.startTime > now || existContest.endTime < now) {
        return res.status(400).json(ErrorResponse("CONTEST_NOT_ACTIVE"));
    }
    if (req.user.role === "creator" && existContest.creatorId === req.user.id) {
        return res.status(403).json(ErrorResponse("FORBIDDEN"));
    }
    const existQues = await prisma.mcqQuestion.findFirst({
        where: {
            id: questionId,
            contestId: contestId,
        },
    });
    if (!existQues) {
        return res.status(404).json(ErrorResponse("QUESTION_NOT_FOUND"));
    }
    const existingSubmission = await prisma.mcqSubmission.findUnique({
        where: {
            userId_questionId: {
                userId: req.user.id,
                questionId: questionId,
            },
        },
    });
    if (existingSubmission) {
        return res.status(400).json(ErrorResponse("ALREADY_SUBMITTED"));
    }
    const isCorrect = parsedData.data.selectedOptionIndex === existQues.correctOptionIndex;
    const pointsEarned = isCorrect ? existQues.points : 0;
    try {
        const SubmitMcq = await prisma.mcqSubmission.create({
            data: {
                selectedOptionIndex: parsedData.data.selectedOptionIndex,
                questionId: questionId,
                userId: req.user.id,
                isCorrect,
                pointsEarned,
            },
            select: {
                isCorrect: true,
                pointsEarned: true,
            },
        });
        return res.status(201).json(SuccessResponse(SubmitMcq));
    }
    catch (error) {
        console.error(error);
        return res.status(500).json(ErrorResponse("server error"));
    }
};
export const addDsaQues = async (req, res) => {
    const parsedData = DsaSchema.safeParse(req.body);
    const { contestId } = req.params;
    if (!parsedData.success) {
        return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
    }
    const { title, description, tags, points, timeLimit, memoryLimit, testCases } = parsedData.data;
    const contest = await prisma.contest.findUnique({
        where: {
            id: contestId
        }
    });
    if (!contest) {
        return res.status(404).json(ErrorResponse("CONTEST_NOT_FOUND"));
    }
    const dsaQues = await prisma.dsaProblem.create({
        data: {
            title,
            description,
            tags,
            points,
            timeLimit,
            memoryLimit,
            contest: {
                connect: { id: contestId },
            },
            testCases: {
                create: testCases
            },
        },
        select: {
            id: true,
            contestId: true
        },
    });
    return res.status(201).json(SuccessResponse(dsaQues));
};
export const getContestLeaderboard = async (req, res) => {
    try {
        const contestId = req.params.contestId;
        //  Check contest exists
        const contest = await prisma.contest.findUnique({
            where: { id: contestId },
        });
        if (!contest) {
            return res.status(404).json(ErrorResponse("CONTEST_NOT_FOUND"));
        }
        //  Get all MCQ submissions for this contest
        const mcqSubmissions = await prisma.mcqSubmission.findMany({
            where: {
                mcqQuestion: {
                    contestId: contestId,
                },
            },
            select: {
                userId: true,
                pointsEarned: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
        //  Get all DSA submissions for this contest
        const dsaSubmissions = await prisma.dsaSubmission.findMany({
            where: {
                dsaQuestion: {
                    contestId: contestId,
                },
            },
            select: {
                userId: true,
                questionId: true,
                pointsEarned: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
        //  Build user map
        const userMap = new Map();
        const getOrCreateUser = (userId, name) => {
            if (!userMap.has(userId)) {
                userMap.set(userId, {
                    name,
                    mcqPoints: 0,
                    dsaBest: new Map(),
                });
            }
            return userMap.get(userId);
        };
        //  Sum all MCQ points
        for (const sub of mcqSubmissions) {
            const entry = getOrCreateUser(sub.userId, sub.user.name);
            entry.mcqPoints += sub.pointsEarned;
        }
        //  Take max DSA per question
        for (const sub of dsaSubmissions) {
            const entry = getOrCreateUser(sub.userId, sub.user.name);
            const currentBest = entry.dsaBest.get(sub.questionId) ?? 0;
            entry.dsaBest.set(sub.questionId, Math.max(currentBest, sub.pointsEarned));
        }
        //  Build leaderboard array
        const leaderboard = Array.from(userMap.entries()).map(([userId, data]) => {
            const dsaPoints = Array.from(data.dsaBest.values()).reduce((sum, pts) => sum + pts, 0);
            return {
                userId,
                name: data.name,
                totalPoints: data.mcqPoints + dsaPoints,
            };
        });
        //  Sort descending
        leaderboard.sort((a, b) => b.totalPoints - a.totalPoints);
        //  Assign ranks
        let rank = 1;
        const rankedLeaderboard = leaderboard.map((entry, index) => {
            const prev = leaderboard[index - 1];
            if (prev && entry.totalPoints < prev.totalPoints) {
                rank = index + 1;
            }
            return { ...entry, rank };
        });
        return res.status(200).json(SuccessResponse(rankedLeaderboard));
    }
    catch (error) {
        console.error("Leaderboard Error:", error);
        return res.status(500).json(ErrorResponse("INTERNAL_SERVER_ERROR"));
    }
};
//# sourceMappingURL=contest.controller.js.map