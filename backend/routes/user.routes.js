const express = require("express");
const router = express.Router();
const UserController = require("../controllers/usercontroller");

// router.get("/", UserController.getAllUsers);

// Sign in post request
router.post("/user/signin", UserController.getUser);

// Registration post request
router.post("/user/register", UserController.createUser);

module.exports = router;