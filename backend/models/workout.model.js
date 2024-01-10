const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },

  date: Date,

  // One-to-many list of exercises for a single workout
  exercises: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Exercise",
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema, "workouts");

module.exports = Workout;
