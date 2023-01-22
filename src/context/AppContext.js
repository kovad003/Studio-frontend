import React, { useReducer, useContext } from "react";
import reducer from "../reducers/AppReducer";

const AppContext = React.createContext();

const initialState = {
	test: "test",
};

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};
