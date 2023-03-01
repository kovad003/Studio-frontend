import Button from "../Components/Button/Button";
import styled from "styled-components";
import FreepikOffice from "../assets/images/freepik-office-1.avif";
import OfficeScene from "../assets/images/office-scene.jpg";

const WelcomePage = () => {
  return (
    <StyledWelcomePage>
      <div className="WelcomePage__content-outer">
        <div className="WelcomePage__content-title"></div>
        <div className="WelcomePage__content-inner">
          <div className="WelcomePage__content-left">
            <h1 className="WelcomePage__content-h1">
              Welcome to the Studio Portal Web App
            </h1>

            <p className="WelcomePage__content-p2">
              <span>Connect. Create. Communicate. </span> The Studio Portal Web
              App does it all, and more! For registered clients, the Studio
              Portal Web App provides a platform for clients to send projects
              and tasks to
              <span> www.davidkele.com</span> via an interactive, private
              dashboard. Alongside sending project tasks, clients can
              communicate directly with the studio via an innovative, in-app
              commenting feature. The studio can also respond and assist with
              any task. If you or your business wish to become a client of the
              studio, please feel free to get in touch!
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
            {/* 
            <p className="WelcomePage__content-p1">
              Welcome to the Studio Portal Web App! This web app serves as part
              of the David Kele business enterprise. The website
              <span> www.davidkele.com</span> is an Independent Business
              Enterprise (selbständige gewerbebetrieb) based in Berlin, Germany.
              The company is owned and run by the business owner David Kele, and
              the primary business activity of the company is stylist work. The
              company also conducts other activities such as ecommerce, content
              creation, product design, and still life fashion work.
            </p>

            <p className="WelcomePage__content-p2">
              For registered clients, the Studio Portal Web App provides a
              platform for clients to send projects and tasks to
              <span> www.davidkele.com</span> via an interactive, private
              dashboard. Alongside sending project tasks, clients can
              communicate directly with the studio via an innovative, in-app
              commenting feature. The studio can also respond and assist with
              any task. If you or your business wish to become a client of the
              studio, please feel free to get in touch!
            </p>
			 */}
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

        <div className="WelcomePage__footer-div">{/* <AboutFooter /> */}</div>
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
  padding-left: 29px;
  padding-right: 29px;

  span {
    font-weight: bold;
  }

  /* img {
    opacity: 0.7;
  } */

  .WelcomePage__content-outer {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    top: 18px;
    /*  background-color: ${(props) => props.theme.white}; */
    flex: 1;
    display: flex;
    border-radius: 20px;
    /* box-shadow: 0 4px 30px 0 rgba(11, 99, 229, 0.13); */
    background-color: green;

    .WelcomePage__content-title {
      /* width: 100%; */
      width: 95%;
      padding: 50px 0px 10px 20px;
      flex: 1;
      display: flex;
    }

    .WelcomePage__content-h1 {
      /*
	  text-align: justify;
      text-justify: inter-word;
      margin-bottom: 10px;
      margin-top: 17px;
      line-height: 23px;
     */

      text-align: justify;
      text-justify: inter-word;
      margin-bottom: 10px;
      margin-top: 25%;
      line-height: 23px;
    }

    .WelcomePage__content-p2 {
      text-align: justify;
      text-justify: inter-word;
      line-height: 23px;
    }

    .WelcomePage__content-inner {
      display: flex;
      justify-content: center;
      width: 95%;
    }

    .WelcomePage__content-left {
      display: flex;
      flex-direction: column;
      height: auto;
      padding: 20px;
      /* width: 50%; */
      width: 40%;
      justify-content: center;
      background-color: yellow;
    }

    .WelcomePage__content-right {
      display: flex;
      flex-direction: column;
      padding: 20px;
      background-color: red;
      /* width: 50%; */
      width: 40%;
      justify-content: center;

      .WelcomePage__picture {
        /* border-radius: 12px; */
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .WelcomePage__footer-div {
    width: 95%;
    flex: 1;
    display: flex;
    padding: 5px 0px 40px 20px;
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
  }

  .WelcomePage__button-div {
    margin-top: 10px;
    border-radius: 6px;
  }

  .WelcomePage__button {
    /*     border-radius: 6px !important; */
  }

  // Media Query for a responsive design on devices of 850px width or less
  @media (max-width: 850px) {
    padding-left: 5px;
    padding-right: 5px;

    .WelcomePage__content-title {
      padding: 30px 0px 10px 6px !important;
    }

    .WelcomePage__content-inner {
      flex-direction: column;

      .WelcomePage__content-left {
        width: 100%;
        padding: 5px 5px 25px 5px;

        .WelcomePage__content-h1 {
          margin-bottom: 20px;
        }
      }

      .WelcomePage__content-right {
        width: 100%;
        padding: 5px 5px 15px 5px;
      }
    }

    .WelcomePage__footer-div {
      padding: 15px 0px 25px 6px;
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
