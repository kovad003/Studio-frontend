import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const Users = () => {
	return (
		<PageContainer>
			<BreadCrumbs />
			<h1 className="page-title">Users page</h1>
		</PageContainer>
	);
};

export default Users;
