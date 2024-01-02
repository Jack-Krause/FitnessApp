const Exercise = require("../models/exercise.model");

const ExerciseController = {

    createExercise: async (req, res) => {
        try {
            const { name, sets, reps, weight } = req.body;
            console.log(name, sets, reps, weight);

            const exerciseToPost = new Exercise({
                name,
                sets,
                reps,
                weight
            });

            await exerciseToPost.save();

            res.status(201).send("Exer creation success");
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = ExerciseController;