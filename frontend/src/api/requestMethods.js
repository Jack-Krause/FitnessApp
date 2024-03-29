import React from "react";
import axios from "axios";

// GET request to sign in user
export const signIn = async (inputEmail, inputPassword) => {
	try {
		const response = await axios.post("http://127.0.0.1:4000/user/signin", {
			email: inputEmail,
			password: inputPassword,
		});
		return response;
	} catch (err) {
		console.error("[api] error", err);
		throw err;
	}
};

// POST request to add user info
export const register = async (inputEmail, inputPassword, inputName) => {
	try {
		console.log(inputEmail, inputPassword, inputName);
		const response = await axios.post("http://127.0.0.1:4000/user/register", {
			email: inputEmail,
			password: inputPassword,
			name: inputName,
		});

		return response;
	} catch (err) {
		console.error("[api] error", err);
		throw err;
	}
};

// provides searching and browsing from public API
export const getExercise = async (key, param) => {
	const url = "https://wger.de/api/v2/" + key + "/search";

	try {
		const response = await axios.get(url, {
			params: {
				language: "en",
				term: param,
			},
		});
		return response;
	} catch (err) {
		console.error("[public api error]", err);
		throw err;
	}
};

// send to backend an exercise to be saved to user's library
export const postExercise = async (
	userEmail,
	exerciseName,
	exerciseCategory
) => {
	try {
		const response = await axios.post(
			`http://127.0.0.1:4000/exercise/postExercise/${userEmail}`,
			{
				name: exerciseName,
				category: exerciseCategory,
			}
		);

		return response;
	} catch (err) {
		console.error("[api] error", err);
		return err;
	}
};

export const getPlaylist = async (userEmail) => {
	try {
		//call axios url
		const response = axios.post(
			"http://127.0.0.1:4000/user/getplaylist",
			{
				email: userEmail
			}
		);

		return response;
	} catch (err) {
		console.error("[api error]", err);
		return err;
	}
};

export const addToPlaylist = async (userEmail, workoutName) => {
	try {
		const response = axios.post(
			"http://127.0.0.1:4000/workout/addtoplaylist",
			{
				email: userEmail,
				name: workoutName
			}
		);

		return response;
	} catch (err) {
		console.error("[api error]", err);
		return err;
	}

};
