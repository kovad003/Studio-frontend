export const CHANGE_DASHBOARD_PAGE = "CHANGE_DASHBOARD_PAGE";
export const SET_PROJECTS = "SET_PROJECTS";

const reducer = (state, action) => {
	if (action.type === CHANGE_DASHBOARD_PAGE) {
		const newState = { ...state, currentPage: action.payload };
		return newState;
	}

	if (action.type === SET_PROJECTS) {
		const newState = { ...state, projects: action.payload };
		return newState;
	}

	return state;
};

export default reducer;
