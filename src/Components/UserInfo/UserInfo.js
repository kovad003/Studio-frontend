import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PageContainer from "../PageContainer/PageContainer";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import Avatar from "../ProjectList/Avatar";
import Status from "../Status/Status";
/* import SectionTitle from "./SectionTitle"; */
import SectionTitle from "../ProjectInfo/SectionTitle";

/* const UserInfo = () => { */
const UserInfo = () => {
  const [user, setUser] = useState(null);
  const { auth } = useAuth();
  const { id } = useParams();

  const getUser = async () => {
    try {
      /* const response = await axios.get(`/api/useraccount/get-user/${id}`, { */
      const response = await axios.get(
        `/api/useraccount/get-user/d76ce46e-a8f0-4a0f-8e13-12f897f5c1eb`,
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
    <PageContainer>
      {/* <BreadCrumbs /> */}
      <h1 className="page-title">User Info</h1>
      <StyledUserInfo>
        {user ? (
          <>
            <span>{user.userName}</span>
          </>
        ) : (
          "Loading..."
        )}
      </StyledUserInfo>
    </PageContainer>
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