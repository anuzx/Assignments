import type { NextFunction, Request, Response } from "express";
declare global {
    namespace Express {
        interface Request {
            user: {
                id: number;
                role: "creator" | "contestee";
            };
        }
    }
}
export declare const VerifyUser: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const AccessibleBy: (role?: string[]) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.middleware.d.ts.map