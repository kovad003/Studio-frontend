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
    color: red;
    font-size: 34px;
    padding-left: 14px;
  }

  h1 {
    border-left: 5px solid red !important;
  }
`;
export default AboutTitle;
