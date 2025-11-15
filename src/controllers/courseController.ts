import { Request, Response } from "express";
import { courseService } from "../services/courseService";
import { getPaginationParams } from "../helpers/getPaginationParams";

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

  // GET /courses/search?name=
  getByName: async (req: Request, res: Response) => {
    const { name } = req.query;
    const { page, perPage } = getPaginationParams(req.query);

    try {
      if (typeof name !== "string")
        throw new Error("Parâmetro 'name' deve ser do tipo string.");
      const courses = await courseService.findByName(name, page, perPage);
      return res.json(courses);
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
