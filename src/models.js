import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

/* FestivalEdition */
export const FestivalEdition = sequelize.define(
  "FestivalEdition",
  {
    id_edition: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    code: { type: DataTypes.STRING, unique: true, allowNull: false },
    nom: { type: DataTypes.STRING, allowNull: false },
    date_debut: DataTypes.DATEONLY,
    date_fin: DataTypes.DATEONLY,
    lieu: DataTypes.STRING,
  },
  { tableName: "festival_editions", timestamps: false },
);

/* Budget */
export const Budget = sequelize.define(
  "Budget",
  {
    id_budget: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    type: { type: DataTypes.STRING, allowNull: false },
    scenario: DataTypes.STRING,
  },
  { tableName: "budgets", timestamps: false },
);

/* Category */
export const Category = sequelize.define(
  "Category",
  {
    id_category: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    label: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  { tableName: "categories", timestamps: false },
);

/* BudgetLine */
export const BudgetLine = sequelize.define(
  "BudgetLine",
  {
    id_line: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    libelle: { type: DataTypes.STRING, allowNull: false },
    quantity: { type: DataTypes.FLOAT, defaultValue: 0 },
    pu: { type: DataTypes.FLOAT, defaultValue: 0 },
    total: { type: DataTypes.FLOAT, defaultValue: 0 },
  },
  { tableName: "budget_lines", timestamps: false },
);

/* Associations */
FestivalEdition.hasMany(Budget, { foreignKey: "id_edition" });
Budget.belongsTo(FestivalEdition, { foreignKey: "id_edition" });

Budget.hasMany(BudgetLine, { foreignKey: "id_budget" });
BudgetLine.belongsTo(Budget, { foreignKey: "id_budget" });

Category.hasMany(BudgetLine, { foreignKey: "id_category" });
BudgetLine.belongsTo(Category, { foreignKey: "id_category" });
