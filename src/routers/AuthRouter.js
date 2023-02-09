import React from "react";
import useAuth from "../hooks/useAuth";

const AuthRouter = ({ children }) => {
	const { auth } = useAuth();

	if (auth.user) {
		return children;
	}
	return <div>Loading...</div>;
};

export default AuthRouter;
