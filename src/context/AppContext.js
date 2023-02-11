import React, { useReducer } from "react";
import reducer from "../reducers/AppReducer";
import { CHANGE_DASHBOARD_PAGE, SET_PROJECTS } from "../reducers/AppReducer";

export const AppContext = React.createContext();

const initialState = {
	currentPage: "Home",
	projects: null,
};

export const AppContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const changeDashboardPage = (page) => {
		dispatch({ type: CHANGE_DASHBOARD_PAGE, payload: page });
	};

	const setProjects = (projects) => {
		dispatch({ type: SET_PROJECTS, payload: projects });
	};

	return (
		<AppContext.Provider value={{ ...state, changeDashboardPage, setProjects }}>
			{children}
		</AppContext.Provider>
	);
};
