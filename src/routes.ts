import express from "express";
import { categoryController } from "./controllers/categoryController";
import { courseController } from "./controllers/courseController";

const router = express.Router();

router.get("/categories", categoryController.getAll);
router.get("/categories/:id", categoryController.getById);

router.get("/courses/featured", courseController.getFeaturedCourses);
router.get("/courses/newest", courseController.getNewestCourses)
router.get("/courses/:id", courseController.getById);

export default router;
