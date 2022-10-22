import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaSmileWink } from "react-icons/fa";

const bikeAccesories = [
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
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
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
            nowego gadżetu dla siebie lub znajdź prezent dla bliskiej osoby.{" "}
            <FaSmileWink />
          </p>
        </section>
        <section className="shop">
          <div className="categories">
            <h4>Rowerowe</h4>|<h4>Narciarskie</h4>
          </div>
          <div className="items">
            <div className="oneItem">
              <img src="/images/accesories/narciarskie/spodnie.jpg" alt="" />
              <h5>Spodnie</h5>
              <span>100</span>
            </div>
            <div className="oneItem">
              <img src="/images/accesories/narciarskie/spodnie.jpg" alt="" />
              <h5>Spodnie</h5>
              <span>100</span>
            </div>
            <div className="oneItem">
              <img src="/images/accesories/narciarskie/spodnie.jpg" alt="" />
              <h5>Spodnie</h5>
              <span>100</span>
            </div>
            <div className="oneItem">
              <img src="/images/accesories/narciarskie/spodnie.jpg" alt="" />
              <h5>Spodnie</h5>
              <span>100</span>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
      p {
        font-size: 1.2rem;
        font-family: var(--titleFont);
        line-height: 2;
        text-align: justify;
        svg {
          color: var(--secondaryColor);
          margin-left: 10px;
          font-size: 1.5rem;
        }
      }
    }
    .shop {
      width: 50%;
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
        }
      }
      .items {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        /* width: 40vw; */
        .oneItem {
          width: 10vw;
          height: 10vw;
          background: #fff;
          position: relative;
          margin: 1.5vw;
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            object-fit: cover;
          }
        }
      }
    }
  }
`;

export default Accesories;
