import Button from "../Components/Button/Button";
import styled from "styled-components";
import FreepikOffice from "../assets/images/freepik-office-1.avif";
import OfficeScene from "../assets/images/office-scene.jpg";

const WelcomePage = () => {
  return (
    <StyledWelcomePage>
      <div className="WelcomePage__content-outer">
        <div className="WelcomePage__content-inner">
          <div className="WelcomePage__content-left">
            <h1 className="WelcomePage__content-h1">Studio Portal Web App</h1>

            <p className="WelcomePage__content-p1a">
              <span className="WelcomePage__bold">
                Connect. Create. Communicate.&nbsp;
              </span>
              The Studio Portal Web App does it all, and more!
            </p>

            <p className="WelcomePage__content-p1b">
              For registered clients, the Studio Portal Web App provides a
              platform for clients to send projects and tasks to our Studio in
              complete privacy.
              <span className="WelcomePage__italics">
                &nbsp;Satisfaction guaranteed or your money back!
              </span>
            </p>

            <div className="WelcomePage__button-div">
              <Button
                className="WelcomePage__button"
                variant="link"
                type="short"
                to="/login"
              >
                Start now
              </Button>
            </div>
          </div>
          <div className="WelcomePage__content-right">
            <picture>
              <img
                className="WelcomePage__picture"
                /*  src={FreepikOffice} */
                src={OfficeScene}
                alt="welcome-pic"
              />
            </picture>

            <div className="WelcomePage__attribution">
              <p>
                Designed by&nbsp;
                <a
                  href="https://www.freepik.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Freepik
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="WelcomePage__copyright-div">
        <p className="WelcomePage__copyright-text">
          All rights reserved &#169;{new Date().getUTCFullYear()}
        </p>
      </div>
    </StyledWelcomePage>
  );
};

const StyledWelcomePage = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  width: 100vw;
  height: calc(100vh - 60px);
  padding: 10px 29px 10px 29px;

  .WelcomePage__bold {
    font-weight: bold;
  }

  .WelcomePage__italics {
    font-style: italic;
  }

  .WelcomePage__content-outer {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    top: 18px;
    flex: 1;
    display: flex;
    border-radius: 20px;
    height: 85%;

    .WelcomePage__content-inner {
      display: flex;
      justify-content: center;
      width: 95%;
    }

    .WelcomePage__content-left {
      display: flex;
      flex-direction: column;
      height: auto;
      padding: 0px 20px 5% 20px;
      width: 40%;
      justify-content: center;
      align-content: center;
    }

    .WelcomePage__content-h1 {
      text-align: justify;
      text-justify: inter-word;
      margin-bottom: 10px;
      margin-top: 25%;
      line-height: 23px;
    }

    .WelcomePage__content-p1a {
      text-align: justify;
      text-justify: inter-word;
      line-height: 23px;
      margin-bottom: 10px;
      margin-top: 10px;
    }

    .WelcomePage__content-p1b {
      text-align: justify;
      text-justify: inter-word;
      line-height: 23px;
      margin-bottom: 10px;
    }

    .WelcomePage__content-right {
      display: flex;
      flex-direction: column;
      padding: 20px;
      width: 40%;
      justify-content: center;

      .WelcomePage__picture {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .WelcomePage__copyright-div {
    position: absolute;
    bottom: 10px;
    display: flex;
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 95%;
  }

  .WelcomePage__copyright-text {
    font-size: 14px;
    color: ${(props) => props.theme.darkTextColor};
    user-select: none;
  }

  .WelcomePage__attribution {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    margin-top: 8px;
    font-style: italic;
  }

  .WelcomePage__button-div {
    margin-top: 10px;
    border-radius: 6px;
  }

  // Media Query for a responsive design on devices of 850px width or less
  @media (max-width: 850px) {
    padding-left: 5px;
    padding-right: 5px;

    .WelcomePage__content-outer {
      height: auto;
    }

    .WelcomePage__content-inner {
      flex-direction: column;
      position: relative;
      .WelcomePage__content-left {
        width: 100%;
        padding: 0px 10px 5% 10px;
        position: inherit;
        bottom: 5%;
        max-height: 340px;
      }

      .WelcomePage__content-right {
        width: 100%;
        padding: 10px 10px 15px 10px;
      }
    }

    .WelcomePage__copyright-div {
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

export default WelcomePage;
