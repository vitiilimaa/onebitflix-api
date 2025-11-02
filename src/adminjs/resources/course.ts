import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const courseResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: [
    "name",
    "synopsis",
    "uploadThumbnail",
    "featured",
    "categoryId",
  ],
  filterProperties: [
    "name",
    "synopsis",
    "featured",
    "categoryId",
    "createdAt",
    "updatedAt",
  ],
  listProperties: ["id", "name", "featured", "categoryId"],
  showProperties: [
    "id",
    "name",
    "synopsis",
    "featured",
    "thumbnailUrl",
    "categoryId",
    "createdAt",
    "updatedAt",
  ],
};

export const courseResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, "..", "..", "..", "public"),
      },
    },
    properties: {
      key: "thumbnailUrl",
      file: "uploadThumbnail",
    },
    uploadPath: (record, filename) => {
      const formattedFilename = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
      return `thumbnails/course-${record.get("id")}/${formattedFilename}`;
    },
  }),
];
