import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { BsGearFill } from "react-icons/bs";

const bgImg = "/images/skiService/bg.jpg";
const snowboardImg = "/images/skiService/snowboard.png";
const skiImg = "/images/skiService/ski.png";

const SkiService = () => {
  const [activeGears, setActiveGears] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <Wrapper
      onMouseEnter={() => setActiveGears(true)}
      onMouseLeave={() => setActiveGears(false)}
    >
      <div
        className="bg"
        data-aos="bgShow"
        data-aos-duration="2000"
        data-aos-delay="300"
      ></div>
      <div className="title">
        <h1>Serwis Narciarski</h1>
        <div data-aos="titleWidth"></div>
      </div>
      <p className="firstInfo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti omnis
        possimus facilis rerum dignissimos dolor. Nisi soluta rem, qui
        perspiciatis ratione accusantium commodi nobis, doloribus iure saepe
        quod laboriosam laborum! Voluptatum, optio repudiandae! Aliquam harum
        quasi exercitationem impedit ad illum, repellat neque ipsum? Vitae, eos
        veritatis possimus tempore quod aperiam!
      </p>
      <div className="content">
        <img src={snowboardImg} alt="" />
        <section className="infoContainer">
          <h3>Usługi Serwisowe</h3>
          <ul className={activeGears && "gearsActive"}>
            <li>
              <BsGearFill />
              <p>regulacja wiązań narciarskich</p>
              <div></div>
              <span>od 10 zł</span>
            </li>
            <li>
              <BsGearFill />
              <p>ostrzenie nart</p>
              <div></div>
              <span>od 45 zł</span>
            </li>
            <li>
              <BsGearFill />
              <p>ostrzenie snowboardu</p>
              <div></div>
              <span>od 40 zł</span>
            </li>
            <li>
              <BsGearFill />
              <p>czyszczenie i smarowanie nart na gorąco</p>
              <div></div>
              <span>od 40 zł</span>
            </li>
            <li>
              <BsGearFill />
              <p>czyszczenie i smarowanie snowboardu na gorąco</p>
              <div></div>
              <span>od 50 zł</span>
            </li>
            <li>
              <BsGearFill />
              <p>regeneracja ślizgu nart</p>
              <div></div>
              <span>od 20 zł</span>
            </li>
            <li>
              <BsGearFill />
              <p>regeneracja ślizgu snowboardu</p>
              <div></div>
              <span>od 30 zł</span>
            </li>
          </ul>
        </section>
        <img src={skiImg} alt="" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  margin: 15vh auto 0;
  padding: 10vh 0;
  position: relative;
  .title {
    h1 {
      /* text-shadow: 0.5px 0.5px 0.5px #eee; */
      text-shadow: 2px 2px 2px #222;
    }
    /* div {
      width: 300px;
    } */
    [data-aos="titleWidth"] {
      width: 0;
      transition-property: width;
      &.aos-animate {
        width: 300px;
      }
    }
  }

  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${bgImg});
    background-attachment: fixed;
  }
  [data-aos="bgShow"] {
    opacity: 0;
    transition-property: opacity;
    &.aos-animate {
      opacity: 0.2;
    }
  }
  .firstInfo {
    margin: 10vh auto;
    width: 70vw;
    font-size: 1.1rem;
    text-align: center;
  }
  .content {
    margin: 10vh auto;
    width: 90vw;
    display: flex;
    justify-content: center;
    position: relative;
    img {
      width: 30%;
      position: absolute;
      top: 0;
    }
    img:nth-of-type(1) {
      left: 0%;
    }
    img:nth-of-type(2) {
      right: 0%;
      opacity: 0.4;
    }
    .infoContainer {
      min-width: 40%;
      h3 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 5vh;
      }
      ul {
        list-style: none;
        li {
          display: flex;
          align-items: center;
          font-size: 1.3rem;
          div {
            flex-grow: 1;
            border-bottom: 1px solid #ddd;
            align-self: flex-end;
            margin: 0 5px 10px;
          }
          svg,
          span {
            color: var(--secondaryColor);
            margin: 0 10px;
            font-weight: 700;
            text-shadow: 2px 2px 2px #222;
          }
        }
      }
      .gearsActive {
        li {
          svg {
            animation: rotateGears 2s linear infinite;
            @keyframes rotateGears {
              100% {
                transform: rotate(360deg);
              }
            }
          }
        }
      }
    }
  }
`;

export default SkiService;
