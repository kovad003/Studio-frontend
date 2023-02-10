import React from "react";
/* import logo from "../src/assets/logo.svg"; */
import logo from "../../assets/logo.svg";
import styled from "styled-components";

const AboutLogo = () => {
  return <StyledAboutLogo src={logo} alt="about-logo" />;
};

const StyledAboutLogo = styled.img`
  display: block;
  width: 150px;
  margin: 10px 20px;
`;

export default AboutLogo;
