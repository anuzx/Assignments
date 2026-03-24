import jwt from "jsonwebtoken"


export const VerifyUser = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(400).json({ message: "missing token" })
  }

  const decoded = jwt.verify(token, "secret123")

  req.user = decoded.sub

  next()
}
