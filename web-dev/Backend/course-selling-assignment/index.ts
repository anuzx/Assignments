import express from "express";

const app = express();

app.use(express.json());

import { authMiddleware, requireRole } from "./auth.middleware";
import { prisma } from "./db";
import UserRouter from "./routes/auth.route";
import courseRouter from "./routes/courses.route";
import { CreateLessonSchema, PurchaseCourseSchema } from "./schema";

app.use("/auth", UserRouter);
app.use("/courses", courseRouter);

app.get("/me", authMiddleware, async (req, res) => {
  const user = await prisma.user.findFirst({
    where: {
      id: req.user!.id,
      role: req.user!.role,
    },
  });
  res.json({
    id: req.user!.id,
    role: req.user!.role,
    email: user?.email,
  });
});

//lesson endpoint
app.post(
  "/lessons",
  authMiddleware,
  requireRole(["INSTRUCTOR"]),
  async (req, res) => {
    const parsedData = CreateLessonSchema.safeParse(req.body);

    if (!parsedData.success) {
      res.status(400).json({
        message: "invalid input",
      });
      return;
    }

    const lesson = await prisma.lesson.create({
      data: {
        title: parsedData.data?.title!,
        content: parsedData.data?.content!,
        courseId: parsedData.data?.courseId!,
      },
    });

    res.json(lesson);
  },
);

//purchase endpoints
app.post(
  "/purchases",
  authMiddleware,
  requireRole(["STUDENT"]),
  async (req, res) => {
    const parsedData = PurchaseCourseSchema.safeParse(req.body);

    try {
      await prisma.purchase.create({
        data: {
          userId: req.user!.id,
          courseId: parsedData.data?.courseId!,
        },
      });

      res.json({
        message: "purchased course",
      });
    } catch (error) {
      return res.status(403).json({ message: "unable to purchase course" });
    }
  },
);

app.get("/users/:id/purchases", authMiddleware, async (req, res) => {
  const userId = req.params.id as string;

  if (req.user!.id !== userId) {
    return res.status(403).json({ message: "Forbidden" });
  }

  const purchases = await prisma.purchase.findMany({
    where: {
      userId: userId,
    },
    include: {
      course: true,
    },
  });
  res.status(200).json(purchases);
});

app.listen(3000, () => console.log("server started at port 3000"));
