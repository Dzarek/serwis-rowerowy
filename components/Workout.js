import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { GiStrong, GiCartwheel } from "react-icons/gi";
import { plans } from "../public/data";

const mediumImg = "/images/workout/medium.jpg";
const hardImg = "/images/workout/hard.jpg";

const compPlan = plans.find((plan) => plan.name === "competition");
const proPlan = plans.find((plan) => plan.name === "professional");

const Workout = () => {
  const [levelIcon, setLevelIcon] = useState("");
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  return (
    <Wrapper id="workout" className="mainPage">
      <div className="title">
        <h1>Treningi</h1>
        <div data-aos="titleWidth"></div>
      </div>
      <div className="content">
        <p className="mainInfo">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
          eligendi illum! Iusto debitis perferendis nemo expedita, nisi,
          recusandae quo quod neque id animi temporibus! Dolore odit animi
          suscipit rem optio omnis natus minima totam obcaecati reprehenderit
          numquam, explicabo reiciendis ullam sit nemo! Totam autem impedit
          soluta praesentium dignissimos, porro veritatis.
        </p>
        <h2>Wybierz swój plan treningowy</h2>
        <div className="plans">
          <section
            className="medium"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="2000"
            onMouseEnter={() => setLevelIcon("competition")}
            onMouseLeave={() => setLevelIcon("")}
          >
            <div className="info">
              <h2>
                Plan <br /> {compPlan.name}
              </h2>
              <ul>
                {compPlan.info.map((text, index) => {
                  return (
                    <li key={index}>
                      <GiCartwheel /> {text}
                    </li>
                  );
                })}
              </ul>
              <div className="priceAndBtn">
                <h3>{compPlan.price}</h3>
                <a
                  href="https://www.cyclotrener.pl/zamow-pakiet/?trening=Pakiet%20Competition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rozpocznij
                </a>
              </div>
            </div>
          </section>
          <GiStrong className={levelIcon} />
          <section
            className="hard"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="2000"
            onMouseEnter={() => setLevelIcon("pro")}
            onMouseLeave={() => setLevelIcon("")}
          >
            <div className="info">
              <h2>
                Plan <br /> {proPlan.name}
              </h2>
              <ul>
                {proPlan.info.map((text, index) => {
                  return (
                    <li key={index}>
                      <GiCartwheel /> {text}
                    </li>
                  );
                })}
              </ul>
              <div className="priceAndBtn">
                <h3>{proPlan.price}</h3>
                <a
                  href="https://www.cyclotrener.pl/zamow-pakiet/?trening=Pakiet%20Professional"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rozpocznij
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <p className="cyclotrener">
        Naciskając przycisk ROZPOCZNIJ nastąpi przekierowanie na stronę
        www.cyclotrener.pl
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 5vh;
  background-color: var(--appBgColor);
  .cyclotrener {
    margin: 3vh auto;
    font-size: 1.1rem;
    text-align: center;
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
      padding: 5vh 0;
    }
  }
  .content {
    width: 90vw;
    margin: 10vh auto;
    p {
      width: 60vw;
      margin: 0 auto;
      text-align: center;
      font-size: 1.1rem;
    }
    h2 {
      width: 60vw;
      margin: 5vh auto;
      text-align: center;
      font-size: 2rem;
    }
  }
  .plans {
    width: 75vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      font-size: 10rem;
      opacity: 0.2;
      transition: 0.5s;
    }
    .competition {
      opacity: 0.5;
    }
    .pro {
      opacity: 0.9;
    }
    section {
      width: 40%;
      height: 60vh;
      background-position: center;
      background-size: cover;
      /* filter: brightness(0.8); */
      border: 2px solid #eee;
      border-radius: 5px;
      position: relative;
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 80%;
        background: var(--workoutBg);
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        transition: 0.5s;
        overflow: hidden;
        flex-wrap: wrap;
        h2 {
          font-size: 2.2rem;
          text-transform: uppercase;
          font-family: var(--headerContactFont);
          @media screen and (max-width: 1700px) {
            font-size: 1.8rem;
            margin: 1vh auto;
          }
        }
        ul {
          display: none;
          list-style: none;
          width: 90%;
          li {
            display: flex;
            align-items: center;
            font-size: 1.1rem;
            justify-content: flex-start;
            margin-bottom: 1vh;
            line-height: 1.2;
            @media screen and (max-width: 1700px) {
              font-size: 1rem;
            }
            svg {
              font-size: 1.5rem;
              opacity: 1;
              color: #fff;
              margin-right: 10px;
              flex-shrink: 0;
              @media screen and (max-width: 1700px) {
                font-size: 1.2rem;
              }
            }
          }
        }
        .priceAndBtn {
          display: none;
          width: 70%;
          justify-content: space-between;
          align-items: center;
          h3 {
            font-size: 2rem;
            @media screen and (max-width: 1700px) {
              font-size: 1.6rem;
            }
          }
          a {
            padding: 7px 30px;
            background: #fff;
            color: var(--secondaryColor2);
            text-decoration: none;
            border-radius: 5px;
            border: 2px solid var(--workoutBg);
            font-size: 1.1rem;
            text-transform: uppercase;
            transition: 0.4s;
            @media screen and (max-width: 1700px) {
              padding: 5px 20px;
              font-size: 1rem;
            }
            :hover {
              color: #fff;
              background-color: var(--secondaryColor);
            }
          }
        }
      }
      :hover .info {
        width: 100%;
        height: 100%;
      }
      :hover .info ul {
        display: flex;
        flex-direction: column;
        li svg {
          animation: rotateGears 2s linear infinite;
          @keyframes rotateGears {
            100% {
              transform: rotate(360deg);
            }
          }
        }
      }
      :hover .info .priceAndBtn {
        display: flex;
      }
    }

    .medium {
      background-image: url(${mediumImg});
    }
    .hard {
      background-image: url(${hardImg});
      background-position: 30%;
    }
  }
`;

export default Workout;
