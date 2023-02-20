import React from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useNavigate } from "react-router";
import UserInfoItem from "./UserInfoItem";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import PageContainer from "../PageContainer/PageContainer";

const UsersPage = () => {
  const [users, setUsers] = React.useState(null);
  const { auth } = useAuth();

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
        <div className="UsersPage__data-outer">
          <div className="UsersPage__data-top">
            <span className="title-1">Client Name</span>
            <span className="title-2">Company</span>
            <span className="title-3">Email</span>
            <span className="title-4">Phone Number</span>
            <span className="title-5">Role</span>
          </div>
          <div className="UsersPage__data-bottom">
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
                  return <UserInfoItem key={user.id} {...user} />;
                })
              : "Loading..."}
          </div>
        </div>
      </PageContainer>
    </StyledUsersPage>
  );
};

const StyledUsersPage = styled.div`
  .UsersPage__data-outer {
    background-color: ${(props) => props.theme.white};
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.borderColor};
    padding: 20px;
    width: 100%;
    height: fit-content;
  }

  .UsersPage__data-top {
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
      grid-column: 4 / span 3;
    }

    .title-4 {
      grid-column: 7 / span 2;
    }

    .title-5 {
      grid-column: 9 / span 2;
    }
  }

  .UsersPage__data-bottom {
    padding-top: 10px;
  }
`;

export default UsersPage;
