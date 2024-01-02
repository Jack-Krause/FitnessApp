const mongoose = require("mongoose");

// Schema defining a basic individual exercise (i.e. squats, dumbbell bench)
const exerciseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        // sets performed or to be performed (i.e. 3 sets of 8 repititions)
        sets: {
            type: Number,
            required: true,
            default: 0,
            min: 0
        },

        // repititions performed or to be performed
        reps: {
            type: Number,
            required: true,
            default: 0,
            min: 0
        },

        weight: {
            type: Number,
            required: true,
            default: 0,
            min: 0
        },

        workout: {
            type: mongoose.Schema.ObjectId, ref: "Workout"
        }
    }
);

const Exercise = mongoose.model("Exercise", exerciseSchema, "exercises");

module.exports = Exercise;
