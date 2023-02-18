import React, { Fragment } from "react";
import { Outlet } from "react-router";

const Users = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default Users;
