const express = require("express");

const router = express.Router();

const user = require("./controllers/userActions");
const category = require("./controllers/categoryActions");
const transaction = require("./controllers/transactionActions");
const budget = require("./controllers/budgetActions");

// User routes
router.get("/users", user.browse);
router.get("/user/:id", user.read);
router.post("/user", user.add);
router.put("/user/:id", user.edit);
router.delete("/user/:id", user.destroy);

// Category routes
router.get("/categories", category.browse);
router.get("/category/:id", category.read);
router.post("/category", category.add);
router.put("/category/:id", category.edit);
router.delete("/category/:id", category.destroy);

// Transaction routes
router.get("/transactions", transaction.browse);
router.get("/transaction/:id", transaction.read);
router.post("/transaction", transaction.add);
router.put("/transaction/:id", transaction.edit);
router.delete("/transaction/:id", transaction.destroy);

// Budget routes
router.get("/budgets", budget.browse);
router.get("/budget/:id", budget.read);
router.post("/budget", budget.add);
router.put("/budget/:id", budget.edit);
router.delete("/budget/:id", budget.destroy);

module.exports = router;
