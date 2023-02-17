import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PageContainer from "../PageContainer/PageContainer";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";

/* const UserInfo = () => { */
const UserInfo = () => {
  const [user, setUser] = useState(null);
  const { auth } = useAuth();
  const { id } = useParams();

  const getUser = async () => {
    try {
      /* const response = await axios.get(`/api/useraccount/get-user/${id}`, { */
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
      <BreadCrumbs />
      <h1 className="page-title">User Info</h1>

      {user ? (
        <>
          {/*      <span>{user.userName}</span> */}
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
          <span>{user.company}</span>
          <span>{user.email}</span>
          <span>{user.phoneNumber}</span>
          <span>{user.role}</span>
        </>
      ) : (
        "Loading..."
      )}
    </StyledUserInfo>
  );
};

const StyledUserInfo = styled.section`
  padding: 20px;
  background-color: #fff;

  .projcet--main-content {
    display: flex;
    align-items: flex-start;
    gap: 20px;

    .project-details {
      width: 300px;

      .project-details-card {
        background-color: #eff5ff;
        border-radius: 10px;
        padding: 20px;

        .detail-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          margin-bottom: 6px;

          .client-name {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 4px;
          }
        }
      }
    }

    .project-section {
      margin-top: 20px;
      flex: 1;

      .no-content {
        text-align: center;
        color: #c4c4c4;
        font-weight: 900;
      }

      img {
        width: 150px;
        height: 100px;
        border-radius: 10px;
        object-fit: cover;
      }

      .project--header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .project-title {
          font-size: 18px;
        }

        .project--edit-btn {
          width: 120px;
          height: 30px;
          background-color: #445e85;
          color: #fff;
          border-radius: 4px;
          border: none;
        }
      }

      .project-description {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.8;
      }
    }
  }
`;

export default UserInfo;
