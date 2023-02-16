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

const UserInfo = () => {
  const [project, setProject] = useState(null);
  const { auth } = useAuth();
  const { id } = useParams();

  const getProject = async () => {
    try {
      const response = await axios.get(`/api/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      setProject(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  console.log(project);

  return (
    <PageContainer>
      {/* <BreadCrumbs /> */}
      <h1 className="page-title">User Info</h1>
      <StyledUserInfo>
        {project ? (
          <>
            <main className="projcet--main-content">
              <section className="project-section">
                <div className="project--header">
                  <h1 className="project-title">{project.title}</h1>
                  <button className="project--edit-btn">Edit</button>
                </div>
                <SectionTitle>Description</SectionTitle>
                <p className="project-description">{project.description}</p>
                <SectionTitle>Attachments</SectionTitle>
                <section className="project-attachment">
                  {project.photos.length > 0 ? (
                    project.photos.map((image) => {
                      return (
                        <a href={image.url} target="_blank">
                          <img key={image.id} src={image.url} alt={image.id} />
                        </a>
                      );
                    })
                  ) : (
                    <div className="no-content">No image to display</div>
                  )}
                </section>
                <SectionTitle>Comments</SectionTitle>
                <section className="project-comments">
                  {project.comments.length > 0 ? (
                    "Comments"
                  ) : (
                    <div className="no-content">No comments to display</div>
                  )}
                </section>
              </section>
              <section className="project-details">
                <SectionTitle>Project details</SectionTitle>
                <div className="project-details-card">
                  <div className="detail-item">
                    <span>Status: </span>
                    <span>
                      <Status type={project.isActive} />
                    </span>
                  </div>
                  <div className="detail-item">
                    <span>Created at: </span>
                    <span>
                      {new Date(project.createdOn).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span>Client: </span>
                    <span className="client-name">
                      <Avatar owner={project.owner} />
                      <span>
                        {project.owner.firstName} {project.owner.lastName}
                      </span>
                    </span>
                  </div>
                </div>
              </section>
            </main>
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
