import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
import { AuthenticatedViewProvider } from "./contexts/AuthenticatedViewProvider";
import { WorkoutPlaylistProvider } from "./contexts/WorkoutPlaylistProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthenticatedViewProvider>
			<WorkoutPlaylistProvider>
				<App />
			</WorkoutPlaylistProvider>
		</AuthenticatedViewProvider>
	</React.StrictMode>
);
