import { Request, Response } from "express";
import { courseService } from "../services/courseService";

export const courseController = {
  // GET /courses/featured
  getFeaturedCourses: async (req: Request, res: Response) => {
    try {
      const featuredCourses = await courseService.getRandomFeaturedCourses();
      return res.json(featuredCourses);
    } catch (error) {
      if (error instanceof Error) res.json({ message: error.message });
    }
  },

  // GET /courses/featured
  getNewestCourses: async (req: Request, res: Response) => {
    try {
      const newestCourses = await courseService.getTopTenNewestCourses();
      return res.json(newestCourses);
    } catch (error) {
      if (error instanceof Error) res.json({ message: error.message });
    }
  },

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
