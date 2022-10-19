import styled from "styled-components";

const logoJarek = "/images/logoJarek.png";

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
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
  p {
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .logoJarek {
    position: absolute;
    /* bottom: 4%; */
    top: 50%;
    transform: translateY(-10%);
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
