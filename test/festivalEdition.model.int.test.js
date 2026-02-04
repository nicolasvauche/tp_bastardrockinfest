import { setupDb, teardownDb } from "./_db.js";
import { FestivalEdition } from "../src/models.js";

describe("Integration - FestivalEdition model", () => {
  beforeAll(async () => {
    await setupDb();
  });

  afterAll(async () => {
    await teardownDb();
  });

  test("create + findAll", async () => {
    await FestivalEdition.create({
      code: "brf_2026",
      nom: "Bastard Rocking Fest 2026",
      date_debut: "2026-07-10",
      date_fin: "2026-07-12",
      lieu: "Gueret",
    });

    const rows = await FestivalEdition.findAll({ order: [["code", "ASC"]] });

    expect(rows).toHaveLength(1);
    expect(rows[0].code).toBe("brf_2026");
    expect(rows[0].nom).toBe("Bastard Rocking Fest 2026");
    expect(rows[0].date_debut).toBe("2026-07-10");
    expect(rows[0].date_fin).toBe("2026-07-12");
    expect(rows[0].lieu).toBe("Gueret");
  });

  test("unique constraint on code", async () => {
    await FestivalEdition.create({ code: "dup_1", nom: "Edition A" });

    await expect(
      FestivalEdition.create({ code: "dup_1", nom: "Edition B" }),
    ).rejects.toBeTruthy();
  });
});
