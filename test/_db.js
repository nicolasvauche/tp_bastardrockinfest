import { sequelize } from "../src/db.js";

export async function setupDb() {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
}

export async function teardownDb() {
  await sequelize.close();
}
