import { UserModel } from "../models/user.model.js";
import { LoginSchema, SignupSchema } from "../schema/schema.js";
import { ErrorResponse, SuccessResponse } from "../utility/Apiresponse.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const handleSignup = async (req, res) => {
  const parsedData = SignupSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("Invalid request schema"));
  }

  const { name, email, password, role } = parsedData.data;

  try {
    const exisitingEmail = await UserModel.findOne({
      email: email,
    });

    if (exisitingEmail) {
      return res.status(400).json(ErrorResponse("Email already exists"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    }).select("-password");

    return res.status(201).json(SuccessResponse(user));
  } catch (error) {
    return res.status(500).json(ErrorResponse("server error"));
  }
};

export const handleLogin = async (req, res) => {
  const parsedData = LoginSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("Invalid request schema"));
  }

  const { email, password } = parsedData.data;

  const existingUser = await UserModel.findOne({
    email: email,
  });

  const validPassword = await bcrypt.compare(password, existingUser.password);

  if (!existingUser || !validPassword) {
    return res.status(400).json(ErrorResponse("Invalid email or password"));
  }

  const token = jwt.sign(
    {
      id: existingUser.id,
      role: existingUser.role,
    },
    process.env.JWT_SECRET,
  );
  return res.status(200).json(SuccessResponse({token:token}));
};

export const authPage = async (req, res) => {
  if (!req.userId) {
    res
      .status(401)
      .json(ErrorResponse("Unauthorized, token missing or invalid"));
    return;
  }
  const user = await UserModel.findOne({
    id: req.userId,
  }).select("-password");

  return res.status(200).json(SuccessResponse(user));
};
