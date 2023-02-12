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
              Integer ut scelerisque lectus, in sodales justo. Etiam eleifend
              purus non massa semper tempor. Nulla mattis magna orci, nec
              elementum mi placerat in. Nam ornare, arcu non imperdiet euismod,
              enim ex tempor nunc, at varius enim dolor eget leo. Maecenas
              vestibulum semper nunc, eu maximus tellus sollicitudin et. In et
              mauris id arcu euismod ultrices sit amet accumsan metus. Mauris
              ultrices eros vitae lacus auctor ultrices. Sed pretium dui ligula,
              vitae consequat magna sodales vel. Maecenas auctor urna orci, eu
              aliquet felis rutrum ornare.
            </p>

            <p className="AboutPage__content-p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
              felis mi. In rhoncus elementum ipsum sed varius. Nulla nec cursus
              metus. Nam viverra eu neque at tempor. Nulla mauris nisl, euismod
              ut eros sit amet, luctus faucibus dui. Nunc vitae velit in ipsum
              pretium pharetra id in felis. Praesent pharetra fringilla tellus
              non fermentum. Nunc ante libero, mollis eu tempor sed, consequat
              vitae justo. Aenean mi magna, cursus id ornare ac, volutpat a
              purus. Nullam dictum commodo neque, eget aliquet mi egestas in.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dui nisi, porttitor vitae purus eget, varius rhoncus mi. Mauris
              suscipit interdum libero.
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
      width: 100%;
      padding: 30px 0px 30px 30px;
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
    width: 100%;
    flex: 1;
    display: flex;
    padding: 5px 0px 40px 20px;
  }

  // Media Query for a responsive design on devices of 850px width or less
  @media (max-width: 850px) {
    padding-left: 5px;
    padding-right: 5px;

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
      padding: 5px 0px 10px 5px;
    }
  }
`;

export default AboutPage;
