import styled from "styled-components";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import { navlinks } from "../public/data";

import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { MdOutlinePhoneAndroid, MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaMapMarkerAlt } from "react-icons/fa";

const logoImg = "/images/veloway-logo.png";

const Navbar = () => {
  const [offset, setOffset] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
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
    setContactInfo("");
  };

  return (
    <>
      {/* {process.browser && window.pageYOffset > window.innerHeight ? ( */}
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
                <Link key={index} href="/">
                  <a>
                    {item.icon}
                    {item.name}
                  </a>
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
            <div>
              <MdEmail
                className="icon"
                onClick={() => setContactInfo("serwisrowerowy@gmail.com")}
              />
            </div>
            <a
              // href="https://www.facebook.com/Pyszotka-Lipinki-100529712463136/?ti=as"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setContactInfo("serwis rowerowy")}
            >
              <FaFacebookSquare className="icon" />
            </a>
          </div>
          <span className="contactInfo">{contactInfo}</span>
        </div>
      </Wrapper>
      {/* ) : null} */}
    </>
  );
};

const Wrapper = styled.div`
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
      margin-bottom: 1vh;
      color: #222;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 20%;
      transition: 0.4s;
      svg {
        margin-right: 15px;
        color: var(--navLinkColorHover);
      }
      :hover {
        margin-left: 25%;
      }
    }
  }
  .logo {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45%;
  }
  .contactWrapper {
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 60%;
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
    bottom: 3%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    color: #222;
    text-align: center;
    font-size: 1.2rem;
  }
`;

export default Navbar;
