const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

// Sign in post request
router.post("/signin", UserController.getUser);

// Registration post request
router.post("/register", UserController.createUser);

module.exports = router;