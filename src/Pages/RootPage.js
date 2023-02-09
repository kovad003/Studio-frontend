import React from "react";
import { Outlet } from "react-router";

const RootPage = () => {
	return (
		<section>
			<Outlet />
		</section>
	);
};

export default RootPage;
