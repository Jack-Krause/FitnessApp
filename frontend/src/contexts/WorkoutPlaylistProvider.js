import React, { createContext, useState, useContext, useEffect } from "react";
import { getPlaylist } from "../api/requestMethods";
import { useAuthenticatedView } from "./AuthenticatedViewProvider";

const WorkoutPlaylistContext = createContext();

// context that allows users to view, modify, use, and list playlists from their profile
// playlist is simply a list of workout.model 'templates' linked to the user
export const WorkoutPlaylistProvider = ({ children }) => {
    // actual playlist retrieved from backend (basically a list of workout templates)
    const [queriedPlaylist, setQueriedPlaylist] = useState([]);
    // const userEmail = localStorage.getItem("userEmail");
    const { userAuthenticated, userEmail } = useAuthenticatedView();

    // TODO: (functional requirements)
    // call retrieve user playlist (GET) (use api helper)
    // allow creation of template workouts and add to playlist (POST) (api helper)
    // allow completion of a workout from the playlist (POST) (workout: template -> data filled)

    const fetchPlaylist = async () => {
        const dataPromise = getPlaylist(userEmail);
        dataPromise
            .then((data) => {
                setQueriedPlaylist(data);
            })
            .catch((error) => {
                console.error("[fetchPlaylist]", error);
            });
    };

    useEffect(() => {
        if (userAuthenticated) {
            console.warn("AAAAA");
            console.count();
            fetchPlaylist();
        } else {
            console.warn("BBBBB");
            console.count();
        }
    });

    return (
        <WorkoutPlaylistContext.Provider
            value={{
                queriedPlaylist,
                setQueriedPlaylist,
                fetchPlaylist,
            }}
        >
            {children}
        </WorkoutPlaylistContext.Provider>
    );
};

export const useWorkoutPlaylist = () => {
    return useContext(WorkoutPlaylistContext);
};
