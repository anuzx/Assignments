import type { Request, Response } from "express";
export declare const createContest: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getContestDetails: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const addMcq: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const submitMcq: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const addDsaQues: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getContestLeaderboard: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=contest.controller.d.ts.map