const express = require("express");
const router = express.Router();
const ExerciseController = require("../controllers/exercise.controller");

// Create and save an exercise to the database from the public api
router.post("/addExercise", ExerciseController.createExercise);

module.exports = router;