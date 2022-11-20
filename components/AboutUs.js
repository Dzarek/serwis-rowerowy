import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { GiWhistle, GiSportMedal } from "react-icons/gi";
import { MdEngineering, MdPostAdd } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { BsCameraFill } from "react-icons/bs";
import { FaSmileWink, FaSmileBeam } from "react-icons/fa";

const piotrImg = "/images/aboutUs/Piotrek.jpg";
const piotr2Img = "/images/aboutUs/Piotrek2.jpg";
const sylwiaImg = "/images/aboutUs/Sylwia.jpg";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <Wrapper id="aboutMe">
      <div className="title">
        <h1>O nas</h1>
        <div data-aos="titleWidth"></div>
      </div>
      <div className="content">
        <div
          // src={piotrImg}
          // alt=""
          className="imgPiotr"
          // data-aos="fade-right"
          // data-aos-offset="300"
        ></div>
        <div className="info">
          <p>
            Piotrek z rowerami spędził ponad połowę swojego życia. Na codzień
            czynny zawodnik odnoszący sukcesy w krajowych cyklach Maratonów MTB.
            Od początków swojej przygody z rowerem osobiście wykonuje serwisy
            oraz naprawy pogłębiając swoją wiedzę i umiejętności. Zawodowo jako
            mechanik pracuje od 7-miu lat. Absolwent PWSZ w Tarnowie na kierunku
            Wychowanie Fizyczne. Swoją wiedzą kolarską dzieli się tak jako
            certyfikowany trener Platformy Treningowej Cyclo Trener oraz
            Training Peaks. Pasjonat fizjologii anatomii, miłośnik gór pod każdą
            postacią.
          </p>
          <ul className="iconContainer">
            <li>
              <MdEngineering />
              <p>Mechanik</p>
            </li>
            <li>
              <GiWhistle />
              <p>Trener</p>
            </li>
            <li>
              <GiSportMedal />
              <p>Zawodnik</p>
            </li>
            <li>
              <FaGraduationCap />
              <p>Magister AWF</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <img
          src={sylwiaImg}
          alt=""
          data-aos="zoom-in"
          // data-aos-offset="300"
        />
        <div className="info">
          <p>
            Sylwia to fotograf z pasją, swoją przygodę z aparatem zaczynała
            uwieczniając kolarską rywalizację, a obecnie stara się zatrzymać w
            kadrze najważniejsze momenty oraz wydarzenia wykonując wszelkiego
            rodzaju sesje oraz reportaże. Na codzień Żona, Mama oraz Pani domu.
            Miłośniczka podróży, Hiszpanii oraz dziewiczej Oliwy <FaSmileBeam />
            . W naszym serwisie jest motorem napędowym, źródłem najlepszych
            pomysłów, oraz odpowiada za działania reklamowe <FaSmileWink />.
          </p>
          <ul className="iconContainer">
            <li>
              <BsCameraFill />
              <p>Fotograf</p>
            </li>
            <li>
              <HiLightBulb />
              <p>Inspirator</p>
            </li>
            <li>
              <MdPostAdd />
              <p>Twórca reklamy</p>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background: #333; */
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding: 10vh 5vw 5vh;
  position: relative;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 12vh;
    [data-aos="titleWidth"] {
      width: 0;
      transition-property: width;
      &.aos-animate {
        width: 100px;
      }
    }

    @media screen and (max-width: 800px) {
      padding: 5vh 0;
    }
  }
  .content {
    width: 80vw;
    margin: 10vh auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 40vw;
      border-radius: 5px;
    }
    .imgPiotr {
      width: 40vw;
      height: 55vh;
      border-radius: 5px;
      background-image: url(${piotrImg});
      background-size: contain;
      background-repeat: no-repeat;
      animation: changeImg 5s linear infinite alternate;
      @keyframes changeImg {
        0% {
          transform: scale(1);
          background-image: url(${piotrImg});
        }
        45% {
          transform: scale(1);
          background-image: url(${piotrImg});
        }
        50% {
          transform: scale(0);
          background-image: url(${piotrImg});
        }
        51% {
          transform: scale(0);
          background-image: url(${piotr2Img});
        }
        55% {
          transform: scale(1);
          background-image: url(${piotr2Img});
        }
        100% {
          transform: scale(1);
          background-image: url(${piotr2Img});
        }
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      width: 35vw;
      p {
        width: 100%;
        font-size: 1.1rem;
        /* line-height: 2.3; */
        text-align: center;
      }
      .iconContainer {
        display: flex;
        list-style: none;
        margin-top: 8vh;
        width: 100%;
        justify-content: space-between;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          svg {
            color: var(--secondaryColor);
            font-size: 4rem;
          }
        }
      }
    }
    :nth-of-type(3) {
      flex-direction: row-reverse;
      .info {
        .iconContainer {
          justify-content: space-between;
          li {
            width: 33.33%;
          }
        }
      }
    }
  }
`;

export default AboutMe;
