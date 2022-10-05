import styled from "styled-components";
import Link from "next/link";
import { HiChevronDoubleDown } from "react-icons/hi";
import { MdOutlinePhoneAndroid, MdEmail } from "react-icons/md";
// import { TiSpanner } from "react-icons/ti";

const headerBg = "/images/homepage/headerBg.jpg";
const logoWhite = "/images/veloway-logoWhite.png";

const Header = () => {
  return (
    <Wrapper>
      <div className="overlay"></div>
      <img className="logo" src={logoWhite} alt="" />
      <nav>
        <Link href="/">
          <a>Strona Główna</a>
        </Link>
        <Link href="/">
          <a>O mnie</a>
        </Link>
        <Link href="/">
          <a>Serwis Rowerowy</a>
        </Link>
        <Link href="/">
          <a>Serwis Narciarski</a>
        </Link>
        <Link href="/">
          <a>Akcesoria</a>
        </Link>
        <Link href="/">
          <a>Treningi</a>
        </Link>
        <Link href="/">
          <a>Kontakt</a>
        </Link>
      </nav>
      <HiChevronDoubleDown className="headerArrow" />
      <p className="cytat">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
        laboriosam!
      </p>
      <div className="contactWrapper">
        <a href="tel:798867716">
          <MdOutlinePhoneAndroid className="icon" />
          <p>798 867 716</p>
        </a>
        <div>
          <MdEmail className="icon" />
          <p>serwisrowerowy@gmail.com</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${headerBg});
  background-position: center 70%;
  background-size: cover;
  position: relative;
  .overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1;
    animation: showHeader 2s linear 1 forwards;
    @keyframes showHeader {
      99% {
        z-index: 1;
      }
      100% {
        background: transparent;
        z-index: 0;
      }
    }
  }

  .logo {
    position: absolute;
    top: 5%;
    left: 4%;
    /* transform: translate(-50%, -50%); */
    width: 25vw;
    opacity: 0.8;
  }
  nav {
    position: absolute;
    top: 50%;
    right: 11%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    a {
      font-size: 1.8rem;
      font-size: 2.2rem;
      text-decoration: none;
      color: black;
      color: var(--navLinkColor);
      margin: 1.5vh 0;
      /* margin: 0.5vh 0; */
      text-transform: uppercase;
      /* font-weight: 700; */
      letter-spacing: 3px;
      transition: 0.4s;
      text-shadow: 1px 1px 1px #999;
      font-family: var(--headerNavFont);
      :hover {
        color: var(--navLinkColorHover);
      }
      :nth-child(1) {
        color: var(--navLinkColorHover);
      }
    }
  }
  .headerArrow {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    color: #444;
    font-size: 3.5rem;
    animation: arrowLower 2s ease infinite;
    @keyframes arrowLower {
      100% {
        bottom: 15%;
        /* color: #fff; */
      }
    }
  }
  .cytat {
    position: absolute;
    bottom: 2%;
    right: 5%;
    color: white;
    text-shadow: 1px 1px 1px black;
    font-size: 1.2rem;
    font-style: italic;
  }
  .contactWrapper {
    position: absolute;
    top: 2%;
    right: 5%;
    display: flex;
    align-items: center;
    a,
    div {
      display: flex;
      align-items: center;
      color: #111;
      text-decoration: none;
      font-size: 1.2rem;
    }
    div {
      margin-left: 5vw;
    }
  }
`;

export default Header;
