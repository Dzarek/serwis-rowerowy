import styled from "styled-components";
// import Link from "next/link";
import { HiChevronDoubleDown } from "react-icons/hi";
import { MdOutlinePhoneAndroid, MdEmail } from "react-icons/md";
import {
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaInstagramSquare,
} from "react-icons/fa";
// import { TiSpanner } from "react-icons/ti";
import { navlinks } from "../public/data";
import { Link } from "react-scroll";
// import { animateScroll as scroll } from "react-scroll";

const headerBg = "/images/homepage/headerBg5.jpg";
const logoWhite = "/images/veloway-logoWhite.png";

const Header = () => {
  return (
    <Wrapper id="home">
      <div className="overlay"></div>
      <img className="logo" src={logoWhite} alt="" />
      <nav>
        {navlinks.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.link}
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              offset={item.link === "home" ? 0 : 2}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <HiChevronDoubleDown className="headerArrow" />
      <p className="cytat">Pracuj w ciszy, niech efekty robią hałas!</p>
      <div className="contactWrapper">
        <div>
          <FaMapMarkerAlt className="icon" />
          <p>ul. Długa 48, 33-170 Tuchów</p>
        </div>
        <a href="tel:798867716">
          <MdOutlinePhoneAndroid className="icon" />
          <p>798 867 716</p>
        </a>
        <div>
          <MdEmail className="icon" />
          <p>piotr.j.sajdak@gmail.com</p>
        </div>
        <a
          href="https://www.facebook.com/PracowniarowerowPiotrSajdak"
          target="_blank"
          rel="noopener noreferrer"
          className="fbIn"
        >
          <FaFacebookSquare className="icon" />
        </a>
        <a
          href="https://www.instagram.com/veloway_pracowniarowerow/"
          target="_blank"
          rel="noopener noreferrer"
          className="fbIn"
        >
          <FaInstagramSquare className="icon" />
        </a>
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
  /* border-bottom: 5px solid #444; */
  box-shadow: 0px 50px 100px #111;
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
    top: 10%;
    left: 4%;

    /* transform: translate(-50%, -50%); */
    width: 25vw;
    opacity: 0.8;
    opacity: 0.6;
  }
  nav {
    position: absolute;
    top: 50%;
    right: 9%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    a {
      font-size: 1.8rem;
      font-size: 2.2rem;
      text-decoration: none;
      /* color: var(--navLinkColor); */
      /* color: #eee; */
      color: #ccc;
      /* margin: 1.5vh 0; */
      margin: 1.2vh 0;
      text-transform: uppercase;
      /* font-weight: 700; */
      letter-spacing: 3px;
      transition: 0.4s;
      text-shadow: 1px 1px 1px #999;
      font-family: var(--headerNavFont);
      cursor: pointer;
      &.active {
        /* color: var(--navLinkColorHover); */
        color: var(--secondaryColor99);
      }
      :hover {
        /* color: var(--navLinkColorHover); */
        color: var(--secondaryColor4);
      }
      /* :nth-child(1) {
        color: var(--navLinkColorHover);
      } */
    }
  }
  .headerArrow {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    color: #444;
    color: #ccc;
    font-size: 3.5rem;
    animation: arrowLower 2s ease infinite;
    @keyframes arrowLower {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        bottom: 12%;
        opacity: 0;
      }
    }
  }
  .cytat {
    position: absolute;
    bottom: 2%;
    /* right: 5%; */
    right: 7%;
    /* color: white; */
    color: #eee;
    text-shadow: 1px 1px 1px black;
    font-size: 1.3rem;
    letter-spacing: 0.5px;
    font-style: italic;
  }
  .contactWrapper {
    position: absolute;
    /* top: 2%;
    right: 7%; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    right: 0;
    width: 100vw;
    padding-top: 0.7%;
    padding-bottom: 0.5%;
    padding-right: 7%;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
    a,
    div {
      display: flex;
      align-items: center;
      /* color: #111; */
      color: #eee;
      text-decoration: none;
      margin-left: 2vw;
      transition: 0.3s;
      font-family: var(--headerContactFont);
      font-size: 1.4rem;
      font-weight: 600;
      :hover {
        transform: translateY(5px);
      }
      @media screen and (max-width: 1700px) {
        font-size: 1.3rem;
      }
    }
    .fbIn {
      display: flex;
      align-items: center;
      color: #eee;
      text-decoration: none;
      margin-left: 3vw;
      transition: 0.3s;
      font-size: 1.6rem;
      :hover {
        transform: translateY(5px);
      }
      :nth-of-type(3) {
        margin-left: 1vw;
      }
      @media screen and (max-width: 1700px) {
        font-size: 1.3rem;
      }
    }
  }
  .icon {
    /* color: var(--navLinkColorHover); */
    color: var(--secondaryColor99);
    margin-right: 10px;
  }
`;

export default Header;
