import type { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../utility/ApiResponse.js";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    export interface Request {
      user: {
        id: string;
        role: "creator" | "contestee";
      };
    }
  }
}

export const VerifyUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json(ErrorResponse("UNAUTHORIZED"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN!) as {
      id: string;
      role: "creator" | "contestee";
    };
  
      req.user = { id: decoded.id, role: decoded.role };
      next()
  } catch (error) {
    return res.status(401).json(ErrorResponse("UNAUTHORIZED"));
  }
};

export const AccessibleBy = (role: string[] = [])=>{
    return function (req: Request, res: Response, next: NextFunction) {
        if (!req.user.id) {
            return res.status(401).json(ErrorResponse("UNAUTHORIZED"));
        }

        if (!role.includes(req.user.role)) {
            return res.status(403).json(ErrorResponse("FORBIDDEN"))
        }

        next()
    }
}
