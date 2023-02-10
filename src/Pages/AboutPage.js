import React from "react";
import styled from "styled-components";
import { AboutLogo, Button } from "../Components";

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <div className="AboutPage__header">
        <div className="AboutPage__header-left"></div>

        <AboutLogo />

        <div className="AboutPage__header-right">
          <div className="AboutPage__btn">
            <Button>Login</Button>
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

const StyledAboutPage = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  height: 100vh;
  width: 100vw;

  /* display: flex;
  align-items: center;
  justify-content: center; */

  .AboutPage__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .AboutPage__left {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .AboutPage__right {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      padding: 0 10px;
    }

    .AboutPage__btn {
      width: 120px;
      height: 40px;
    }
  }
`;

export default AboutPage;
