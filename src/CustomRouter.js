import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";
import {
	Dashboard,
	Login,
	Tickets,
	Welcome,
	Root,
	NotFound,
	About,
} from "./Pages";
// import ProtectedAuthRoute from "./Components/ProtectedRoute";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<NotFound />}>
			<Route index element={<Welcome />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/about" element={<About />} />
			<Route path="/login" element={<Login />} />
			<Route path="/tickets" element={<Tickets />} />
		</Route>
	)
);

const CustomRouter = () => {
	return <RouterProvider router={router} />;
};

export default CustomRouter;
