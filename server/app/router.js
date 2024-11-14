const express = require("express");

const router = express.Router();

const validator = require("./services/dataValidator");

// User operations routes
const user = require("./controllers/userActions");
const { hashPassword, authenticateUser } = require("./services/auth");

router.get("/users", user.browse);
router.get("/users/:id", user.read);
router.post("/users", hashPassword, user.add);
router.put("/users/:id", user.edit);
router.delete("/users/:id", user.destroy);

// Auth operations routes
const auth = require("./controllers/authActions");

router.post("/login", auth.login);

// Transaction operations routes
const icon = require("./controllers/iconActions");

router.get("/icons", icon.browse);

// Category operations routes
const category = require("./controllers/categoryActions");

router.get("/categories", authenticateUser, category.readCategoriesByUser);
router.get("/categories/:id", authenticateUser, category.readCategoryById);
router.post(
  "/categories",
  authenticateUser,
  validator.categoryFormValidator,
  category.add
);
router.put(
  "/categories/:id",
  authenticateUser,
  validator.categoryFormValidator,
  category.edit
);
router.delete("/categories/:id", authenticateUser, category.destroy);

// Transaction operations routes
const transaction = require("./controllers/transactionActions");

router.get(
  "/transactions",
  authenticateUser,
  transaction.readTransactionsByUser
);
router.get(
  "/transactions/:id",
  authenticateUser,
  transaction.readTransactionById
);
router.get(
  "/transactionstotalsum",
  authenticateUser,
  transaction.transactionsTotalSum
);
router.get(
  "/categoriestransactionstotalsum",
  authenticateUser,
  transaction.categoriesTransactionsTotalSum
);
router.post(
  "/transactions",
  authenticateUser,
  validator.transactionFormValidator,
  transaction.add
);
router.put(
  "/transactions/:id",
  authenticateUser,
  validator.transactionFormValidator,
  transaction.edit
);
router.delete("/transactions/:id", authenticateUser, transaction.destroy);

// Budget operations routes
const budget = require("./controllers/budgetActions");

router.get("/budgets", authenticateUser, budget.readBudgetsByUser);
router.get("/budgets/:id", authenticateUser, budget.readBudgetById);
router.post(
  "/budgets",
  authenticateUser,
  validator.budgetFormValidator,
  budget.add
);
router.put(
  "/budgets/:id",
  authenticateUser,
  validator.budgetFormValidator,
  budget.edit
);
router.delete("/budgets/:id", authenticateUser, budget.destroy);

module.exports = router;
