import { Router, type Request, type Response } from "express";
import { SigninSchema, SignupSchema } from ".";
import { User } from "../db";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = Router()

router.post("/signup", async (req: Request, res: Response) => {
  const parsedData = SignupSchema.safeParse(req.body)

  if (!parsedData.success) {
    return res.status(400).json("invalid input")
  }

  const { username, firstname, lastname, password } = parsedData.data

  const existingUser = await User.findOne({ username })

  if (existingUser) {
    return res.status(400).json("user already exists")
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await User.create({
    username,
    firstname,
    lastname,
    password: hashedPassword
  })

  const result = await User.findById(user._id).select("-password")
  return res.status(201).json({ message: "user created", result })
})

router.post("/signin", async (req: Request, res: Response) => {
  const parsedData = SigninSchema.safeParse(req.body)

  if (!parsedData.success) {
    return res.status(400).json("invalid input")
  }

  const { username, password } = parsedData.data

  const existingUser = await User.findOne({ username })

  if (!existingUser) {
    return res.status(400).json("email or password is wrong")
  }

  const validPassword = await bcrypt.compare(password, existingUser.password)

  if (!validPassword) {
    return res.status(400).json("email or password is wrong")
  }

  const token = jwt.sign({
    id: existingUser._id
  }, "secret")

  return res.status(200).json({ message: "signin done", token })
})
router.put("/", (req: Request, res: Response) => { })
router.get("/bulk", (req: Request, res: Response) => { })

export default router
