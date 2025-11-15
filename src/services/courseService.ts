import { Op } from "sequelize";
import { Course } from "../models";

export const courseService = {
  getRandomFeaturedCourses: async () => {
    const featuredCourses = await Course.findAll({
      attributes: ["id", "name", "synopsis", ["thumbnail_url", "thumbnailUrl"]],
      where: {
        featured: true,
      },
    });

    const randomFeaturedCourses = featuredCourses.sort(
      () => 0.5 - Math.random()
    );

    return randomFeaturedCourses;
  },

  getTopTenNewestCourses: async () => {
    const newestCourses = await Course.findAll({
      order: [["createdAt", "DESC"]],
      limit: 10,
    });

    return newestCourses;
  },

  findByIdWithEpisodes: async (id: string) => {
    const courseWithEpisodes = await Course.findByPk(id, {
      attributes: ["id", "name", "synopsis", ["thumbnail_url", "thumbnailUrl"]],
      include: {
        association: "episodes",
        attributes: [
          "id",
          "name",
          "synopsis",
          "order",
          ["video_url", "videoUrl"],
          "secondsLong",
        ],
        order: [["id", "ASC"]],
        separate: true,
      },
    });

    return courseWithEpisodes;
  },

  findByName: async (name: string, page: number, perPage: number) => {
    const offset = (page - 1) * perPage;

    const { count, rows } = await Course.findAndCountAll({
      attributes: ["id", "name", "synopsis", ["thumbnail_url", "thumbnailUrl"]],
      where: {
        name: { [Op.like]: `%${name}%` },
      },
      limit: perPage,
      offset,
    });

    return {
      courses: rows,
      page,
      perPage,
      total: count,
    };
  },
};
