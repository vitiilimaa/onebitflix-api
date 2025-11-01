import { Sequelize } from "sequelize";

export const database = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST || "",
  port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
  database: process.env.DB_NAME || "",
  username: process.env.DB_USERNAME || "",
  password: process.env.DB_PASSWORD || "",
  define: {
    underscored: true,
  },
});
