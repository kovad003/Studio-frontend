/* import React from "react"; */
import styled from "styled-components";
import { usePopper } from "react-popper";
import React, { useState, useRef } from "react";
import classNames from "classnames";

const DashboardInfoCard = ({ icon, title, icon2, quantity, background }) => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef();
  const tooltipRef = useRef();

  const { styles, attributes } = usePopper(boxRef.current, tooltipRef.current);

  const onClickHeader = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledDashboardCard>
      <div ref={boxRef} className="box">
        <p onClick={onClickHeader} className="title">
          Click me!
        </p>
        <div>Dummy text</div>
      </div>

      <div
        className={classNames("tooltip", { "tooltip-hidden": !isOpen })}
        ref={tooltipRef}
        style={styles.popper}
        {...attributes.popper}
      >
        <div>an example tooltip</div>
      </div>

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

  // Tooltip styles
  .box .description-active {
    display: block;
  }

  .tooltip {
    background-color: indianred;
  }

  .tooltip-hidden {
    visibility: hidden;
    pointer-events: none;
  }
`;

export default DashboardInfoCard;
