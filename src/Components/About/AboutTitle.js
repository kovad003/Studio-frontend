import React from "react";
/* import logo from "../../assets/logo.svg"; */

import styled from "styled-components";

const AboutTitle = () => {
  return (
    <StyledAboutTitle>
      <div>
        <h1 className="AboutTitle__text">About</h1>
      </div>
    </StyledAboutTitle>
  );
};

const StyledAboutTitle = styled.div`
  .AboutTitle__text {
    font-size: 34px;
    padding-left: 14px;
    font-weight: 600;
  }

  h1 {
    border-left: 11px solid ${(props) => props.theme.aboutTitle} !important;
  }

  // Media Query for a responsive design on devices of 850px width or less
  @media (max-width: 850px) {
    .AboutTitle__text {
      font-size: 24px;
      padding-left: 10px;
    }
  }
`;
export default AboutTitle;
