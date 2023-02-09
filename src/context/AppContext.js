import React, { useReducer } from "react";
import reducer from "../reducers/AppReducer";
import { CHANGE_DASHBOARD_PAGE } from "../reducers/AppReducer";

export const AppContext = React.createContext();

const initialState = {
	currentPage: "Home",
};

export const AppContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const changeDashboardPage = (page) => {
		dispatch({ type: CHANGE_DASHBOARD_PAGE, payload: page });
	};

	return (
		<AppContext.Provider value={{ ...state, changeDashboardPage }}>
			{children}
		</AppContext.Provider>
	);
};
