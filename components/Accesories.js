import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaSmileWink } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useState } from "react";

const bikeAccesories1 = [
  {
    id: 1,
    name: "kask męski",
    price: "200",
    img: "/images/accesories/rowerowe/kask.jpg",
  },
  {
    id: 2,
    name: "kask damski",
    price: "100",
    img: "/images/accesories/rowerowe/kask2.jpg",
  },
  {
    id: 3,
    name: "kask męski",
    price: "300",
    img: "/images/accesories/rowerowe/kask3.jpg",
  },
  {
    id: 4,
    name: "bidon",
    price: "30",
    img: "/images/accesories/rowerowe/bidon.jpg",
  },
  {
    id: 5,
    name: "dzwonek",
    price: "40",
    img: "/images/accesories/rowerowe/dzwonek.jpg",
  },
  {
    id: 6,
    name: "nakolenniki",
    price: "230",
    img: "/images/accesories/rowerowe/nakolenniki.jpg",
  },
];

const bikeAccesories2 = [
  {
    id: 7,
    name: "ochraniacze",
    price: "130",
    img: "/images/accesories/rowerowe/ochraniacze.jpg",
  },
  {
    id: 8,
    name: "okulary",
    price: "80",
    img: "/images/accesories/rowerowe/okulary.jpg",
  },
  {
    id: 9,
    name: "pedał",
    price: "30",
    img: "/images/accesories/rowerowe/pedał.jpg",
  },
  {
    id: 10,
    name: "plecak",
    price: "130",
    img: "/images/accesories/rowerowe/plecak.jpg",
  },
];

const skiAccesories = [
  {
    id: 1,
    name: "buty",
    price: "330",
    img: "/images/accesories/narciarskie/buty.jpg",
  },
  {
    id: 2,
    name: "gogle",
    price: "120",
    img: "/images/accesories/narciarskie/gogle.jpg",
  },
  {
    id: 3,
    name: "kask",
    price: "230",
    img: "/images/accesories/narciarskie/kask.jpg",
  },
  {
    id: 4,
    name: "kije",
    price: "130",
    img: "/images/accesories/narciarskie/kije.jpg",
  },
  {
    id: 5,
    name: "kurtka",
    price: "530",
    img: "/images/accesories/narciarskie/kurtka.jpg",
  },
  {
    id: 6,
    name: "spodnie",
    price: "230",
    img: "/images/accesories/narciarskie/spodnie.jpg",
  },
];

const Accesories = () => {
  const [activeCategory, setActiveCategory] = useState("bike");
  const [activeNumber, setActiveNumber] = useState(1);
  const [activeBikeA, setActiveBikeA] = useState(bikeAccesories1);

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  useEffect(() => {
    if (activeNumber === 1) {
      setActiveBikeA(bikeAccesories1);
    }
    if (activeNumber === 2) {
      setActiveBikeA(bikeAccesories2);
    }
  }, [activeNumber]);

  const handleBack = () => {
    if (activeNumber === 1) {
      return;
    }
    setActiveNumber(activeNumber - 1);
  };
  const handleNext = () => {
    if (activeNumber === 2 || activeCategory === "ski") {
      return;
    }
    setActiveNumber(activeNumber + 1);
  };

  return (
    <Wrapper className="mainPage">
      <div className="title">
        <h1>Akcesoria </h1>
        <div data-aos="titleWidth"></div>
      </div>
      <div className="content">
        <section className="text">
          <p>
            Oprócz usług serwisowych, w swojej ofercie posiadam również liczne
            akcesoria rowerowe i narciarskie. Sprawdź czy nie potrzebujesz
            nowego gadżetu dla siebie lub znajdź prezent dla bliskiej osoby.
            <FaSmileWink />
          </p>
          <br />
          <p>
            Akcesoria są dostępne tylko w sklepie stacjonarnym na ul. Długa 48,
            33-170 Tuchów.
          </p>
        </section>
        <section className="shop">
          <div className="categories">
            <h4
              onClick={() => setActiveCategory("bike")}
              className={activeCategory === "bike" ? "activeCategory" : ""}
            >
              Rowerowe
            </h4>
            |
            <h4
              onClick={() => setActiveCategory("ski")}
              className={activeCategory === "ski" ? "activeCategory" : ""}
            >
              Narciarskie
            </h4>
          </div>
          {activeCategory === "bike" ? (
            <div className="items" data-aos="zoom-in" data-aos-delay="300">
              {activeBikeA.map((item) => {
                const { id, name, price, img } = item;
                return (
                  <div key={id} className="oneItem">
                    <img src={img} alt={name} />
                    <h5>{name}</h5>
                    <span>{price} zł</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="items" data-aos="zoom-in" data-aos-delay="300">
              {skiAccesories.map((item) => {
                const { id, name, price, img } = item;
                return (
                  <div key={id} className="oneItem">
                    <img src={img} alt={name} />
                    <h5>{name}</h5>
                    <span>{price} zł</span>
                  </div>
                );
              })}
            </div>
          )}
          <div className="pageNumber">
            <MdOutlineKeyboardArrowLeft onClick={handleBack} />
            <span
              onClick={() => setActiveNumber(1)}
              className={activeNumber === 1 ? "activeNumber" : ""}
            >
              1
            </span>
            {activeCategory === "bike" && (
              <span
                onClick={() => setActiveNumber(2)}
                className={activeNumber === 2 ? "activeNumber" : ""}
              >
                2
              </span>
            )}
            <MdOutlineKeyboardArrowRight onClick={handleNext} />
          </div>
        </section>
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
    width: 80vw;
    margin: 10vh auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text {
      width: 30%;
      margin-top: -10vh;
      p {
        font-size: 1.2rem;
        /* font-family: var(--titleFont); */
        line-height: 2.5;
        text-align: justify;
        svg {
          color: var(--secondaryColor);
          margin-left: 10px;
          font-size: 1.5rem;
        }
      }
    }
    .shop {
      width: 57%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .categories {
        display: flex;
        align-items: center;
        font-size: 2rem;
        margin-bottom: 3vh;
        h4 {
          margin: 0 3vw;
          cursor: pointer;
          transition: 0.4s;
        }
      }
      .activeCategory {
        color: var(--secondaryColor);
      }
      .items {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        /* width: 40vw; */
        .oneItem {
          width: 12vw;
          height: 12vw;
          background: var(--secondaryColor2);
          position: relative;
          margin: 1.5vw;
          border-radius: 5px;
          overflow: hidden;
          cursor: pointer;
          img {
            position: absolute;
            width: 100%;
            height: 10vw;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            object-fit: cover;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            transition: 0.3s;
          }
          h5 {
            position: absolute;
            width: 100%;
            height: 2vw;
            bottom: 0vw;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            text-transform: capitalize;
          }
          span {
            position: absolute;
            top: 0;
            left: 0;
            background: var(--secondaryColor2);
            border-bottom-right-radius: 5px;
            padding: 5px 10px;
          }
          :hover img {
            width: 110%;
          }
        }
      }
      .pageNumber {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        margin-top: 3vh;
        background: #ddd;
        padding: 5px 10px;
        color: #222;
        border-radius: 10px;
        span {
          cursor: pointer;
          transition: 0.4s;
          height: 100%;
          min-width: 30px;
          text-align: center;
          border-radius: 5px;
          :hover {
            color: #fff;
            background: #222;
            background: var(--secondaryColor2);
          }
        }
        .activeNumber {
          color: #fff;
          background: #222;
          background: var(--secondaryColor2);
        }
        svg {
          font-size: 2rem;
          cursor: pointer;
          transition: 0.4s;
          height: 100%;
          min-width: 30px;
          text-align: center;
          border-radius: 5px;
          :hover {
            color: #fff;
            background: #222;
          }
          :nth-of-type(1) {
            margin-right: 15px;
          }
          :nth-last-of-type(1) {
            margin-left: 15px;
          }
        }
      }
    }
  }
`;

export default Accesories;
