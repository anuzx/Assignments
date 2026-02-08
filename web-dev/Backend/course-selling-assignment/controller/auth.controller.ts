import type { Request, Response } from "express";
import { LoginSchema, SignupSchema } from "../schema";
import { prisma } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const handleSignup = async (req: Request, res: Response) => {
  const parsedData = SignupSchema.safeParse(req.body);

  if (!parsedData.success) {
    res.json({
      message: "input field empty",
    });
    return;
  }

  try {
    const hashedPass = await bcrypt.hash(parsedData.data?.password, 10);

    const user = await prisma.user.create({
      data: {
        email: parsedData.data?.email,
        password: hashedPass,
        name: parsedData.data?.name,
        role: parsedData.data?.role,
      },
    });

    res.json({
      message: "Signup successfull",
      id: user.id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const handleLogin = async (req: Request, res: Response) => {
  const parsedData = LoginSchema.safeParse(req.body);

  if (!parsedData.success) {
    res.json({
      message: "input field empty",
    });
    return;
  }

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: parsedData.data?.email,
      },
    });
      
    if (!existingUser) {
      return res.json({
        message: "invalid user",
      });
    }
      
    const unhasedPass = await bcrypt.compare(
      parsedData.data?.password,
      existingUser?.password,
    );
      
      if (!unhasedPass) {
          return res.json({
              message:"invalid password"
          })
      }

    const token = jwt.sign(
      {
        id: existingUser.id,
      },
      process.env.JWT_SECRET!,
    );

    res.json({
      message: "signin done",
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
};
