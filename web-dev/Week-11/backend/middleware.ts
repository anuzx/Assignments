import type { Response, Request, NextFunction } from "express"
import jwt from "jsonwebtoken"

declare global {
  namespace Express {
    interface Request {
      userId?: string
    }
  }
}

export const VerifyUser = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1]

  try {
    const decoded = jwt.verify(token, "secret") as { id: string }

    req.userId = decoded.id
    next()
  } catch (error) {
    console.log("inavlid token", error)

  }
}
