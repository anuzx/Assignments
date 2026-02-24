import type { Request, Response } from "express";
import { SignupSchema } from "../schema/schema.js";
import { ErrorResponse } from "../utility/ApiResponse.js";

export const handleSignup = async (req:Request,res:Response) => {
    const parsedData = SignupSchema.safeParse(req.body)

    if (!parsedData.success) {
        res.status(400).json(ErrorResponse("INVALID_REQUEST"))
    }

    try {
        await 
    } catch (error) {
        
    }
}