import React from "react";
import logo from "../../assets/logo.svg";
import styled from "styled-components";

const AboutTitle = () => {
  return <StyledAboutTitle src={logo} alt="about-logo" />;
};

const StyledAboutTitle = styled.img`
  display: block;
  width: 150px;
  margin: 10px 20px;
`;

export default AboutTitle;
