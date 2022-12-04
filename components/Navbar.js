import styled from "styled-components";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import { navlinks } from "../public/data";

import { HiMenuAlt2, HiArrowCircleUp } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { MdOutlinePhoneAndroid, MdEmail } from "react-icons/md";
import {
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaInstagramSquare,
} from "react-icons/fa";

const logoImg = "/images/veloway-logo.png";

const Navbar = () => {
  const [offset, setOffset] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuM, setShowMenuM] = useState(false);
  const [contactInfo, setContactInfo] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  useEffect(() => {
    if (window.pageYOffset <= window.innerHeight) {
      setShowMenu(false);
    }
  }, [offset]);

  const handleCloseMenu = () => {
    setShowMenu(false);
    setShowMenuM(false);
    setContactInfo("");
  };

  return (
    <>
      <Wrapper>
        {!showMenu &&
        process.browser &&
        window.pageYOffset > window.innerHeight ? (
          <button onClick={() => setShowMenu(true)} className="navHamburger">
            <HiMenuAlt2 />
          </button>
        ) : null}
        <div
          className={
            showMenu &&
            process.browser &&
            window.pageYOffset > window.innerHeight
              ? "menu"
              : "menu menuHidden"
          }
        >
          <button onClick={handleCloseMenu} className="navHamburger2">
            <IoClose />
          </button>
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
                  offset={2}
                  onClick={handleCloseMenu}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <img src={logoImg} alt="logo" className="logo" />
          <div className="contactWrapper">
            <div>
              <FaMapMarkerAlt
                className="icon"
                onClick={() => setContactInfo("ul. Długa 48, 33-170 Tuchów")}
              />
            </div>
            <a
              href="tel:798867716"
              onClick={() => setContactInfo("798 867 716")}
            >
              <MdOutlinePhoneAndroid className="icon" />
            </a>
            <a href="mailto:piotr.j.sajdak@gmail.com">
              <MdEmail
                className="icon"
                onClick={() => setContactInfo("piotr.j.sajdak@gmail.com")}
              />
            </a>
            <a
              href="https://www.facebook.com/PracowniarowerowPiotrSajdak"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setContactInfo("PracowniarowerowPiotrSajdak")}
            >
              <FaFacebookSquare className="icon" />
            </a>
            <a
              href="https://www.instagram.com/veloway_pracowniarowerow/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setContactInfo("veloway_pracowniarowerow")}
            >
              <FaInstagramSquare className="icon" />
            </a>
          </div>
          <span className="contactInfo">{contactInfo}</span>
        </div>
        <button
          className={offset > 200 ? "upBtn" : "upBtn upBtnNone"}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <HiArrowCircleUp />
        </button>
      </Wrapper>
      <Wrapper2>
        {!showMenuM && (
          <button onClick={() => setShowMenuM(true)} className="navHamburgerM">
            <HiMenuAlt2 />
          </button>
        )}
        <div className={showMenuM ? "menu" : "menu menuHidden"}>
          <button onClick={handleCloseMenu} className="navHamburger2M">
            <IoClose />
          </button>
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
                  offset={item.link === "home" ? 0 : 18}
                  onClick={handleCloseMenu}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <img src={logoImg} alt="logo" className="logo" />
          <div className="contactWrapper">
            <a
              href="https://goo.gl/maps/iggpgZJGmvX6Sh279"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt className="icon" />
            </a>
            <a href="tel:798867716">
              <MdOutlinePhoneAndroid className="icon" />
            </a>
            <a href="mailto:piotr.j.sajdak@gmail.com">
              <MdEmail className="icon" />
            </a>
            <a
              href="https://www.facebook.com/PracowniarowerowPiotrSajdak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="icon" />
            </a>
            <a
              href="https://www.instagram.com/veloway_pracowniarowerow/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="icon" />
            </a>
          </div>
          <span className="contactInfo">{contactInfo}</span>
        </div>
        <button
          className={offset > 200 ? "upBtn" : "upBtn upBtnNone"}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <HiArrowCircleUp />
        </button>
      </Wrapper2>
    </>
  );
};

const Wrapper = styled.div`
  background-image: url("/images/mainBg.jpg");
  background-size: cover;
  background-attachment: fixed;
  @media screen and (max-width: 800px) {
    display: none;
  }
  .navNone {
    display: none;
  }
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 25vw;
    height: 100vh;
    background: #fff;
    z-index: 999;
    transition: 0.4s;
  }
  .menuHidden {
    left: -30vw;
    transition: 0.4s;
  }
  nav {
    position: absolute;
    /* top: 52%; */
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    a {
      /* width: 100%; */
      text-decoration: none;
      font-size: 1.5rem;
      /* margin-bottom: 1vh; */
      margin-bottom: 0.9vh;
      color: #222;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 20%;
      transition: 0.4s;
      cursor: pointer;
      svg {
        margin-right: 15px;
        color: var(--navLinkColorHover);
      }
      :hover {
        margin-left: 25%;
      }
      &.active {
        margin-left: 25%;
      }
    }
  }
  .logo {
    position: absolute;
    /* top: 15%; */
    top: 13%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45%;
  }
  .contactWrapper {
    position: absolute;
    bottom: 6%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 65%;
    justify-content: space-between;
    a,
    div {
      .icon {
        font-size: 2rem;
        cursor: pointer;
      }
    }
  }
  .contactInfo {
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    color: #222;
    text-align: center;
    font-size: 1.2rem;
  }
  .upBtn {
    position: fixed;
    bottom: 3vh;
    right: 3vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--titleLine);
    transition: 0.5s;
    cursor: pointer;
    z-index: 999;
    :hover {
      color: var(--secondaryColor3);
    }
  }
  .upBtnNone {
    opacity: 0;
  }
`;
const Wrapper2 = styled.div`
  background-image: url("/images/mainBg.jpg");
  background-size: cover;
  background-attachment: fixed;
  @media screen and (min-width: 801px) {
    display: none;
  }
  .navNone {
    display: none;
  }
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    z-index: 999999;
    transition: 0.4s;
  }
  .menuHidden {
    left: -110vw;
    transition: 0.4s;
  }
  nav {
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media screen and (min-height: 800px) {
      top: 55%;
    }
    a {
      width: 100%;
      text-decoration: none;
      font-size: 1.4rem;
      margin-bottom: 1vh;
      color: #222;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.4s;
      cursor: pointer;
      @media screen and (min-height: 800px) {
        font-size: 1.7rem;
        margin-bottom: 2vh;
      }
      svg {
        margin-right: 15px;
        color: var(--navLinkColorHover);
      }
      &.active {
        background: var(--navLinkColorHover);
        color: #fff;
        svg {
          color: #fff;
        }
      }
    }
  }
  .logo {
    position: absolute;
    top: 13%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* width: 45%; */
    height: 18%;
    @media screen and (min-height: 800px) {
      top: 15%;
    }
  }
  .contactWrapper {
    position: absolute;
    bottom: 7%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 80%;
    justify-content: space-between;
    a,
    div {
      .icon {
        font-size: 1.7rem;
        cursor: pointer;
        @media screen and (min-height: 800px) {
          font-size: 2rem;
        }
      }
    }
  }
  /* .contactInfo {
    position: absolute;
    bottom: 0.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    color: #222;
    text-align: center;
    font-size: 1.1rem;
    @media screen and (min-height: 800px) {
      font-size: 1.3rem;
    }
  } */
  .upBtn {
    position: fixed;
    bottom: 3vh;
    right: 3vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--titleLine);
    transition: 0.5s;
    cursor: pointer;
    z-index: 999;
    :hover {
      color: var(--secondaryColor3);
    }
  }
  .upBtnNone {
    opacity: 0;
  }
`;

export default Navbar;
