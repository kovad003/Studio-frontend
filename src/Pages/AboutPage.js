import React from "react";
import styled from "styled-components";
import { AboutLogo, AboutTitle, Button } from "../Components";
import AboutImgMob from "../assets/images/about-img-mob.jpg";
import AboutImgDesktop from "../assets/images/about-img-desktop.jpg";
import AboutFooter from "../Components/About/AboutFooter";

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <div className="AboutPage__content-outer">
        <div className="AboutPage__content-title">
          <AboutTitle />
        </div>
        <div className="AboutPage__content-inner">
          <div className="AboutPage__content-left">
            <p className="AboutPage__content-p1">
              Welcome to the Studio Portal Web App! This web app serves as part
              of the David Kele business enterprise. The website
              www.davidkele.com is an Independent Business Enterprise
              (selbständige gewerbebetrieb) based in Berlin, Germany. The
              company is owned and run by the business owner David Kele, and the
              primary business activity of the company is stylist work. The
              company also conducts other activities such as ecommerce, content
              creation, product design, and still life fashion work.
            </p>

            <p className="AboutPage__content-p2">
              For registered clients, the Studio Portal Web App provides a
              platform for clients to send projects and tasks to
              www.davidkele.com via an interactive, private dashboard. Alongside
              sending project tasks, clients can communicate directly with the
              studio via an innovative, in-app commenting feature. The studio
              can also respond and assist with any task! If you or your business
              wish to become a client of the studio, please feel free to get in
              touch!
            </p>
          </div>
          <div className="AboutPage__content-right">
            <picture>
              <source media="(max-width: 768px)" srcSet={AboutImgMob} />
              <source media="(min-width: 768px)" srcSet={AboutImgDesktop} />
              <img
                className="AboutPage__picture"
                src={AboutImgDesktop}
                alt="About"
              />
            </picture>
          </div>
        </div>

        <div className="AboutPage__footer-div">
          <AboutFooter />
        </div>
      </div>

      <div className="AboutPage__copyright-div">
        <p className="AboutPage__copyright-text">
          All rights reserved &#169;{new Date().getUTCFullYear()}
        </p>
      </div>
    </StyledAboutPage>
  );
};

const StyledAboutPage = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  width: 100vw;
  height: calc(100vh - 60px);
  padding-left: 29px;
  padding-right: 29px;

  .AboutPage__content-outer {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    top: 18px;
    background-color: ${(props) => props.theme.white};
    flex: 1;
    display: flex;

    .AboutPage__content-title {
      /* width: 100%; */
      width: 95%;
      padding: 50px 0px 10px 20px;
      flex: 1;
      display: flex;
    }

    .AboutPage__content-p1 {
      text-align: justify;
      text-justify: inter-word;
      margin-bottom: 10px;
      margin-top: 10px;
    }

    .AboutPage__content-p2 {
      text-align: justify;
      text-justify: inter-word;
    }

    .AboutPage__content-inner {
      display: flex;
      justify-content: center;
      width: 95%;
    }

    .AboutPage__content-left {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: auto;
      padding: 20px;
    }

    .AboutPage__content-right {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding: 20px;

      .AboutPage__picture {
        border-radius: 12px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .AboutPage__footer-div {
    width: 95%;
    flex: 1;
    display: flex;
    padding: 5px 0px 40px 20px;
  }

  .AboutPage__copyright-div {
    position: absolute;
    bottom: 10px;
    display: flex;
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 95%;
  }

  .AboutPage__copyright-text {
    font-size: 14px;
    color: ${(props) => props.theme.darkTextColor};
    user-select: none;
  }

  // Media Query for a responsive design on devices of 850px width or less
  @media (max-width: 850px) {
    padding-left: 5px;
    padding-right: 5px;

    .AboutPage__content-title {
      padding: 30px 0px 10px 6px !important;
    }

    .AboutPage__content-inner {
      flex-direction: column;

      .AboutPage__content-left {
        width: 100%;
        padding: 5px;
      }

      .AboutPage__content-right {
        width: 100%;
        padding: 5px;
      }
    }

    .AboutPage__footer-div {
      padding: 15px 0px 25px 6px;
    }

    .AboutPage__copyright-div {
      position: relative;
      top: 20px;
      display: flex;
      justify-content: center;
      padding-top: 5px;
      padding-bottom: 5px;
      width: 100%;
    }
  }
`;

export default AboutPage;
