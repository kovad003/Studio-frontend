import React from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useNavigate } from "react-router";
import UserInfoItem from "./UserInfoItem";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import PageContainer from "../PageContainer/PageContainer";

const UsersPage = ({ id }) => {
  const [users, setUsers] = React.useState(null);
  const { auth } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    /* navigate(`/dashboard/users/${id}`); */
    /*  navigate(`/dashboard/users/d76ce46e-a8f0-4a0f-8e13-12f897f5c1eb`); */
    navigate(`/dashboard/users/${id}`);
  }

  const getUsers = async () => {
    try {
      const response = await axios.get("/api/useraccount/get-users", {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      });
      const filteredUsers = response.data.filter(
        (user) => user.role !== "Admin"
      );
      setUsers(filteredUsers);
    } catch (error) {
      toast.error("An error occurred while retrieving users");
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <StyledUsersPage>
      {/* <PageContainer> */}
      <BreadCrumbs />
      <h1 className="page-title">Users page</h1>
      {/* <table>
          <thead>
            <tr> */}
      <div className="project-list--titles">
        <span className="title-1">Client Name</span>
        <span className="title-2">Company</span>
        <span className="title-3">Email</span>
        <span className="title-4">Phone Number</span>
        <span className="title-5">Role</span>
        {/*     <span className="title-6">Role</span> */}
        {/*  <th>Name</th>
      <th>Lastname</th>
      <th>Company</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>Role</th> */}
      </div>
      {/*   </tr>
          </thead>
          <tbody> */}
      {users
        ? users.map((user) => {
            const { firstName, lastName, company, email, phoneNumber, role } =
              user;
            return (
              <UserInfoItem key={user.id} {...user} />

              /*  <tr
                    className="UsersPage__table-row"
                    type="button"
                    onClick={handleClick}
                  >
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{company}</td>
                    <td>{email}</td>
                    <td>{phoneNumber}</td>
                    <td>{role}</td>
                  </tr> */
            );
          })
        : "Loading..."}
      {/*   </tbody>
        </table> */}
      {/*     </PageContainer> */}
    </StyledUsersPage>
  );
};

const StyledUsersPage = styled.div`
  /* background-color: #fff; */
  padding: 20px;

  /* table {
    border-collapse: collapse;
    width: 100%;

    th {
      background-color: ${(props) => props.theme.darkBgColor};
      color: #fff;
      text-align: left;
      padding: 6px;
    }
    td {
      padding: 6px;
    }

    tr:nth-child(odd) {
      background-color: ${(props) => props.theme.projectItemHover};
    }
  } */

  .project-list--titles {
    width: 100%;
    background-color: ${(props) => props.theme.darkBgColor};
    color: ${(props) => props.theme.white};
    height: 40px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    align-items: center;
    padding: 0 20px;

    .title-1 {
      grid-column: 1 / span 2;
    }

    .title-3 {
      grid-column: 4 / span 4;
    }

    .title-5 {
      grid-column: 9 / span 1;
    }

    .title-6 {
      grid-column: 10 / span 1;
    }
  }

  .UsersPage__table-row {
    :hover {
      background-color: ${(props) => props.theme.aboutHover};
      cursor: pointer;
    }
  }
`;

export default UsersPage;
