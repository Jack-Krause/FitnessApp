import React, { useContext } from "react";
import { useAuthenticatedView } from "../contexts/AuthenticatedViewProvider";

const Home = () => {
    console.log("home");
    return (

        <div>
            <main>
                <h1>Home Page</h1>
            </main>
        </div>
    );
};


export default Home;