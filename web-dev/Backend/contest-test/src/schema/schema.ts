import { z } from "zod";

export const SignupSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
  role: z.enum(["creator", "contestee"]).default("contestee"),
});

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export const ContestSchema = z.object({
  title: z.string(),
  description: z.string(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
});

export const McqSchema = z.object({
  questionText: z.string(),
  options: z.array(z.string()).default([]),
  correctOptionIndex: z.number().positive(),
  points:z.number().positive()
});

export const McqSubmissionSchema = z.object({
  selectedOptionIndex:z.number().positive()
});

export const DsaSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).optional().default([]),
  points: z.number().positive(),
  timeLimit: z.number(),
  memoryLimit: z.number(),
  testCases: z.array(
    z.object({
      input: z.string(),
      expectedOutput: z.string(),
      isHidden: z.boolean().optional().default(false),
    }),
  ),
});

export const DsaSolutionSchema = z.object({
  code: z.string(),
  language:z.string()
})