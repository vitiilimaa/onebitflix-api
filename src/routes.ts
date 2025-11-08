import express from "express";
import { categoryController } from "./controllers/categoryController";

const router = express.Router();

router.get("/categories", categoryController.getAll);
router.get("/categories/:id", categoryController.getById);

export default router;
