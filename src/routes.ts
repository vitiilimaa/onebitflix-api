import express from "express";
import { categoryController } from "./controllers/categoryController";
import { courseController } from "./controllers/courseController";
import { episodeController } from "./controllers/episodeController";
import { authController } from "./controllers/authController";
import { ensureAuth } from "./middlewares/auth";

const router = express.Router();

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

router.get("/categories", ensureAuth, categoryController.getAll);
router.get("/categories/:id", ensureAuth, categoryController.getById);

router.get(
  "/courses/featured",
  ensureAuth,
  courseController.getFeaturedCourses
);
router.get("/courses/newest", courseController.getNewestCourses);
router.get("/courses/search", ensureAuth, courseController.getByName);
router.get("/courses/:id", ensureAuth, courseController.getById);

router.get("/episodes/stream", episodeController.stream);

export default router;
