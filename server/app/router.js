const express = require("express");

const router = express.Router();

const category = require("./controllers/categoryActions");
const transaction = require("./controllers/transactionActions");
const budget = require("./controllers/budgetActions");

// Category routes
router.get("/categories", category.browse);
router.get("/categories/:id", category.read);
router.post("/categories", category.add);
router.put("/categories/:id", category.edit);
router.delete("/categories/:id", category.destroy);

// Transaction routes
router.get("/transactions", transaction.browse);
router.get("/transactions/:id", transaction.read);
router.post("/transactions", transaction.add);
router.put("/transactions/:id", transaction.edit);
router.delete("/transactions/:id", transaction.destroy);

// Budget routes
router.get("/budgets", budget.browse);
router.get("/budgets/:id", budget.read);
router.post("/budgets", budget.add);
router.put("/budgets/:id", budget.edit);
router.delete("/budgets/:id", budget.destroy);

module.exports = router;
