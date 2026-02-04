# TP Bastard Rockin Fest

API Node.js pour la gestion de budgets d'un festival (Express + Sequelize + PostgreSQL).

## Objectifs du TP
- Mettre en place une API REST simple.
- Travailler une architecture minimale (routes, modèles, accès DB).
- Manipuler un modèle relationnel avec Sequelize.
- Couvrir la base avec des tests (intégration + fonctionnels).
- Préparer une base pour CI/CD.

## Stack
- Node.js (ESM)
- Express
- Sequelize + PostgreSQL
- Jest + Supertest
- ESLint

## Architecture
```
src/
  app.js        # bootstrap serveur + DB
  db.js         # connexion Sequelize
  models.js     # modèles + associations
  routes.js     # endpoints REST
test/
  _db.js        # helpers DB de test
  jest.setup.js # configuration app Jest
  *.test.js     # tests
```

## Modèle de données
Tables principales (noms de tables explicites dans `models.js`) :
- `festival_editions`
- `budgets`
- `categories`
- `budget_lines`

Relations :
- `FestivalEdition` 1..N `Budget`
- `Budget` 1..N `BudgetLine`
- `Category` 1..N `BudgetLine`

## Prérequis
- Node.js 18+ recommandé
- PostgreSQL

## Configuration
Copier `.env-sample` vers `.env` et ajuster les valeurs :
```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=example
DB_USER=postgres
DB_PASSWORD=postgres
```

## Installation
```
npm install
```

## Lancer l’API
```
npm run dev
```

## Endpoints
Base URL: `http://localhost:3000`

- `POST /festival-editions`
- `GET /festival-editions`
- `POST /budgets`
- `GET /budgets/:editionId`
- `POST /categories`
- `GET /categories`
- `POST /budget-lines`
- `GET /budgets/:id/lines`

## Tests
Les tests utilisent une base PostgreSQL (définie via `.env`) et réinitialisent le schéma à chaque suite.

```
npm run test
```

## Qualité
```
npm run lint
npm run lint:fix
```

## CI/CD
(à venir)

