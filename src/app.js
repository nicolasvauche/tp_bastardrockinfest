import "dotenv/config";
import express from "express";
import { sequelize } from "./db.js";
import { router } from "./routes.js";

const app = express();
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

async function start() {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("DB connected");

  app.listen(port, () =>
    console.log(`API running on http://localhost:${port}`),
  );
}

start();
