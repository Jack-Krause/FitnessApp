const mongoose = require("mongoose");

// Schema defining a basic user model for the MongoDB collection 'fitnessdata.users'
const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        
        password: {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: false
        },

        // One-to-many relationship list of workouts for a single user
        workouts:
        [
            {
                type: mongoose.Schema.ObjectId, ref: "Workout"
            }
        ]
    }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
