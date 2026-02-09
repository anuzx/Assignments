import { Router } from "express";
import {
  createCourses,
  deleteCourses,
  getCoursesWithLessons,
  publicLesson,
  PublicPosts,
  updateCourse,
} from "../controller/course.controller";
import { authMiddleware, requireRole } from "../auth.middleware";

const router = Router();

router
  .route("/")
  .get(PublicPosts)
  .post(authMiddleware, requireRole(["INSTRUCTOR"]), createCourses);

router
  .route("/:id")
  .get(getCoursesWithLessons)
  .patch(authMiddleware, requireRole(["INSTRUCTOR"]), updateCourse)
  .delete(authMiddleware, requireRole(["INSTRUCTOR"]), deleteCourses);

router.route("/:courseId/lessons").get(publicLesson);  

export default router;
