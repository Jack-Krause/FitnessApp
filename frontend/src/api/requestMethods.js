import React from "react";
import axios from "axios";

// GET request to sign in user
export const signIn = async (email, password) => {
    try {
        const response = await axios.get(`http://127.0.0.1:4000/`)
    } catch (err) {
        console.error("[api] error", err);
        throw err;
    }
};

// POST request to add user's info
export const register = async (email, password, name) => {

};