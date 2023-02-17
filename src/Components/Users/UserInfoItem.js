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
      <span className="client-name col-1">{firstName}</span>

      <span className="col-2">{lastName}</span>
      <span className="col-3">{company}</span>
      <span className="col-4">{email}</span>
      <span className="col-5">{phoneNumber}</span>
      <span className="col-5">{role}</span>

      {/*
      <tr className="UsersPage__table-row" type="button">
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{company}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
        <td>{role}</td>
      </tr> 
      */}
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
    padding-left: 8px;
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

export default UserInfoItem;
