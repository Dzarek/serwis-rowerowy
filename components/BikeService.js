import styled from "styled-components";
import { TiSpanner } from "react-icons/ti";
import { useEffect, useState } from "react";
import AllBikeOffer from "./AllBikeOffer";
import { BsGearFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { SRLWrapper } from "simple-react-lightbox";

const bgImg = "/images/bikeService/bg.jpg";
const img1 = "/images/bikeService/1.jpg";
const img2 = "/images/bikeService/2.jpg";
const img3 = "/images/bikeService/3.jpg";
const img4 = "/images/bikeService/4.jpg";

const BikeService = () => {
  const [activePakiet, setActivePakiet] = useState(null);
  const [iconClass, setIconClass] = useState("pakietIcon");
  const [showAllBikeOffer, setShowAllBikeOffer] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  useEffect(() => {
    if (activePakiet === "basic") {
      setIconClass("pakietIcon basicIcon");
    }
    if (activePakiet === "pro") {
      setIconClass("pakietIcon proIcon");
    }
    if (activePakiet === "all") {
      setIconClass("pakietIcon allIcon");
    }
    if (activePakiet === "") {
      setIconClass("pakietIcon");
    }
  }, [activePakiet]);

  return (
    <Wrapper className="mainPage" id="bikeService">
      <div className="title">
        <h1>Serwis Rowerowy</h1>
        <div data-aos="titleWidth"></div>
      </div>
      <p className="bikeMainInfo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae aperiam
        cumque ad nesciunt pariatur temporibus, voluptatum quidem rerum laborum
        quas reiciendis? Laudantium tenetur magnam possimus quia voluptas
        officia nisi ad vel facilis consequuntur, asperiores corporis eum
        aliquid ea laboriosam quaerat sit hic totam? Nobis nam cupiditate
        quibusdam cumque, aliquam excepturi!
      </p>
      <SRLWrapper>
        <div className="imgContainerHorizontal">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </SRLWrapper>
      <section className="pakiety">
        <div
          className="onePakiet basic"
          onMouseEnter={() => setActivePakiet("basic")}
          onMouseLeave={() => setActivePakiet("")}
          data-aos="fade-right"
        >
          <h2>Przegląd Podstawowy</h2>
          <ul className={activePakiet === "basic" ? "gearActive" : ""}>
            <li>
              <BsGearFill />
              weryfikacja stanu technicznego
            </li>
            <li>
              <BsGearFill />
              kontrola połączeń gwintowanych
            </li>
            <li>
              <BsGearFill />
              likwidacja luzów
            </li>
            <li>
              <BsGearFill />
              regulacja przerzutek i hamulców
            </li>
            <li>
              <BsGearFill />
              korekta centryczności oraz pompowanie kół
            </li>
            <li>
              <BsGearFill />
              smarowanie napędu
            </li>
          </ul>
          <span>od 100 zł</span>
        </div>
        <TiSpanner className={iconClass} />
        <div
          className="onePakiet pro"
          onMouseEnter={() => setActivePakiet("pro")}
          onMouseLeave={() => setActivePakiet("")}
          data-aos="fade-left"
        >
          <h2>Przegląd Zaawansowany</h2>
          <ul className={activePakiet === "pro" ? "gearActive" : ""}>
            <li>
              <BsGearFill />
              <p>weryfikacja stanu technicznego</p>
            </li>
            <li>
              <BsGearFill />
              kontrola połączeń gwintowanych
            </li>
            <li>
              <BsGearFill />
              likwidacja luzów
            </li>
            <li>
              <BsGearFill />
              regulacja przerzutek i hamulców
            </li>
            <li>
              <BsGearFill />
              korekta centryczności oraz pompowanie kół
            </li>
            <li>
              <BsGearFill />
              smarowanie napędu
            </li>
            <li>
              <BsGearFill />
              demontaż
            </li>
            <li>
              <BsGearFill />{" "}
              <p>
                {" "}
                czyszczenie oraz smarowanie łożysk sterów, sterów oraz piast
              </p>
            </li>
            <li>
              <BsGearFill />
              czyszczenie i smarowanie układu napędowego
            </li>
          </ul>
          <span>od 220 zł</span>
        </div>
      </section>
      <button
        className="fullPricesBtn"
        onMouseEnter={() => setActivePakiet("all")}
        onMouseLeave={() => setActivePakiet("")}
        onClick={() => setShowAllBikeOffer(true)}
      >
        zobacz całą ofertę
      </button>
      {showAllBikeOffer && (
        <AllBikeOffer setShowAllBikeOffer={setShowAllBikeOffer} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    [data-aos="titleWidth"] {
      width: 0;
      transition-property: width;
      &.aos-animate {
        width: 300px;
      }
    }
  }
  .bikeMainInfo {
    margin: 10vh auto 0;
    width: 50vw;
    text-align: center;
    font-size: 1.1rem;
  }

  .imgContainerHorizontal {
    margin: 10vh auto 0;
    width: 85vw;
    height: 25vh;
    display: flex;
    justify-content: space-between;
    img {
      width: 20%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      box-shadow: 2px 2px 5px 0 #111;
      cursor: pointer;
    }
  }
  .pakiety {
    width: 80vw;
    margin: 10vh auto 0;
    display: flex;
    justify-content: space-around;

    .onePakiet {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      border: 2px solid var(--secondaryColor);
      padding: 2vw 5vw;
      background: #111;
      ul {
        margin: 4vh auto;
        margin-bottom: 5vh;
        width: 100%;
        list-style: none;
        li {
          display: flex;
          align-items: flex-start;
          font-size: 1rem;
          svg {
            flex-shrink: 0;
            color: var(--secondaryColor);
            margin-right: 10px;
            margin-top: 7px;
            font-size: 1.1rem;
          }
        }
      }
      .gearActive {
        li {
          svg {
            animation: gearAnim 2s linear infinite;
            @keyframes gearAnim {
              100% {
                transform: rotate(360deg);
              }
            }
          }
        }
      }
      span {
        font-size: 1.5rem;
        margin-top: auto;
      }
    }
    .pakietIcon {
      font-size: 7rem;
      color: var(--secondaryColor);
      align-self: center;
      transform: rotate(-45deg);
      transition: 0.5s;
    }
    .basicIcon {
      transform: rotate(-90deg);
    }
    .proIcon {
      transform: rotate(0deg);
    }
    .allIcon {
      transform: rotate(-225deg);
    }
  }
  .fullPricesBtn {
    margin: 10vh auto;
    /* width: 20vw; */
    padding: 10px 30px;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: var(--textFont);
    border-radius: 5px;
    background: #eee;
    color: var(--navLinkColorHover);
    display: block;
    border: 2px solid var(--secondaryColor);
    transition: 0.4s;
    cursor: pointer;
    :hover {
      background: #111;
      color: #eee;
    }
  }
`;

export default BikeService;
