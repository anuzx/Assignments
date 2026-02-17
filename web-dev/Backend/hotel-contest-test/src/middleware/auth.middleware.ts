import  jwt  from "jsonwebtoken";
import { JWT_SECRET } from "../utils/constants";
import type { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../utils/ApiResponse";


declare global {
  namespace Express {
    export interface Request {
      user?: {
        id: string;
        role: "customer" | "owner";
      };
    }
  }
}

export const VerifyUser = (req:Request, res:Response, next:NextFunction) => {
  const token = req.headers.authorization?.split("Bearer ")[1]
  
  if (!token) {
    res.status(401).json(ErrorResponse("UNAUTHORIZED"));
    return;
  }

    const decoded = jwt.verify(token, JWT_SECRET!) as {
      id: string,
      role: "customer" | "owner"
    };
    
    req.user = { id: decoded.id, role: decoded.role }
    next()
}


export const AccessibleOnlyTo = (role:string[] = [])=>{
    return function (req: Request, res: Response, next: NextFunction) {
     if (!req.user?.id) {
       res.status(403).json({
         message: "user not authenticated",
       });
       return;
     }
     if (!role.includes(req.user.role)) {
       res.status(403).json(ErrorResponse("FORBIDDEN"));
       return;
     }
     next();
    };
}