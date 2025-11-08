import { Request, Response } from "express";
import { courseService } from "../services/courseService";

export const courseController = {
  // GET /courses/:id
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const course = await courseService.findByIdWithEpisodes(id);
      return res.json(course);
    } catch (error) {
      if (error instanceof Error) res.json({ message: error.message });
    }
  },
};
