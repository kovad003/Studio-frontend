export const CHANGE_DASHBOARD_PAGE = "CHANGE_DASHBOARD_PAGE";

const reducer = (state, action) => {
	if (action.type === CHANGE_DASHBOARD_PAGE) {
		const newState = { ...state, currentPage: action.payload };
		return newState;
	}

	return state;
};

export default reducer;
