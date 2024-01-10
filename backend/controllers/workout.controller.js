const Workout = require("../models/workout.model");
const UserController = require("./user.controller");

const WorkoutController = {
	// add to the user's playlist a new workout template
	addNewWorkoutToPlayList: async (req, res) => {
		try {

			const { name } = req.body;
			const email = req.params.userEmail;

			const user = await UserController.getUserByEmail(email);

			if (!user) {
				return res.status(404).send("user not found");
			}

			const workoutToPost = new Workout({
				name,
				isTemplate: true,
				user
			});

			await workoutToPost.save();
			user.playlist.push(workoutToPost);
			await user.save();

			res.status(201).send("template added to playlist");
		} catch (error) {
			res.status(500).send(error.message);
		}
	},
};

module.exports = WorkoutController;