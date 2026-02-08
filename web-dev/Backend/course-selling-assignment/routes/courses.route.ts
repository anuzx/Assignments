import { Router } from "express";
import { createCourses, deleteCourses, getCoursesWithLessons, PublicPosts, updateCourse } from "../controller/course.controller";

const router = Router()

router.route("/").post(createCourses)
router.route("/").get(PublicPosts)
router.route("/:id").get(getCoursesWithLessons)
router.route("/:id").patch(updateCourse)
router.route("/:id").delete(deleteCourses)



export default router

