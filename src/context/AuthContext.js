import React, { useReducer } from "react";
import reducer from "../reducers/AuthReducer";

export const AuthContext = React.createContext();

const initialState = {
	user: null,
};

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>
	);
};
