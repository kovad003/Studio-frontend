import React from "react";
import styled from "styled-components";
import { AboutLogo, AboutTitle, Button } from "../Components";
/* import AboutTitle from "../Components/About/AboutTitle"; */
import About from "../assets/images/about-img-1.jpg";

const AboutPage = () => {
  return (
    <StyledAboutPage>
      {/* <div className="AboutPage__header">
        <div className="AboutPage__header-left">
          <AboutLogo />
        </div>
        <div className="AboutPage__header-right">
          <div className="AboutPage__btn">
            <Button>Login</Button>
          </div>
        </div>
      </div> */}

      <div className="AboutPage__content-outer">
        <div className="AboutPage__content-title">
          <AboutTitle />
        </div>
        <div className="AboutPage__content-inner">
          <div className="AboutPage__content-left">
            {/*  <h1>About page</h1> */}
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
            <img src={About} alt="About" />
          </div>
        </div>
      </div>

      {/*  <div className="AboutPage__footer"> */}
      <div className="AboutPage__footer">
        <button className="AboutPage__footer-btn">Contact Us</button>
      </div>
      {/*    </div> */}
    </StyledAboutPage>
  );
};

const StyledAboutPage = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  /* height: 100vh; */
  width: 100vw;
  height: calc(100vh - 60px);

  .AboutPage__content-outer {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin: 18px 29px; */
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

      font-size: 20px;
      /*  background-color: red; */
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
      /* background-color: yellow; */
    }

    .AboutPage__content-left {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding: 30px 15px 30px 30px;
      /* background-color: green; */
    }

    .AboutPage__content-right {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding: 30px 30px 30px 15px;
      /* background-color: blue; */
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

/* 
  .AboutPage__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.white};
    height: 60px;

    .AboutPage__btn {
      width: 120px;
      height: 40px;
      margin-right: 40px;
    }
  }
  */

export default AboutPage;
