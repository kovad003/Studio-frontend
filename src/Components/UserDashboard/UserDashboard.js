import React from "react";
import { Outlet } from "react-router";
import UserDashboardHeader from "./UserDashboardHeader";

const UserDashboard = () => {
	return (
		<main>
			<UserDashboardHeader />
			<Outlet />
		</main>
	);
};

export default UserDashboard;
