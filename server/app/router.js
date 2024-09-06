const express = require("express");

const router = express.Router();

const user = require("./controllers/userActions");
const category = require("./controllers/categoryActions");

// User routes
router.get("/users", user.browse);
router.get("/user/:id", user.read);
router.post("/user", user.add);
router.put("/user/:id", user.edit);
router.delete("/user/:id", user.destroy);

// Category cruds
router.get("/categories", category.browse);
router.get("/category/:id", category.read);
router.post("/category", category.add);
router.put("/category/:id", category.edit);
router.delete("/category/:id", category.destroy);

module.exports = router;
