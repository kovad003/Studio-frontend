import styled from "styled-components";
import { usePopper } from "react-popper";
import React, { useState, useRef } from "react";
import classNames from "classnames";

const DashboardInfoCard = ({ icon, title, icon2, quantity, background }) => {
  const [isVisible, setIsVisible] = useState(false);
  /* useRef returns a mutable ref object whose .current 
   property is initialized to the passed argument (initialValue). 
   The returned object will persist for the full lifetime of the component. */

  const tooltipOriginRef = useRef();
  const tooltipRef = useRef();

  const { styles, attributes } = usePopper(
    tooltipOriginRef.current,
    tooltipRef.current
  );

  const onClickShowTooltip = () => {
    setIsVisible(!isVisible);
  };

  return (
    <StyledDashboardCard>
      <div
        className={classNames("tooltip", { "tooltip-hidden": !isVisible })}
        ref={tooltipRef}
        style={styles.popper}
        {...attributes.popper}
      >
        <div>Info</div>
      </div>

      <div className="DashboardCard__top">
        <span
          className="DashboardCard__icon"
          style={{ backgroundColor: background }}
        >
          {icon}
        </span>
        <span className="DashboardCard__title">{title}</span>
        <span
          ref={tooltipOriginRef}
          onClick={onClickShowTooltip}
          className="DashboardCard__icon2"
        >
          {icon2}
        </span>
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
      width: 26px;
      height: 26px;
      border-radius: 13px;
      padding: 4px 2px 2px 4.5px;
    }

    .DashboardCard__title {
      margin-right: 10px;
      margin-left: 10px;
      color: ${(props) => props.theme.lightCardColor};
    }
    .DashboardCard__icon2 {
      padding-top: 5px;
      color: ${(props) => props.theme.lightInfoIcon};
      cursor: pointer;
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
  .tooltip {
    background-color: indianred;
  }

  .tooltip-hidden {
    visibility: hidden;
    pointer-events: none;
  }
`;

export default DashboardInfoCard;
