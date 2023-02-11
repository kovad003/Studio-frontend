import React from "react";
import { Outlet } from "react-router";
import { useLocation } from "react-router";

const RootPage = () => {
	const location = useLocation();
	const path = location.pathname;
	console.log(path);
	return (
		<section>
			<Outlet />
		</section>
	);
};

export default RootPage;
