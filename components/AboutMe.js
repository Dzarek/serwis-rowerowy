import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { GiWhistle, GiSportMedal } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const piotrImg = "/images/aboutMe/piotr.jpg";
const piotrImg2 = "/images/aboutMe/piotr2.jpg";
const piotrImg3 = "/images/aboutMe/piotr3.jpg";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <Wrapper id="aboutMe">
      <div className="title">
        <h1>O mnie</h1>
        <div data-aos="titleWidth"></div>
      </div>
      <div className="content">
        <div className="images">
          <img src={piotrImg} alt="" data-aos="img1" />
          <img src={piotrImg3} alt="" data-aos="img2" />
          <img src={piotrImg2} alt="" data-aos="img3" />
        </div>
        <div className="info">
          <p>
            Trener Platformy treningowej Cyclo Trener. Czynny zawodnik odnoszący
            sukcesy w krajowych cyklach Maratonów MTB (wielokrotny zwycięzca w
            kategorii OPEN). Absolwent studiów Wychowania Fizycznego, Instruktor
            kolarstwa. Pasjonuje się anatomią oraz fizjologią wysiłku. Na
            codzień pracuje w salonie rowerowym ciągle rozwijając kolarską
            pasję. Jego atutem w pracy trenerskiej jest umiejętność łączenia
            wiedzy teoretycznej z praktyką zdobytą na trasach maratonów.
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #333;
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
    /* position: relative; */
    width: 80vw;
    margin: 10vh auto;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    /* text-align: center; */
    .images {
      /* display: flex;
      flex-direction: column; */
      position: relative;
      [data-aos="img1"] {
        transform: rotate(0deg);
        transition-property: transform;
        &.aos-animate {
          transform: rotate(-10deg);
        }
      }
      [data-aos="img2"] {
        transform: rotate(0deg);
        transition-property: transform;
        &.aos-animate {
          transform: rotate(10deg);
        }
      }
      [data-aos="img3"] {
        transform: rotate(0deg);
        transition-property: transform;
        &.aos-animate {
          transform: rotate(-5deg);
        }
      }
      img {
        width: 20vw;
        border-radius: 5px;
        /* margin-bottom: 3vh; */
        /* position: absolute;
      bottom: 0;
      left: 10%; */
        position: absolute;
        :nth-of-type(1) {
          /* transform: rotate(-10deg); */
          top: 0;
          left: 0;
        }
        :nth-of-type(2) {
          top: 5vh;
          left: 20vw;
          /* transform: rotate(10deg); */
        }
        :nth-of-type(3) {
          filter: saturate(0);
          top: 30vh;
          left: 7vw;
          /* transform: rotate(-5deg); */
        }
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      width: 35vw;
      p {
        width: 100%;
        font-size: 1.2rem;
        line-height: 2.3;
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
  }
`;

export default AboutMe;
