import type { Request, Response } from "express";
import { prisma } from "../db";
import { CreateCourseSchema } from "../schema";

export const createCourses = async (req: Request, res: Response) => {
  const parsedData = CreateCourseSchema.safeParse(req.body);

  if (!parsedData.success) {
    res.status(400).json({
      message: "inavlid inputs",
    });
    return;
  }
  try {
    const course = await prisma.course.create({
      data: {
        title: parsedData.data?.title as string,
        price: parsedData.data?.price as number,
        description: parsedData.data.description,
        instructorId: req.user!.id,
      },
    });

    return res.status(200).json({
      id: course.id,
    });
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Only instructors can create courses" });
  }
};

export const PublicPosts = async (req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany({});

    return res.json(courses);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch courses",
    });
  }
};

export const getCoursesWithLessons = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.id as string;
    const courses = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!courses) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(courses);
  } catch (error) {}
};

export const updateCourse = async (req: Request, res: Response) => {
  const parsedData = CreateCourseSchema.partial().safeParse(req.body);
  const courseId = req.params?.id as string;

  if (!parsedData.success) {
    res.status(400).json({
      message: "inavlid inputs",
    });
    return;
  }

  try {
    const updatedCourse = await prisma.course.update({
      where: {
        id: courseId,
      },
      data: parsedData.data,
    });
    res.json(updatedCourse);
  } catch (error) {
    return res.status(404).json({
      message: "Course not found",
    });
  }
};

export const deleteCourses = async (req: Request, res: Response) => {
  const courseId = req.params.id as string;

  try {
    await prisma.course.delete({
      where: {
        id: courseId,
      },
    });
    res.json({
      message: "Course deleted",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Course not found",
    });
  }
};

export const publicLesson = async (req: Request, res: Response) => {
  const courseId = req.params.courseId as string;

  const lesson = await prisma.lesson.findMany({
    where: {
      courseId,
    },
  });

  res.json(lesson);
};
