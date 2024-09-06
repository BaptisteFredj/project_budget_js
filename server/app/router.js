const express = require("express");

const router = express.Router();

const user = require("./controllers/userActions");

// User routes
router.get("/users", user.browse);
router.get("/user/:id", user.read);
router.post("/user", user.add);
router.put("/user/:id", user.edit);
router.delete("/user/:id", user.destroy);

module.exports = router;
