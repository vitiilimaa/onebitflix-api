import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { episodeService } from "../services/episodeService";

export const episodeController = {
  // GET /episodes/stream?videoUrl=
  stream: async (req: Request, res: Response) => {
    const { videoUrl } = req.query;

    try {
      if (typeof videoUrl !== "string")
        throw new Error("Parâmetro 'videoUrl' deve ser do tipo string.");

      const range = req.headers.range;

      episodeService.streamEpisodeToResponse(res, videoUrl, range);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json(error.message);
      }
    }
  },
};
