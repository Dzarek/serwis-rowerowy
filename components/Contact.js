import styled from "styled-components";
import MyForm from "./others/MyForm";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdOutlinePhoneAndroid, MdEmail } from "react-icons/md";
import {
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaInstagramSquare,
} from "react-icons/fa";

const bgImg = "/images/contact/bg2.jpg";

const KontaktPage = ({ setVisibleCookie }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <>
      <Wrapper id="contact">
        <div className="bg"></div>
        <header>
          <div className="title">
            <h1>Kontakt </h1>
            <div data-aos="titleWidth"></div>
          </div>
        </header>
        <div className="contactContainer">
          <section className="contactForm">
            <h3>Formularz kontaktowy</h3>
            <MyForm setVisibleCookie={setVisibleCookie} />
          </section>

          <section className="contactSocialMedia">
            <h3>Kontakt bezpośredni</h3>
            <div className="socialMediaWrapper">
              <a href="tel:+48798698605">
                Telefon: <span>798 867 716</span>
              </a>
              <a href="mailto:piotr.j.sajdak@gmail.com">
                Email: <span>piotr.j.sajdak@gmail.com</span>
              </a>
              <a
                href="https://www.facebook.com/PracowniarowerowPiotrSajdak"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook: <span>PracowniarowerowPiotrSajdak</span>
              </a>
              <a
                href="https://www.instagram.com/veloway_pracowniarowerow/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram: <span>veloway_pracowniarowerow</span>
              </a>
              <h4>
                Adres: <span>ul. Długa 48, 33-170 Tuchów</span>
              </h4>
              <h4>
                NIP: <span>993 06 90 883</span>
              </h4>
            </div>
            <div className="socialMediaWrapperM">
              <a href="tel:+48798698605">
                <MdOutlinePhoneAndroid /> <span>798 867 716</span>
              </a>
              <a href="mailto:piotr.j.sajdak@gmail.com">
                <MdEmail /> <span>piotr.j.sajdak@gmail.com</span>
              </a>
              <a
                href="https://www.facebook.com/PracowniarowerowPiotrSajdak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare /> <span>PracowniarowerowPiotrSajdak</span>
              </a>
              <a
                href="https://www.instagram.com/veloway_pracowniarowerow/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare /> <span>veloway_pracowniarowerow</span>
              </a>
              <h4>
                <FaMapMarkerAlt /> <span>ul. Długa 48, 33-170 Tuchów</span>
              </h4>
              <h4>
                NIP: <span>993 06 90 883</span>
              </h4>
            </div>
            <div className="bankInfo">
              <h3>Dane do przelewu:</h3>
              <h4 className="bankInfoName">
                Bank: <span>Santander Bank Polska SA</span>
              </h4>
              <h4>
                Nr konta: <span>26 1090 2590 0000 0001 5167 1348</span>
              </h4>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10278.969913076555!2d21.0485635!3d49.9036379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24e5f320a27d27cc!2sVeloWay%20Pracownia%20i%20Serwis%20Rowerowy!5e0!3m2!1spl!2spl!4v1666475935085!5m2!1spl!2spl"
              className="map"
              title="mapa"
              allowfullscreen=""
              loading="lazy"
              data-aos="fade-up"
            ></iframe>
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
  padding: 10vh 0 5vh;
  position: relative;
  background: rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 800px) {
    padding: 5vh 0 0vh;
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
    background-size: cover;
    opacity: 0.25;
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
      [data-aos="titleWidth"] {
        width: 0;
        transition-property: width;
        &.aos-animate {
          width: 150px;
        }
      }

      @media screen and (max-width: 800px) {
        padding: 5vh 0 0;
      }
    }
    /* img {
      height: 50vh;
      margin-right: 5vw;
      @media screen and (max-width: 800px) {
        height: auto;
        width: 100vw;
        margin-right: 0;
      }
    } */
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
    /* .separateLine {
      width: 2px;
      background: var(--secondaryColor3);
      height: 50vh;
      align-self: center;
    } */
    /* .separateImg {
      width: 10vw;
      align-self: center;
      opacity: 0.5;
    } */
    .contactForm,
    .contactSocialMedia {
      h3 {
        color: #aaa;
        font-size: 2rem;
        text-align: center;
        font-family: var(--headerContactFont);
        font-weight: 500;
        margin-bottom: 5vh;
        @media screen and (max-width: 800px) {
          font-size: 1.8rem;
        }
      }
    }
    @media screen and (max-width: 800px) {
      flex-direction: column;
      margin: 10vh auto 0vh;
      width: 100vw;
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

  .socialMediaWrapper,
  .socialMediaWrapperM {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    align-self: center;
    margin-top: 3vh;
    a,
    h4 {
      font-size: 1.4rem;
      margin: 1vh 5vw;
      font-weight: 500;
      text-decoration: none;
      color: var(--primaryColor);
      text-shadow: 2px 2px 2px #000;
      transition: 0.5s;
      @media screen and (max-width: 1700px) {
        font-size: 1.3rem;
      }
      @media screen and (max-width: 800px) {
        margin: 1vh auto;
        width: 90vw;
        font-size: 1.2rem;
      }
      :hover {
        transform: scale(1.1);
      }
      span {
        color: var(--secondaryColor);
      }
    }
  }

  .socialMediaWrapper {
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .socialMediaWrapperM {
    @media screen and (min-width: 801px) {
      display: none;
    }
    align-items: center;
    a,
    h4 {
      display: flex;
      align-items: center;
      :hover {
        transform: none;
      }
      span {
        margin-left: 10px;
      }
      svg {
        font-size: 1.5rem;
      }
    }
  }
  .bankInfo {
    margin-top: 4vh;
    h4 {
      text-shadow: 2px 2px 2px #000;
      font-size: 1.4rem;
      margin: 2vh 5vw;
      font-weight: 500;
      transition: 0.5s;
      @media screen and (max-width: 800px) {
        margin: 1vh auto 1vh;
        width: 90vw;
        font-size: 1.2rem;
        text-align: center;
      }
      span {
        color: var(--secondaryColor);
      }
      :hover {
        transform: scale(1.1);
      }
    }
    .bankInfoName {
      font-weight: 600;
      @media screen and (max-width: 800px) {
        text-align: center;
      }
    }
  }
  .map {
    width: 80%;
    height: 40vh;
    margin-top: 5vh;
    /* position: relative;
    bottom: 0;
    left: 0; */
    border-radius: 5px;
    filter: saturate(0.2);
    transition: 0.4s;
    :hover {
      filter: saturate(0.8);
    }
    @media screen and (max-width: 800px) {
      width: 100%;
      margin-top: 10vh;
      border-radius: 0px;
    }
  }
`;

export default KontaktPage;
