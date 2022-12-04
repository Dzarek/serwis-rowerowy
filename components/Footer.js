import styled from "styled-components";

const logoJarek = "/images/logoJarek.png";

// const Footer = ({ thumbnails }) => {
const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} VeloWay - Pracownia Rowerów. Wszelkie
        prawa zastrzeżone.
      </p>
      <span className="logoJarek">
        <p>projekt i wykonanie</p>
        <a href="https://www.jarekjanas.com">
          <img src={logoJarek} alt="logo Jarosław Janas" />
        </a>{" "}
      </span>
      {/* <div className="test">
        {thumbnails.map((item, index) => {
          return <img key={index} src={item} alt="" />;
        })}
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* .test {
    position: fixed;
    width: 80vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    img {
      width: 50px;
    }
  } */
  width: 100vw;
  padding: 2vh 7vw;
  /* height: 10vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  overflow: hidden;
  border-top: 1px solid #555;
  background: rgba(0, 0, 0, 0.4);
  p {
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.1rem;
    @media screen and (max-width: 1700px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 800px) {
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 0vh 2vw 5vh;
    height: 25vh;
  }
  .logoJarek {
    position: absolute;
    /* bottom: 4%; */
    bottom: 10%;
    /* transform: translateY(10%); */
    left: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      width: 25px;
      height: 25px;
      margin-left: 10px;
      img {
        width: 100%;
        height: 100%;
        transition: 0.3s;
        opacity: 0.8;
        :hover {
          filter: invert(100%);
        }
      }
    }
    p {
      font-size: 12px;
      letter-spacing: 1px;
    }
    @media screen and (max-width: 800px) {
      bottom: 2%;
      left: 3%;
    }
  }
`;

export default Footer;
