import React from "react";
import styled from "styled-components";

const DashboardInfoCard = ({ icon, title, icon2, quantity, background }) => {
  return (
    <StyledDashboardCard>
      <div className="DashboardCard__top">
        <span
          className="DashboardCard__icon"
          style={{ backgroundColor: background }}
        >
          {icon}
        </span>
        <span className="DashboardCard__title">{title}</span>
        <span className="DashboardCard__icon2">{icon2}</span>
      </div>
      <div className="DashboardCard__bottom">
        <span className="DashboardCard__quantity">{quantity}</span>
      </div>
    </StyledDashboardCard>
  );
};

const StyledDashboardCard = styled.div`
  height: 91px;
  border-radius: 10px;
  background-color: #fff;
  flex: 1;
  font-size: 16px;

  // top section styling
  .DashboardCard__top {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;

    .DashboardCard__icon {
      /* padding: 5px 3px 3px 3px; */
      /* border-radius: 50%; */
      width: 26px;
      height: 26px;
      border-radius: 13px;
      padding: 4px 2px 2px 4.5px;
      /* margin-top: 1px; */
    }

    .DashboardCard__title {
      margin-right: 10px;
      margin-left: 10px;
      color: ${(props) => props.theme.lightCardColor};
    }
    .DashboardCard__icon2 {
      padding-top: 5px;
      color: ${(props) => props.theme.lightInfoIcon};
    }
  }

  // bottom section styling
  .DashboardCard__bottom {
    display: flex;
    justify-content: center;

    .DashboardCard__quantity {
      font-size: 38px;
    }
  }
`;

export default DashboardInfoCard;
