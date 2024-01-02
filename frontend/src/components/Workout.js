import React, { useState, useEffect } from "react";
import axios from "axios";
import { getExercise } from "../api/requestMethods";

const Workout = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchExerciseData = async () => {
            try {
                const response = await getExercise("bench press");
                if (response.data.suggestions) {
                    setExercises(response.data.suggestions.map(item => item.data));
                } else {
                    console.error("Unexpected response format:", response);
                }
            } catch (err) {
                console.error("[public api error]", err);
            }
        };

        fetchExerciseData();
    }, []);

    return (
        <div>
            {/* Display exercises or use the data as needed */}
            {exercises.map((exercise) => (
                <div key={exercise.id}>{exercise.name}</div>
            ))}
        </div>
    );
};

export default Workout;
