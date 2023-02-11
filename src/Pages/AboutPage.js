import React from "react";
import styled from "styled-components";
import { AboutLogo, Button } from "../Components";
import AboutTitle from "../Components/About/AboutTitle";
import About from "../assets/images/about-img-1.jpg";

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <div className="AboutPage__header">
        <div className="AboutPage__header-left">
          <AboutLogo />
        </div>
        <div className="AboutPage__header-right">
          <div className="AboutPage__btn">
            <Button>Login</Button>
          </div>
        </div>
      </div>

      <div className="AboutPage__content-outer">
        <div className="AboutPage__content-title">
          <AboutTitle />
        </div>
        <div className="AboutPage__content-inner">
          <div className="AboutPage__content-left">
            {/*  <h1>About page</h1> */}
            <p>
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
              suscipit interdum libero. Ut ultricies tortor arcu, a sollicitudin
              libero molestie quis. Cras in feugiat sem. Morbi odio mi, pharetra
              nec ligula id, aliquam accumsan nibh.
            </p>

            <p>
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
          </div>
          <div className="AboutPage__content-right">
            <img src={About} alt="About" />

            {/*   <p>
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
              suscipit interdum libero. Ut ultricies tortor arcu, a sollicitudin
              libero molestie quis. Cras in feugiat sem. Morbi odio mi, pharetra
              nec ligula id, aliquam accumsan nibh.
            </p>
            <br />
            <p>
              Integer ut scelerisque lectus, in sodales justo. Etiam eleifend
              purus non massa semper tempor. Nulla mattis magna orci, nec
              elementum mi placerat in. Nam ornare, arcu non imperdiet euismod,
              enim ex tempor nunc, at varius enim dolor eget leo. Maecenas
              vestibulum semper nunc, eu maximus tellus sollicitudin et. In et
              mauris id arcu euismod ultrices sit amet accumsan metus. Mauris
              ultrices eros vitae lacus auctor ultrices. Sed pretium dui ligula,
              vitae consequat magna sodales vel. Maecenas auctor urna orci, eu
              aliquet felis rutrum ornare.
            </p> */}
          </div>
        </div>
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
    background-color: ${(props) => props.theme.white};
    height: 60px;

    /*  

    .AboutPage__right {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      padding: 0 10px;
    } */

    .AboutPage__btn {
      width: 120px;
      height: 40px;
      margin-right: 40px;
    }
  }

  .AboutPage__content-outer {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 18px 29px;
    border-radius: 12px;
    background-color: ${(props) => props.theme.white};

    .AboutPage__content-title {
      display: flex;
      flex: 1;
      background-color: red;
    }

    .AboutPage__content-inner {
      display: flex;
      background-color: yellow;
    }

    .AboutPage__content-left {
      display: flex;
      flex-direction: column;
      background-color: green;
      width: 50%;
      padding: 30px;
    }

    .AboutPage__content-right {
      display: flex;
      flex-direction: column;
      background-color: blue;
      width: 50%;
      padding: 30px;
    }
  }

  p {
    text-align: justify;
    text-justify: inter-word;
  }
`;

export default AboutPage;
