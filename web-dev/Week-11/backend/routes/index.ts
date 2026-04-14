import { z } from "zod"

export const SignupSchema = z.object({
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  password: z.string()
})

export const SigninSchema = z.object({
  username: z.string(),
  password: z.string()
})
