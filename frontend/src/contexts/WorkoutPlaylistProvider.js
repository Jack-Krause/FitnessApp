import React, { createContext, useState, useContext, useEffect } from "react";

const WorkoutPlayListContext = createContext();

// context that allows users to view, modify, use, and list playlists from their profile
// playlist is simply a list of workout.model 'templates' linked to the user
export const WorkoutPlayListProvider = ( { children } ) => {
    // actual playlist retrieved from backend (basically a list of workout templates)
    const [queriedPlaylist, setQueriedPlayList] = useState([]);

    // TODO: (functional requirements)
    // call retrieve user playlist (GET) (use api helper)
    // allow creation of template workouts and add to playlist (POST) (api helper)
    // allow completion of a workout from the playlist (POST) (workout: template -> data filled)
    
    const fetchPlayList = async () => {
        try {
            // const data = await getPlayList();
            // setQueriedPlayList(data);
        } catch (err) {
            console.error("[fetchPlayList]", error);
            throw err;
        }
    };
    
    useEffect(() => {
        fetchPlayList();
    }, []);

    



};

