import { Course } from "../models";

export const courseService = {
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
};
