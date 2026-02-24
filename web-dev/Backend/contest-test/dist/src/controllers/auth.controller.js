import { LoginSchema, SignupSchema } from "../schema/schema.js";
import { ErrorResponse, SuccessResponse } from "../utility/ApiResponse.js";
import { prisma } from "../../client.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const handleSignup = async (req, res) => {
    const parsedData = SignupSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.status(400).json(ErrorResponse("INVALID_REQUEST"));
    }
    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                email: parsedData.data?.email
            }
        });
        if (existingUser) {
            res.status(400).json(ErrorResponse("EMAIL_ALREADY_EXISTS"));
        }
        const hashedPassword = await bcrypt.hash(parsedData.data?.password, 10);
        const user = await prisma.user.create({
            data: {
                email: parsedData.data?.email,
                password: hashedPassword,
                name: parsedData.data?.name,
                role: parsedData.data?.role
            }, select: {
                id: true,
                name: true,
                email: true,
                role: true
            }
        });
        res.status(201).json(SuccessResponse(user));
    }
    catch (error) {
        console.error(error);
        res.status(500).json(ErrorResponse("server error"));
    }
};
export const handleLogin = async (req, res) => {
    const parsedData = LoginSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.status(400).json(ErrorResponse("INVALID_REQUEST"));
    }
    try {
        const validUser = await prisma.user.findUnique({
            where: {
                email: parsedData.data?.email
            }
        });
        const validPassword = await bcrypt.compare(parsedData.data?.password, validUser?.password);
        if (!validUser || !validPassword) {
            res.status(401).json(ErrorResponse("INVALID_CREDENTIALS"));
        }
        const token = jwt.sign({
            id: validUser?.id,
            role: validUser?.role
        }, process.env.JWT_SECRET);
        res.status(201).json(SuccessResponse(token));
    }
    catch (error) {
        console.error(error);
        res.status(500).json(ErrorResponse("server error"));
    }
};
//# sourceMappingURL=auth.controller.js.map