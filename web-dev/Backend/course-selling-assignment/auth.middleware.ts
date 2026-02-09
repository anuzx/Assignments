import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    export interface Request {
      user?: {
        id: string;
        role: "INSTRUCTOR" | "STUDENT";
      };
    }
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
      role: "INSTRUCTOR" | "STUDENT";
    };

    req.user = { id: decoded.id, role: decoded.role };
    
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export const requireRole = (role:string[] = []) => {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.user?.id) {
      res.status(403).json({
        message: "user not authenticated",
      });
      return;
    }
    if (!role.includes(req.user.role)) {
      res.status(403).json({
        message: "forbidden",
      });
      return;
    }
    next();
  };
};
