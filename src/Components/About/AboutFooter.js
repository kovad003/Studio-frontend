import React from "react";

import styled from "styled-components";

const AboutFooter = () => {
  return (
    <StyledAboutFooter>
      <div className="AboutPage__footer">
        <button className="AboutPage__footer-btn">Contact Us</button>
      </div>
    </StyledAboutFooter>
  );
};

const StyledAboutFooter = styled.div`
  .AboutPage__footer {
    /* margin: 28px 0px 28px 20px; */
  }

  .AboutPage__footer-btn {
    width: 154px;
    height: 40px;
    border-radius: 6px;
    color: ${(props) => props.theme.primaryColor};
    background-color: #0b63e554;
    font-size: 16px;
    font-weight: 600;
    height: 42px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: none;
  }
`;
export default AboutFooter;
