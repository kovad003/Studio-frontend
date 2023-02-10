import React from "react";
import styled from "styled-components";
import { Button } from "../Components";

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <div className="AboutPage__header">
        <div className="AboutPage__header-left"></div>

        <div className="AboutPage__header-right">
          <div className="AboutPage__btn">
            <Button className="AboutPage__btn">Login</Button>
          </div>
        </div>
      </div>

      <h1>About page</h1>
      <div className="AboutPage__content">
        <div className="AboutPage__content-left"></div>
        <div className="AboutPage__content-right"></div>
      </div>

      <div className="AboutPage__footer"></div>
    </StyledAboutPage>
  );
};

const StyledAboutPage = styled.section``;

export default AboutPage;
