import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import { useLocation } from "react-router";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const Updates = () => {
	const location = useLocation();

	return (
		<PageContainer>
			<BreadCrumbs />
			<h1 className="page-title">Updates page</h1>
		</PageContainer>
	);
};

export default Updates;
