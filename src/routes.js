import express from "express";
import { FestivalEdition, Budget, Category, BudgetLine } from "./models.js";

export const router = express.Router();

/* Festival editions */
router.post("/festival-editions", async (req, res) => {
  try {
    const newEdition = await FestivalEdition.create(req.body);
    res.status(201).json(newEdition);
  } catch (exception) {
    res.status(400).json(exception);
  }
});

router.get("/festival-editions", async (req, res) => {
  res.json(await FestivalEdition.findAll());
});

/* Budgets */
router.post("/budgets", async (req, res) => {
  try {
    const newBudget = await Budget.create(req.body);
    res.status(201).json(newBudget);
  } catch (exception) {
    res.status(400).json(exception);
  }
});

router.get("/budgets/:editionId", async (req, res) => {
  res.json(
    await Budget.findAll({
      where: { id_edition: req.params.editionId },
    }),
  );
});

/* Categories */
router.post("/categories", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (exception) {
    res.status(400).json(exception);
  }
});

router.get("/categories", async (_req, res) => {
  res.json(await Category.findAll());
});

/* Budget lines */
router.post("/budget-lines", async (req, res) => {
  try {
    const newBudgetLine = await BudgetLine.create(req.body);
    res.status(201).json(newBudgetLine);
  } catch (exception) {
    res.status(400).json(exception);
  }
});

router.get("/budgets/:id/lines", async (req, res) => {
  res.json(
    await BudgetLine.findAll({
      where: { id_budget: req.params.id },
      include: [Category],
    }),
  );
});
