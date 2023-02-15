import React from "react";
import Avatar from "./Avatar";
import Status from "../Status/Status";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectListItem = ({ owner, id, title, isActive, createdOn }) => {
  return (
    <StyledProjectListItem to={`/dashboard/projects/${id}`}>
      <span
        className="indicator"
        style={{ backgroundColor: !isActive ? "#A2DAB8" : "#6FB8FC" }}
      ></span>
      <span className="client-name col-1">
        <Avatar owner={owner} />
        {owner.firstName} {owner.lastName}
      </span>
      <span className="col-2">{id.substring(0, 10)}</span>
      <span className="col-3">{title}</span>
      <span className="col-4">
        <Status type={isActive} />
      </span>
      <span className="col-5">{new Date(createdOn).toLocaleDateString()}</span>
      <span className="col-6">{new Date(createdOn).toLocaleDateString()}</span>
    </StyledProjectListItem>
  );
};

const StyledProjectListItem = styled(Link)`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  background-color: ${(props) => props.theme.projectItemBg};
  margin-bottom: 4px;
  height: 50px;
  border-radius: 10px;
  padding: 0 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  font-size: 14px;
  color: black;

  :hover {
    background-color: ${(props) => props.theme.projectItemHover};
  }

  span {
    display: grid;
    align-items: center;
  }

  .indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 8px;
    height: 100%;
    background-color: red;
    border-radius: 10px 0 0 10px;
  }

  :last-child {
    margin-bottom: 0;
  }

  .client-name {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .col-1 {
    grid-column: 1 / span 2;
  }

  .col-2 {
    grid-column: 3 / span 1;
  }

  .col-3 {
    grid-column: 4 / span 3;
  }

  .col-4 {
    grid-column: 7 / span 1;
  }

  .col-5 {
    grid-column: 8 / span 2;
  }

  .col-6 {
    grid-column: 10 / span 1;
  }

  /* 
  .col-1 {
    grid-column: 1 / span 2;
  }

  .col-3 {
    grid-column: 4 / span 4;
  }

  .col-5 {
    grid-column: 9 / span 2;
  } */
`;

export default ProjectListItem;
