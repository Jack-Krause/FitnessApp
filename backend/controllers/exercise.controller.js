const Exercise = require("../models/exercise.model");
const UserController = require("./user.controller");

const ExerciseController = {
	createExercise: async (req, res) => {
		try {
			const { name, category } = req.body;
			const email = req.params.userEmail;

			const user = await UserController.getUserByEmail(email);

			if (!user) {
				return res.status(404).send("unable to retrieve user");
			}

			const isExerciseDuplicate = user.exerciseLibrary.some(
				(exercise) => exercise.name === name && exercise.category === category
			);

			if (isExerciseDuplicate) {
				return res.status(400).send("Exercise is a duplicate");
			}

			const exerciseToPost = new Exercise({
				name,
				category,
				sets: 0,
				reps: 0,
				weight: 0,
			});

			await exerciseToPost.save();
			user.exerciseLibrary.push(exerciseToPost);
			await user.save();

			res.status(201).send("Exercise creation+save success");
		} catch (error) {
			res.status(500).send(error.message);
		}
	},
};

module.exports = ExerciseController;
