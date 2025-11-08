import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { categoryService } from "../services/categoryService";

export const categoryController = {
  // GET /categories
  getAll: async (req: Request, res: Response) => {
    const { page, perPage } = getPaginationParams(req.query);

    try {
      const paginatedCategories = await categoryService.findAllPaginated(
        page,
        perPage
      );
      return res.json(paginatedCategories);
    } catch (error) {
      if (error instanceof Error) res.json({ message: error.message });
    }
  },

  // GET /categories/:id
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const category = await categoryService.findByIdWithCourses(id);
      return res.json(category);
    } catch (error) {
      if (error instanceof Error) res.json({ message: error.message });
    }
  },
};
