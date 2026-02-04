import { Sequelize } from "sequelize";

const dialect = process.env.DB_DIALECT || "postgres";

const common = {
  logging: false,
};

export const sequelize =
  dialect === "sqlite"
    ? new Sequelize({
        dialect: "sqlite",
        storage: process.env.SQLITE_STORAGE || ":memory:",
        ...common,
      })
    : new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
          dialect: "postgres",
          ...common,
        },
      );
