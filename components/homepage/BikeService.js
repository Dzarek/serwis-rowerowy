import styled from "styled-components";
import { TiSpanner } from "react-icons/ti";
import { useEffect, useState } from "react";

const bgImg = "/images/bikeService/bg.jpg";

const BikeService = () => {
  const [activePakiet, setActivePakiet] = useState(null);
  const [iconClass, setIconClass] = useState("pakietIcon");

  useEffect(() => {
    if (activePakiet === "basic") {
      setIconClass("pakietIcon basicIcon");
    }
    if (activePakiet === "pro") {
      setIconClass("pakietIcon proIcon");
    }
    if (activePakiet === "") {
      setIconClass("pakietIcon");
    }
  }, [activePakiet]);

  return (
    <Wrapper className="mainPage">
      {/* <div className="bg"></div> */}
      <div className="title">
        <h1>Serwis Rowerowy</h1>
      </div>
      <p className="bikeMainInfo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae aperiam
        cumque ad nesciunt pariatur temporibus, voluptatum quidem rerum laborum
        quas reiciendis? Laudantium tenetur magnam possimus quia voluptas
        officia nisi ad vel facilis consequuntur, asperiores corporis eum
        aliquid ea laboriosam quaerat sit hic totam? Nobis nam cupiditate
        quibusdam cumque, aliquam excepturi!
      </p>
      <div className="imgContainerHorizontal">
        <img src={bgImg} alt="" />
        <img src={bgImg} alt="" />
        <img src={bgImg} alt="" />
        <img src={bgImg} alt="" />
      </div>
      <section className="pakiety">
        <div
          className="onePakiet basic"
          onMouseEnter={() => setActivePakiet("basic")}
          onMouseLeave={() => setActivePakiet("")}
        >
          <h2>Przegląd Podstawowy</h2>
          <span>100 zł</span>
          <ul>
            <li>weryfikacja stanu technicznego</li>
            <li>kontrola połączeń gwintowanych</li>
            <li>likwidacja luzów</li>
            <li>regulacja przerzutek i hamulców</li>
            <li>korekta centryczności oraz pompowanie kół</li>
            <li>smarowanie napędu</li>
          </ul>
        </div>
        <TiSpanner className={iconClass} />
        <div
          className="onePakiet pro"
          onMouseEnter={() => setActivePakiet("pro")}
          onMouseLeave={() => setActivePakiet("")}
        >
          <h2>Przegląd Zaawansowany</h2>
          <span>220 zł</span>
          <ul>
            <li>weryfikacja stanu technicznego</li>
            <li>kontrola połączeń gwintowanych</li>
            <li>likwidacja luzów</li>
            <li>regulacja przerzutek i hamulców</li>
            <li>korekta centryczności oraz pompowanie kół</li>
            <li>smarowanie napędu</li>
            <li>demontaż</li>
            <li>
              czyszczenie oraz smarowanie łożysk sterów, sterów oraz piast
            </li>
            <li>czyszczenie i smarowanie układu napędowego</li>
          </ul>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* .bg { */
  /* background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  background-image: url(${bgImg});
  opacity: 0.5; */
  /* } */
  .bikeMainInfo {
    margin: 10vh auto 0;
    width: 50vw;
    text-align: center;
    font-size: 1.1rem;
  }

  .imgContainerHorizontal {
    margin: 10vh auto 0;
    width: 80vw;
    height: 25vh;
    display: flex;
    justify-content: space-between;
    img {
      width: 20%;
      height: 100%;
      object-fit: cover;
    }
  }
  .pakiety {
    width: 80vw;
    margin: 10vh auto 0;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    .onePakiet {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      border: 2px solid var(--secondaryColor);
      padding: 2vw 5vw;
      height: 60vh;
      background: #111;
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
  }
`;

export default BikeService;
