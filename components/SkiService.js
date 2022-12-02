import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { BsGearFill, BsFillQuestionSquareFill } from "react-icons/bs";
import { skiPrices } from "../public/data";

const bgImg = "/images/skiService/bg.jpg";
const snowboardImg = "/images/skiService/snowboard.png";
const skiImg = "/images/skiService/ski.png";

const SkiService = () => {
  const [activeGears, setActiveGears] = useState(false);
  const [activeDetail, setActiveDetail] = useState("");
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <Wrapper
      id="skiService"
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
            {skiPrices.map((oneSki, index) => {
              const { name, price, details } = oneSki;
              return (
                <div key={index} className="oneServiceWrapper">
                  <li>
                    <BsGearFill className="gearIcon" />
                    <p>{name}</p>
                    {details && (
                      <BsFillQuestionSquareFill
                        style={{ cursor: "pointer" }}
                        onMouseEnter={() => setActiveDetail(details)}
                        onMouseLeave={() => setActiveDetail("")}
                      />
                    )}
                    <div></div>
                    <span>{price}</span>
                  </li>
                  {activeDetail === details && details !== "" && (
                    <p className="serviceDetail">{details}</p>
                  )}
                </div>
              );
            })}
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
  margin: 0vh auto 0;
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
    @media screen and (max-width: 800px) {
      opacity: 0.3;
    }
  }
  [data-aos="bgShow"] {
    opacity: 0;
    transition-property: opacity;
    &.aos-animate {
      opacity: 0.3;
    }
  }
  .firstInfo {
    margin: 10vh auto 5vh;
    width: 70vw;
    font-size: 1.1rem;
    text-align: center;
    @media screen and (max-width: 800px) {
      width: 90vw;
    }
  }
  .content {
    margin: 5vh auto 10vh;
    width: 95vw;
    display: flex;
    justify-content: center;
    position: relative;
    img {
      width: 30%;
      position: absolute;
      top: 0;
      @media screen and (max-width: 1700px) {
        width: 28%;
      }
    }
    img:nth-of-type(1) {
      left: 0%;
    }
    img:nth-of-type(2) {
      right: 0%;
      opacity: 0.4;
    }
    .infoContainer {
      width: 50%;
      margin-top: 10vh;
      @media screen and (max-width: 1700px) {
        width: 55%;
      }
      @media screen and (max-width: 800px) {
        width: 100%;
      }
      h3 {
        text-align: center;
        font-size: 2.1rem;
        margin-bottom: 10vh;
        @media screen and (max-width: 800px) {
          font-size: 1.9rem;
          margin-bottom: 5vh;
        }
      }
      ul {
        list-style: none;
        width: 100%;
        .oneServiceWrapper {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.5vh;
          width: 100%;
          .serviceDetail {
            font-size: 1.1rem;
            font-family: var(--headerContactFont);
            background: #fff;
            color: #222;
            text-align: center;
            width: 80%;
            padding: 3px 10px;
            border-radius: 5px;
            margin: 0 auto;
            /* position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); */
          }

          li {
            display: flex;
            align-items: center;
            font-size: 1.3rem;
            width: 100%;
            @media screen and (max-width: 1700px) {
              font-size: 1.2rem;
            }
            @media screen and (max-width: 800px) {
              font-size: 1.1rem;
              flex-wrap: wrap;
            }
            div {
              flex-grow: 1;
              border-bottom: 1px solid #ddd;
              align-self: flex-end;
              margin: 0 5px 10px;
              /* @media screen and (max-width: 800px) {
                display: none;
              } */
            }
            svg,
            span {
              color: var(--secondaryColor);
              margin: 0 10px;
              font-weight: 700;
              text-shadow: 2px 2px 2px #222;
              font-size: 1.4rem;
              @media screen and (max-width: 1700px) {
                font-size: 1.3rem;
              }
              @media screen and (max-width: 800px) {
                font-size: 1.2rem;
                font-weight: 600;
              }
            }
            svg {
              font-size: 1.6rem;
              @media screen and (max-width: 800px) {
                font-size: 1rem;
                /* display: none; */
                margin: 0 3px;
              }
            }
            @media screen and (max-width: 800px) {
              .gearIcon {
                animation: rotateGears 2s linear infinite;
                display: block;
                margin: 0 5px 0 0;
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
      .gearsActive {
        li {
          .gearIcon {
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
