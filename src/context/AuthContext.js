import React, { useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});

	const saveToLocalStorage = () => {
		localStorage.setItem("user", JSON.stringify(auth));
	};

	const readFromLocalStorage = () => {
		let user = null;
		if (localStorage.getItem("user")) {
			user = JSON.parse(localStorage.getItem("user"));
		}
		return user;
	};

	return (
		<AuthContext.Provider
			value={{
				auth,
				setAuth,
				saveToLocalStorage,
				readFromLocalStorage,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
