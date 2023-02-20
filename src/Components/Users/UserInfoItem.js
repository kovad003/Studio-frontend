import React from "react";
/* import Avatar from "./Avatar"; */
/* import Status from "../Status/Status"; */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import Status from "../Status/Status";

const UserInfoItem = ({
  id,
  userName,
  firstName,
  lastName,
  bio,
  company,
  email,
  phoneNumber,
  tokem,
  role,
}) => {
  return (
    <StyledUserInfoItem to={`/dashboard/users/${id}`}>
      <span className="UserInfoItem__dummy-indicator"></span>
      <span className="col-1">
        {firstName} {lastName}
      </span>
      <span className="col-2">{company}</span>
      <span className="col-3">{email}</span>
      <span className="col-4">{phoneNumber}</span>
      <span className="col-5">{role}</span>
    </StyledUserInfoItem>
  );
};

const StyledUserInfoItem = styled(Link)`
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

  .UserInfoItem__dummy-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 8px;
    height: 100%;
    background-color: #feb304;
    border-radius: 10px 0 0 10px;
  }

  .col-1 {
    grid-column: 1 / span 2;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .col-3 {
    grid-column: 4 / span 3;
  }

  .col-4 {
    grid-column: 7 / span 2;
  }

  .col-5 {
    grid-column: 9 / span 2;
  }
`;

export default UserInfoItem;
