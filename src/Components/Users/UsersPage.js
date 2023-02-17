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
      <PageContainer>
        <BreadCrumbs />
        <h1 className="page-title">Users page</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users
              ? users.map((user) => {
                  const {
                    firstName,
                    lastName,
                    company,
                    email,
                    phoneNumber,
                    role,
                  } = user;
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
          </tbody>
        </table>
      </PageContainer>
    </StyledUsersPage>
  );
};

const StyledUsersPage = styled.div`
  background-color: #fff;
  padding: 20px;

  table {
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
  }

  .UsersPage__table-row {
    :hover {
      background-color: ${(props) => props.theme.aboutHover};
      cursor: pointer;
    }
  }
`;

export default UsersPage;
