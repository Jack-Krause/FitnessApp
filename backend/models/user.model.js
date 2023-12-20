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
            required: true
        }
    }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
