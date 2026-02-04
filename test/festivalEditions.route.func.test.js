import request from "supertest";
import express from "express";
import { setupDb, teardownDb } from "./_db.js";
import { router } from "../src/routes.js";
import { FestivalEdition } from "../src/models.js";

function createTestApp() {
  const app = express();
  app.use(express.json());
  app.use(router);
  return app;
}

describe("Functional - GET /festival-editions", () => {
  const app = createTestApp();

  beforeAll(async () => {
    await setupDb();
  });

  afterAll(async () => {
    await teardownDb();
  });

  beforeEach(async () => {
    await FestivalEdition.destroy({ where: {}, truncate: true, cascade: true });
  });

  test("returns [] when empty", async () => {
    const res = await request(app).get("/festival-editions");

    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  test("returns the editions list", async () => {
    await FestivalEdition.create({ code: "brf_2026", nom: "BRF 2026" });
    await FestivalEdition.create({ code: "brf_2027", nom: "BRF 2027" });

    const res = await request(app).get("/festival-editions");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);

    const codes = res.body.map((x) => x.code).sort();
    expect(codes).toEqual(["brf_2026", "brf_2027"]);
  });
});
