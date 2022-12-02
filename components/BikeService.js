import styled from "styled-components";
import { TiSpanner } from "react-icons/ti";
import { useEffect, useState } from "react";
import AllBikeOffer from "./AllBikeOffer";
import { BsGearFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { SRLWrapper } from "simple-react-lightbox";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

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
        Veloway to przestrzeń w której zajmujemy się kompleksową obsługą waszych
        rowerów. Zależnie od potrzeb oferujemy przeglądy zarówno podstawowe jak
        i rozszerzone. Zajmujemy się serwisem oraz naprawą wszystkich elementów
        składowych roweru. Nasza wiedza oraz praktyka pozwala na wykonanie
        napraw i usług indywidualnych których często wymagają wasze rowery.
        Wykonane naprawy poprzedzone są diagnozą która daje możliwość
        dopasowania usługi do Waszych potrzeb. <br /> Zapraszamy!
      </p>
      <div className="imgContainerDesktop">
        <SRLWrapper>
          <div className="imgContainerHorizontal">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </SRLWrapper>
      </div>
      <SRLWrapper>
        <Carousel
          className="carouselM"
          infinite
          autoPlay={3000}
          animationSpeed={1000}
          slidesPerPage={1}
          stopAutoPlayOnHover
          draggable={false}
        >
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </Carousel>
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
          <span>120 zł</span>
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
          <span>250 zł</span>
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
  /* background-image: url(${bgImg});
  background-size: cover; */
  background-color: var(--appBgColor);
  padding-bottom: 5vh;
  @media screen and (max-width: 800px) {
    padding-top: 10vh;
  }
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
    width: 65vw;
    text-align: center;
    font-size: 1.1rem;
    @media screen and (max-width: 800px) {
      width: 90vw;
    }
  }
  .imgContainerDesktop {
    @media screen and (max-width: 800px) {
      display: none;
    }
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
  .carouselM {
    @media screen and (min-width: 801px) {
      display: none;
    }
    width: 90vw;
    margin: 10vh auto 0;
    img {
      width: 90%;
      /* height: 100%; */
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
    @media screen and (max-width: 800px) {
      flex-direction: column;
      width: 90vw;
    }
    .onePakiet {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      border: 2px solid var(--secondaryColor);
      padding: 2vw 5vw;
      background: #111;
      @media screen and (max-width: 800px) {
        width: 100%;
        padding: 3vw 3vw;
      }
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
            @media screen and (max-width: 800px) {
              animation: gearAnim 2s linear infinite;
              @keyframes gearAnim {
                100% {
                  transform: rotate(360deg);
                }
              }
            }
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
      @media screen and (max-width: 800px) {
        transform: rotate(45deg);
        margin: 3vh auto;
        font-size: 5rem;
      }
    }
    .basicIcon {
      transform: rotate(-90deg);
      @media screen and (max-width: 800px) {
        transform: rotate(-45deg);
      }
    }
    .proIcon {
      transform: rotate(0deg);
      @media screen and (max-width: 800px) {
        transform: rotate(135deg);
      }
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
    @media screen and (max-width: 800px) {
      padding: 10px 20px;
      font-size: 1.3rem;
    }
  }
`;

export default BikeService;
