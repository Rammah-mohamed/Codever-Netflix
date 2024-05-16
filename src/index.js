import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TypeContextProvider } from "./context/typeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<TypeContextProvider>
			<App />
		</TypeContextProvider>
	</React.StrictMode>
);
