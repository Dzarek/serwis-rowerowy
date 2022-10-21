import styled from "styled-components";
import MyForm from "./others/MyForm";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import Head from "next/head";

const bgImg = "/images/contact/bg.jpg";

const KontaktPage = ({ setVisibleCookie }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <>
      {/* <Head>
        <title>FocusEye | Kontakt</title>
        <meta
          name="description"
          content="Fomularz, Email, Telefon, Social Media."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head> */}
      <Wrapper>
        <div className="bg"></div>
        <header>
          <div className="title">
            <h1>Kontakt </h1>
            <div data-aos="titleWidth"></div>
          </div>
        </header>
        <div className="contactContainer">
          <section className="contactForm">
            <h3>Napisz do mnie przez formularz kontaktowy</h3>
            <MyForm setVisibleCookie={setVisibleCookie} />
          </section>

          <section className="contactSocialMedia">
            <h3>Kontakt bezpośredni</h3>
            <div className="socialMediaWrapper">
              <a href="tel:+48798698605">
                Telefon: <span>798 698 605</span>
              </a>
              <h4>
                Email: <span>kontakt.focuseye@gmail.com</span>
              </h4>
              <a
                href="https://www.instagram.com/focuseye_sylwiasajdak/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram: <span>focuseye_sylwiasajdak</span>
              </a>
              <a
                href="https://www.facebook.com/sylwiasajdakfotografia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook: <span>sylwiasajdakfotografia</span>
              </a>
            </div>
            <div className="bankInfo">
              <h3>Dane do przelewu:</h3>
              <h4 className="bankInfoName">
                FocusEye Mobilne Studio Fotografii - Sylwia Sajdak
              </h4>
              <h4>
                Nr konta: <span>91 1140 2004 0000 3102 7985 0369</span>
              </h4>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding: 10vh 0 2vh;
  position: relative;
  @media screen and (max-width: 800px) {
    padding-top: 0;
  }
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${bgImg});
    background-attachment: fixed;
    background-position: center;
    opacity: 0.2;
  }
  header {
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    background: var(--contactHeaderBgColor);
    @media screen and (max-width: 800px) {
      margin-top: 0;
      flex-direction: column;
    }
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        font-weight: 800;
        font-size: 3rem;
        margin-bottom: 3vh;
        margin-top: 3vh;
        color: var(--secondaryColor);
      }
      [data-aos="titleWidth"] {
        width: 0;
        transition-property: width;
        &.aos-animate {
          width: 150px;
        }
      }
      p {
        font-size: 1rem;
        font-weight: 400;
        font-family: var(--titleFont);
      }
      @media screen and (max-width: 800px) {
        padding: 5vh 0;
      }
    }
    img {
      height: 50vh;
      margin-right: 5vw;
      @media screen and (max-width: 800px) {
        height: auto;
        width: 100vw;
        margin-right: 0;
      }
    }
  }
  .contactContainer {
    position: relative;
    width: 95vw;
    margin: 10vh auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    section {
      width: 47%;
    }
    .separateLine {
      width: 2px;
      background: var(--secondaryColor3);
      height: 50vh;
      align-self: center;
    }
    .separateImg {
      width: 10vw;
      align-self: center;
      opacity: 0.5;
    }
    .contactForm,
    .contactSocialMedia {
      h3 {
        color: var(--secondaryColor3);
        font-size: 1.2rem;
        text-align: center;
        font-family: var(--titleFont);
        font-weight: 500;
        margin-bottom: 5vh;
      }
    }
    @media screen and (max-width: 800px) {
      flex-direction: column;
      margin: 15vh auto;
      section {
        width: 100%;
      }
      .separateImg {
        display: none;
      }
      .contactSocialMedia {
        margin-top: 10vh;
      }
    }
  }

  .socialMediaWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    align-self: center;
    margin-top: 3vh;
    a,
    h4 {
      font-size: 1.3rem;
      margin: 2vh 5vw;
      font-weight: 500;
      text-decoration: none;
      color: var(--primaryColor);
      @media screen and (max-width: 800px) {
        margin: 2vh auto;
        width: 90vw;
      }
      span {
        color: var(--secondaryColor);
      }
    }
  }
  .bankInfo {
    margin-top: 4vh;
    h4 {
      font-size: 1.3rem;
      margin: 2vh 5vw;
      font-weight: 500;
      @media screen and (max-width: 800px) {
        margin: 2vh auto;
        width: 90vw;
      }
      span {
        color: var(--secondaryColor);
      }
    }
    .bankInfoName {
      font-weight: 600;
      @media screen and (max-width: 800px) {
        text-align: center;
      }
    }
  }
`;

export default KontaktPage;
