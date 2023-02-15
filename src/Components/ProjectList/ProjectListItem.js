import React from "react";
import Avatar from "./Avatar";
import Status from "../Status/Status";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

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
      <span className="col-6">
        <button className="col-6__btn">{<AiOutlineDelete size={20} />}</button>
      </span>
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

  .col-3 {
    grid-column: 4 / span 4;
  }

  .col-5 {
    grid-column: 9 / span 1;
  }

  .col-6 {
    grid-column: 10 / span 1;
    padding-left: 8.5px;
  }

  .col-6__btn {
    background-color: ${(props) => props.theme.dangerBg};
    width: 36px;
    height: 36px;
    border-radius: 18px;
    padding: 1px 0px 0px 1px;
    border: none;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.deleteBtnHover};
    }
  }
`;

export default ProjectListItem;
