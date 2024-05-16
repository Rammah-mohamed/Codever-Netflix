import { createContext, useReducer } from "react";
import TypeReducer from "./typeReducer";

const INITIAL_STATE = {
	type: "",
};

export const TypeContext = createContext(INITIAL_STATE);

export const TypeContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(TypeReducer, INITIAL_STATE);

	return (
		<TypeContext.Provider value={{ type: state.type, dispatch }}>{children}</TypeContext.Provider>
	);
};
