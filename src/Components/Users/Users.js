import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { Outlet } from "react-router";

const Users = () => {
  return (
    <PageContainer>
      {/* <BreadCrumbs />
      <h1 className="page-title">Users page</h1> */}
      <Outlet />
    </PageContainer>
  );
};

export default Users;
