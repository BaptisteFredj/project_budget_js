const express = require("express");

const router = express.Router();

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

// Category operations routes
const category = require("./controllers/categoryActions");

router.get("/categories", authenticateUser, category.readByUserId);
router.get("/categories/:id", authenticateUser, category.readByCategoryId);
router.post("/categories", authenticateUser, category.add);
router.put("/categories/:id", authenticateUser, category.edit);
router.delete("/categories/:id", authenticateUser, category.destroy);

// Transaction operations routes
const transaction = require("./controllers/transactionActions");

router.get("/transactions", transaction.browse);
router.get("/transactions/:id", transaction.read);
router.post("/transactions", transaction.add);
router.put("/transactions/:id", transaction.edit);
router.delete("/transactions/:id", transaction.destroy);

// Budget operations routes
const budget = require("./controllers/budgetActions");

router.get("/budgets", budget.browse);
router.get("/budgets/:id", budget.read);
router.post("/budgets", budget.add);
router.put("/budgets/:id", budget.edit);
router.delete("/budgets/:id", budget.destroy);

module.exports = router;
