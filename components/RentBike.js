import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import EbikeRegulation from "./others/EbikeRegulation";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { MdExpandMore } from "react-icons/md";

const RentBike = ({ ebike, ebikeregulation }) => {
  const [activeStep, setActiveStep] = useState(null);
  const [openRegulation, setOpenRegulation] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  const handleActiveStep = (id) => {
    const filteredEbike = ebike.find((item) => item.id === id);
    setActiveStep(filteredEbike);
  };

  return (
    <>
      <Wrapper className="mainPage" id="rentbike">
        <div className="title">
          <h1>Wypożyczalnia E-BIKE</h1>
          <div data-aos="titleWidth"></div>
        </div>
        <p className="bikeMainInfo">
          Wypożyczamy rowery górskie premium Marki DEVINCI E-Troy GX w
          rozmiarach M i L. <br /> W górach zasięg roweru elektrycznego to
          30-100 km, w zależności od poziomu wspomagania i pokonywanego
          przewyższenia.
        </p>
        <div className="imageContentMobile">
          <img
            data-aos="flip-left"
            data-aos-offset="200"
            src="/images/rentbike/rentbike3.jpeg"
            alt=""
          />
        </div>
        <div className="container">
          <h3>6 kroków wypożyczenia roweru</h3>
          <div className="rentSteps">
            {ebike.map((item) => {
              return (
                <div
                  key={item.id}
                  className={
                    activeStep && activeStep.id === item.id
                      ? "step activeStep"
                      : "step"
                  }
                  onClick={() => handleActiveStep(item.id)}
                >
                  <span>{item.id}.</span>
                  <h4>{item.title}</h4>
                </div>
              );
            })}
          </div>
          <div className="rentStepsMobile">
            <Accordion allowZeroExpanded={true}>
              {ebike.map((item) => {
                const { title, id, info } = item;
                return (
                  <AccordionItem key={id}>
                    <div className="category">
                      <header>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <h3>
                              {id}. {title}
                              <MdExpandMore className="icon" />
                            </h3>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                      </header>
                      <AccordionItemPanel>
                        <ul>
                          {info.map((item, index) => {
                            return <li key={index}>{item}</li>;
                          })}
                          {id === 1 && (
                            <button
                              className="regulationBtn"
                              onClick={() => setOpenRegulation(true)}
                            >
                              Regulamin
                            </button>
                          )}
                        </ul>
                      </AccordionItemPanel>
                    </div>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          <div className="verticalLine"></div>
          {activeStep ? (
            <div className="stepInfo">
              <h2>Krok {activeStep.id}</h2>
              {activeStep.info.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
              {activeStep.id === 1 && (
                <button
                  className="regulationBtn"
                  onClick={() => setOpenRegulation(true)}
                >
                  Regulamin
                </button>
              )}
            </div>
          ) : (
            <div className="stepInfo noInfo">
              <FaLongArrowAltLeft />
              <p>wybierz krok aby zobaczyć szczegóły</p>
            </div>
          )}
        </div>
        <div className="imageContent">
          <img
            data-aos="flip-left"
            data-aos-offset="200"
            src="/images/rentbike/rentbike2.jpg"
            alt=""
          />
          <img
            data-aos="flip-right"
            data-aos-offset="200"
            src="/images/rentbike/rentbike1.jpg"
            alt=""
          />
        </div>
      </Wrapper>
      {openRegulation && (
        <EbikeRegulation
          setOpenRegulation={setOpenRegulation}
          ebikeregulation={ebikeregulation}
        />
      )}
    </>
  );
};

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.4);
  padding-bottom: 15vh;

  .title {
    [data-aos="titleWidth"] {
      width: 0;
      transition-property: width;
      &.aos-animate {
        width: 400px;
      }
    }
    @media screen and (max-width: 800px) {
      h1 {
        font-size: 1.7rem;
      }
    }
  }
  .bikeMainInfo {
    margin: 10vh auto 0;
    width: 65vw;
    text-align: center;
    font-size: 1.1rem;
    @media screen and (max-width: 800px) {
      width: 90vw;
    }
  }
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 10vh;
    flex-wrap: wrap;
    position: relative;
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    h3 {
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 10vh;
      @media screen and (max-width: 800px) {
        margin-bottom: 5vh;
      }
    }
  }
  .rentSteps {
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* margin-top: 5vh; */
    width: 40vw;
    flex-wrap: wrap;
    @media screen and (max-width: 800px) {
      display: none;
    }
    .step {
      color: #222;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 5px;
      width: 12vw;
      height: 12vw;
      text-align: center;
      border: 3px dashed var(--secondaryColor);
      color: white;
      transition: 0.5s;
      margin: 0.5vw;
      overflow: hidden;
      text-transform: lowercase;
      cursor: pointer;
      span {
        font-size: 2rem;
        margin-bottom: 10px;
      }
      :hover {
        border: 3px solid var(--secondaryColor);
      }
    }
    .activeStep {
      border: 3px solid var(--secondaryColor);
      background-color: var(--navLinkColorHover);
    }
  }
  .verticalLine {
    width: 2px;
    height: 40vh;
    background-color: var(--secondaryColor);
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .stepInfo {
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    @media screen and (max-width: 800px) {
      display: none;
    }
    h2 {
      margin-bottom: 5vh;
      color: var(--secondaryColor);
    }
    p {
      width: 100%;
      margin-bottom: 1vh;
      text-align: center;
      font-size: 1.1rem;
    }
  }
  .noInfo {
    align-self: center;
    @media screen and (max-width: 800px) {
      display: none;
    }
    svg {
      color: var(--secondaryColor);
      font-size: 3rem;
      margin-bottom: 3vh;
    }
  }
  .regulationBtn {
    margin-top: 3vh;
    padding: 10px 15px;
    font-size: 1.2rem;
    text-transform: uppercase;
    border: 2px solid white;
    background-color: var(--navLinkColorHover);
    color: white;
    border-radius: 5px;
    transition: 0.5s;
    font-family: var(--headerContactFont);
    font-weight: 500;
    cursor: pointer;

    :hover {
      background-color: white;
      color: var(--navLinkColorHover);
      border: 2px solid var(--navLinkColorHover);
    }
  }
  .imageContent {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;
    @media screen and (max-width: 800px) {
      display: none;
    }
    img {
      width: 30vw;
      border-radius: 5px;
      margin: 0 5vw;
    }
  }
  .imageContentMobile {
    @media screen and (min-width: 801px) {
      display: none;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90vw;
    margin: 5vh auto;
    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  .rentStepsMobile {
    @media screen and (min-width: 801px) {
      display: none;
    }
    width: 95vw;
    margin: 0 auto;
    .accordion__panel {
      animation: fadein 0.5s ease-in;
      overflow: hidden;
    }
    @keyframes fadein {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    .category {
      color: #fff;
      border: 2px dashed var(--secondaryColor);
      border-radius: 5px;
      width: 95vw;
      margin-bottom: 2vh;

      header {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        padding-top: 20px;
        width: 100%;
        background-color: #333;
        padding: 15px 5px 5px;
        h3 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: 500;
          text-transform: lowercase;
          font-size: 1.2rem;
          width: 95vw;
          margin-bottom: 0vh;
          .icon {
            font-size: 3rem;
            color: var(--secondaryColor3);
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: 0.4s;
          }
        }
      }
      ul {
        padding: 10px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        li {
          text-align: center;
          font-size: 1.1rem;
        }
      }
    }
  }
`;

export default RentBike;
