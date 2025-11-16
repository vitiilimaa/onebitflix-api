import express from "express";
import { categoryController } from "./controllers/categoryController";
import { courseController } from "./controllers/courseController";
import { episodeController } from "./controllers/episodeController";

const router = express.Router();

router.get("/categories", categoryController.getAll);
router.get("/categories/:id", categoryController.getById);

router.get("/courses/featured", courseController.getFeaturedCourses);
router.get("/courses/newest", courseController.getNewestCourses);
router.get("/courses/search", courseController.getByName);
router.get("/courses/:id", courseController.getById);

router.get("/episodes/stream", episodeController.stream);

export default router;
