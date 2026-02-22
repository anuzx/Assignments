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

  //console.log(parsedData.data);

  try {
    const exisitingEmail = await UserModel.findOne({
      email: email,
    });

    if (exisitingEmail) {
      return res.status(400).json(ErrorResponse("Email already exists"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //console.log(hashedPassword);

    const user = await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    })

    const safeUser = await UserModel.findById(user._id).select("-password");

    return res.status(201).json(SuccessResponse(safeUser));
  } catch (error) {
    console.error(error);
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
  })

  if (!existingUser) {
    return res.status(400).json(ErrorResponse("Invalid email or password"));
  }

  const validPassword = await bcrypt.compare(password, existingUser.password);

  if (!validPassword) {
    return res.status(400).json(ErrorResponse("Invalid email or password"));
  }

  const token = jwt.sign(
    {
      id: existingUser._id,
      role: existingUser.role,
    },
    process.env.JWT_SECRET,
  );
  return res.status(200).json(SuccessResponse({ token: token }));
};

export const authPage = async (req, res) => {

  const user = await UserModel.findById(req.userId).select("-password");

   if (!user) {
     return res.status(404).json({
       success: false,
       error: "User not found",
     });
   }

  return res.status(200).json(SuccessResponse(user));
};
