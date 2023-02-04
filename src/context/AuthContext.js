import React, { useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({ user: { name: "Cihan" }, roles: [3] });
	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};
