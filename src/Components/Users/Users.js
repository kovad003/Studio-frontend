import React, { Fragment } from "react";
import PageContainer from "../PageContainer/PageContainer";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { Outlet } from "react-router";

const Users = () => {
  return (
    <Fragment>
      {/* <BreadCrumbs /> */}
      <Outlet />
    </Fragment>
  );
};

export default Users;
