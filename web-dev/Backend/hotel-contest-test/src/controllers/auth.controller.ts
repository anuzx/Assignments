import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import { prisma } from "../../client";
import { LoginSchema, SignupSchema } from "../schema/schema";
import { ErrorResponse, SuccessResponse } from "../utils/ApiResponse";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../utils/constants";


export const handleSignup = async (req: Request, res: Response) => {
  const parsedData = SignupSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
    
  }

  const userExist = await prisma.user.findUnique({
    where: {
      email: parsedData.data.email,
    },
  });

  if (userExist) {
    return res.status(400).json(ErrorResponse("EMAIL_ALREADY_EXISTS"));
    
  }

  const hashedPassword = await bcrypt.hash(parsedData.data?.password, 10);

  const user = await prisma.user.create({
    data: {
      name: parsedData.data?.name,
      password: hashedPassword,
      email: parsedData.data?.email,
      role: parsedData.data?.role ?? "customer",
      phone: parsedData.data?.phone,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      phone: true,
    },
  });

  return res.status(201).json(SuccessResponse(user));
};

export const handleLogin = async (req:Request, res:Response) => {
  const parsedData = LoginSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
    
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: parsedData.data?.email },
    select: { id: true, name: true, email: true, role: true, password: true },
  });

  if (!existingUser) {
    return res.status(401).json(ErrorResponse("INVALID_CREDENTIALS"));
    
  }

  const validPassword = await bcrypt.compare(parsedData.data.password , existingUser.password);

  if (!validPassword) {
    return res.status(401).json(ErrorResponse("INVALID_CREDENTIALS"));
  }

  const token = jwt.sign(
    {
      id: existingUser.id,
      role:existingUser.role
    },
    JWT_SECRET!,

    { expiresIn: "7d" },
  );  

  const { password, ...safeUser } = existingUser;

  return res.status(200).json(SuccessResponse({
    token,
    user: safeUser
  }))
};
