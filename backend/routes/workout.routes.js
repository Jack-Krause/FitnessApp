const express = require("express");
const router = express.Router();
const WorkoutController = require("../controllers/workout.controller");

router.post("/addtoplaylist/", WorkoutController.addNewWorkoutToPlayList);

module.exports = router;