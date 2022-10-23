import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const easyImg = "/images/workout/easy.jpg";
const mediumImg = "/images/workout/medium.jpg";
const hardImg = "/images/workout/hard.jpg";

const Workout = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <Wrapper className="mainPage">
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
          <section className="easy" data-aos="fade-right">
            <div className="info">
              <h2>
                Poziom <br /> Początkujący
              </h2>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </section>
          <section className="medium" data-aos="fade-up">
            <div className="info">
              <h2>
                Poziom <br /> Średniozaawansowany
              </h2>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </section>
          <section className="hard" data-aos="fade-left">
            <div className="info">
              <h2>
                Poziom <br /> Zaawansowany
              </h2>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 5vh;
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
    }
  }
  .plans {
    width: 80vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    section {
      width: 33.33%;
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
          font-size: 1.6rem;
        }
        ul {
          display: none;
        }
      }
      :hover .info {
        width: 100%;
        height: 100%;
      }
      :hover .info ul {
        display: block;
      }
    }
    .easy {
      background-image: url(${easyImg});
    }
    .medium {
      background-image: url(${mediumImg});
      border-left: none;
      border-right: none;
    }
    .hard {
      background-image: url(${hardImg});
      background-position: 30%;
    }
  }
`;

export default Workout;
