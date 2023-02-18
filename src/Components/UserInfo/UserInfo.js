import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PageContainer from "../PageContainer/PageContainer";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const { auth } = useAuth();
  const { id } = useParams();

  const getUser = async () => {
    try {
      const response = await axios.get(
        /*   `/api/useraccount/get-user/d76ce46e-a8f0-4a0f-8e13-12f897f5c1eb`, */
        `/api/useraccount/get-user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  return (
    <StyledUserInfo>
      <PageContainer>
        <BreadCrumbs />
        <h1 className="page-title">User Info</h1>

        {user ? (
          <>
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
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.company}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.role}</td>
                </tr>
              </tbody>
            </table>

            {/*  <span>{user.firstName}</span>
            <span>{user.lastName}</span>
            <span>{user.company}</span>
            <span>{user.email}</span>
            <span>{user.phoneNumber}</span>
            <span>{user.role}</span> */}
          </>
        ) : (
          "Loading..."
        )}
      </PageContainer>
    </StyledUserInfo>
  );
};

const StyledUserInfo = styled.section`
  /* padding: 20px;
  background-color: #fff; */

  /*  padding: 20px; */

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
`;

export default UserInfo;
