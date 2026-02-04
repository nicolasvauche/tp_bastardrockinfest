import { Sequelize } from "sequelize";

const port = process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined;

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port,
    dialect: "postgres",
    logging: false,
  },
);
