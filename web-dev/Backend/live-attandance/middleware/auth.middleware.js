import jwt from "jsonwebtoken";
import { ErrorResponse } from "../utility/Apiresponse.js";

export const VerifyUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res
      .status(401)
      .json(ErrorResponse("Unauthorized, token missing or invalid"));
    return;
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decodedToken.id;
    req.role = decodedToken.role;
    next();
  } catch (error) {
    console.error(error);
    res
      .status(401)
      .json(ErrorResponse("Unauthorized, token missing or invalid"));
    return;
  }
};

export const OnlyTeacher = (req, res, next) => {
  if (req.role !== "teacher") {
    return res
      .status(403)
      .json(ErrorResponse("Forbidden, teacher access required"));
  }

  next();
};

export const OnlyStudent = (req, res, next) => {
  if (req.role !== "student") {
    return res
      .status(403)
      .json(ErrorResponse("Forbidden, student access required"));
  }

  next();
};