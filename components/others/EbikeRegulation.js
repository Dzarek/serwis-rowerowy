import styled from "styled-components";
import { ImCross } from "react-icons/im";

const EbikeRegulation = ({ setOpenRegulation, ebikeregulation }) => {
  return (
    <Wrapper>
      <ImCross onClick={() => setOpenRegulation(false)} className="exitBtn" />
      <div className="content">
        <h2>REGULAMIN WYPOŻYCZALNI</h2>
        <p className="mainInfo">{ebikeregulation.maininfo}</p>
        <section>
          <h3>POSTANOWIENIA OGÓLNE:</h3>
          {ebikeregulation.postanowienia.map((item, index) => {
            return (
              <p key={index}>
                {index + 1}. {item}
              </p>
            );
          })}
        </section>
        <section>
          <h3>PROCEDURA REZERWACJI:</h3>
          {ebikeregulation.procedura.map((item, index) => {
            return (
              <p key={index}>
                {index + 1}. {item}
              </p>
            );
          })}
        </section>
        <section>
          <h3>ZASADY WYPOŻYCZANIA SPRZĘTU:</h3>
          {ebikeregulation.zasady.map((item, index) => {
            return (
              <p key={index}>
                {index + 1}. {item}
              </p>
            );
          })}
        </section>
        <section>
          <h3>Dane osobowe Klientów:</h3>
          {ebikeregulation.rodo.map((item, index) => {
            return (
              <p key={index}>
                {index + 1}. {item}
              </p>
            );
          })}
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--navLinkColorHover);
  z-index: 999999999;
  overflow-y: auto;
  .exitBtn {
    position: fixed;
    top: 5vh;
    right: 5vw;
    z-index: 2;
    font-size: 2rem;
    color: #111;
    cursor: pointer;
    transition: 0.5s;

    :hover {
      transform: rotate(180deg);
    }
    @media screen and (max-width: 800px) {
      font-size: 2.5rem;
      background-color: white;
      border-radius: 10px;
      padding: 10px;
    }
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10vh 10vw;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 800px) {
      padding: 15vh 5vw;
    }
    h2 {
      text-align: center;
      width: 100%;
    }
    .mainInfo {
      text-align: center;
      width: 100%;
      margin: 5vh auto;
      font-size: 1.2rem;
    }
    section {
      margin-bottom: 5vh;
      h3 {
        text-align: center;
        margin-bottom: 2vh;
        text-transform: uppercase;
      }
      p {
        color: #ddd;
        text-align: justify;
      }
    }
  }
`;

export default EbikeRegulation;
