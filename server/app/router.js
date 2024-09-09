const express = require("express");

const router = express.Router();

const user = require("./controllers/userActions");
const auth = require("./controllers/authActions");
const category = require("./controllers/categoryActions");
const transaction = require("./controllers/transactionActions");
const budget = require("./controllers/budgetActions");

// User operations routes
router.get("/users", user.browse);
router.get("/users/:id", user.read);
router.post("/users", user.add);
router.put("/users/:id", user.edit);
router.delete("/users/:id", user.destroy);

// Auth operations routes
router.post("/login", auth.login);

// Category operations routes
router.get("/categories", category.browse);
router.get("/categories/:id", category.read);
router.post("/categories", category.add);
router.put("/categories/:id", category.edit);
router.delete("/categories/:id", category.destroy);

// Transaction operations routes
router.get("/transactions", transaction.browse);
router.get("/transactions/:id", transaction.read);
router.post("/transactions", transaction.add);
router.put("/transactions/:id", transaction.edit);
router.delete("/transactions/:id", transaction.destroy);

// Budget operations routes
router.get("/budgets", budget.browse);
router.get("/budgets/:id", budget.read);
router.post("/budgets", budget.add);
router.put("/budgets/:id", budget.edit);
router.delete("/budgets/:id", budget.destroy);

module.exports = router;
