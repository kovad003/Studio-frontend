import React from "react";
import styled from "styled-components";
import { AboutLogo, AboutTitle, Button } from "../Components";
import AboutImgMob from "../assets/images/about-img-mob.jpg";
import AboutImgDesktop from "../assets/images/about-img-desktop.jpg";
/* import AboutTitle from "../Components/About/AboutTitle"; */

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
            {/* <img src={AboutImgDesktop} alt="About" /> */}
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
      </div>

      <div className="AboutPage__footer">
        <button className="AboutPage__footer-btn">Contact Us</button>
      </div>
    </StyledAboutPage>
  );
};

const StyledAboutPage = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  width: 100vw;
  height: calc(100vh - 60px);

  .AboutPage__content-outer {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background-color: ${(props) => props.theme.white};
    margin: 0px 29px;
    position: relative;
    overflow: hidden;
    top: 18px;

    .AboutPage__content-title {
      width: 100%;
      padding: 30px 0px 30px 30px;
      flex: 1;
      display: flex;
      border-left: red;
      border: "10px solid red";
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
    }

    .AboutPage__content-left {
      display: flex;
      flex-direction: column;
      /* width: 50%; */
      padding: 30px 15px 30px 30px;
      width: 100%;
      max-width: 700px;
      height: auto;
    }

    .AboutPage__content-right {
      display: flex;
      flex-direction: column;
      /* width: 50%; */
      width: 100%;
      padding: 30px 30px 30px 15px;

      .AboutPage__picture {
        width: 100%;
        max-width: 700px;
        height: auto;
      }
    }
  }

  .AboutPage__footer {
    width: 120px;
    height: 40px;
    margin: 28px 29px 0px;
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
  }
`;

export default AboutPage;
