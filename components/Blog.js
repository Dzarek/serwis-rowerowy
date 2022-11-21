import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { GiCartwheel } from "react-icons/gi";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaSmileWink } from "react-icons/fa";
import { blogArticles } from "../public/data";

const Blog = () => {
  const [showArticle, setShowArticle] = useState(false);
  const [showAllArticles, setShowAllArticles] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <Wrapper className="mainPage" id="news">
      <div className="title">
        <h1>Aktualności</h1>
        <div data-aos="titleWidth"></div>
      </div>
      <h2>
        Interesuje Cię świat rowerów? Zapraszam do lektury moich artykułów{" "}
        <FaSmileWink />
      </h2>
      <Carousel
        className="carousel"
        infinite
        autoPlay={5000}
        animationSpeed={1000}
        slidesPerPage={3}
        addArrowClickHandler
        stopAutoPlayOnHover
        draggable={false}
        arrowLeft={<MdOutlineArrowBackIos className="arrow" />}
        arrowRight={<MdOutlineArrowForwardIos className="arrow" />}
      >
        {blogArticles.map((article, index) => {
          const { title, image, date } = article;
          return (
            <div
              key={index}
              className="oneArticle"
              onClick={() => setShowArticle(article)}
            >
              <img src={image} alt={title} />
              <span>{date}</span>
              <div className="articleName">
                <GiCartwheel />
                <h3>{title}</h3>
              </div>
            </div>
          );
        })}
      </Carousel>
      <CgMenuGridR
        className="allArticleIcon"
        onClick={() => setShowAllArticles(true)}
      />
      {showArticle && (
        <div className="fullArticle">
          <IoClose onClick={() => setShowArticle(false)} />
          <div className="contentArticle">
            <img src={showArticle.image} alt="" />
            <h3>{showArticle.title}</h3>
            {showArticle.text.map((info, index) => {
              return <p key={index}>{info}</p>;
            })}
          </div>
        </div>
      )}
      {showAllArticles && (
        <div className="allArticles">
          <IoClose
            className="closeIcon"
            onClick={() => setShowAllArticles(false)}
          />
          <div className="articles">
            {blogArticles.map((article, index) => {
              const { title, image, date } = article;
              return (
                <div
                  key={index}
                  className="oneArticle"
                  onClick={() => setShowArticle(article)}
                >
                  <img src={image} alt={title} />
                  <span>{date}</span>
                  <div className="articleName">
                    <GiCartwheel />
                    <h3>{title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 10vh;
  /* background: #111; */
  background: rgba(0, 0, 0, 0.4);
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    [data-aos="titleWidth"] {
      width: 0;
      transition-property: width;
      &.aos-animate {
        width: 200px;
      }
    }

    @media screen and (max-width: 800px) {
      padding: 5vh 0;
    }
  }
  h2 {
    text-align: center;
    width: 70vw;
    margin: 10vh auto 0;
    font-size: 1.2rem;
    font-weight: 400;
    svg {
      margin-left: 10px;
      font-size: 1.5rem;
    }
  }
  /* .content {
    width: 90vw;
    margin: 15vh auto 10vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; */
  .carousel {
    width: 90vw;
    margin: 10vh auto 5vh;
  }
  .arrow {
    font-size: 2rem;
    cursor: pointer;
    transition: 0.4s;
    :hover {
      color: var(--secondaryColor);
    }
  }
  .oneArticle {
    position: relative;
    height: 15vw;
    width: 25vw;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #ddd;
    span {
      position: absolute;
      top: 0;
      left: 0;
      padding: 5px 15px;
      border-radius: 0 0 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ccc;
      color: var(--secondaryColor2);
      font-size: 1rem;
      z-index: 2;
      font-weight: 600;
    }
    img {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: brightness(0.7);
      object-fit: cover;
      border-radius: 5px;
      transition: 0.4s;
    }
    .articleName {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--workoutBg);
      padding: 10px 20px;
      border-radius: 20px;
      width: 70%;
      h3 {
        text-align: center;
        text-transform: uppercase;
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 1.5;
        font-family: var(--headerContactFont);
      }
      svg {
        margin-right: 10px;
        font-size: 2rem;
        flex-shrink: 0;
      }
    }
    @keyframes svgRotate {
      100% {
        transform: rotate(360deg);
      }
    }
    :hover svg {
      animation: svgRotate 2s linear infinite;
    }
    :hover img {
      filter: brightness(1);
    }
  }
  .allArticleIcon {
    font-size: 3rem;
    margin: 2vh auto 5vh;
    display: block;
    cursor: pointer;
    transition: 0.4s;
    :hover {
      color: var(--secondaryColor);
    }
  }
  .fullArticle {
    background: rgba(0, 0, 0, 0.9);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999999;
    svg {
      position: absolute;
      top: 3vh;
      left: 50%;
      transform: translateX(-50%);
      font-size: 4rem;
      color: #eee;
      cursor: pointer;
      transition: 0.4s;

      :hover {
        color: var(--secondaryColor);
        transform: translateX(-50%) rotate(180deg);
      }
    }
    .contentArticle {
      background-color: #eee;
      width: 50vw;
      height: 80vh;
      position: relative;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      overflow: auto;
      border-radius: 5px;
      border: 2px solid var(--secondaryColor2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      color: #222;
      img {
        /* position: absolute;
        top: 0;
        left: 0; */
        width: 100%;
        height: 50vh;
        object-fit: cover;
      }

      h3 {
        margin: 5vh auto;
        text-transform: uppercase;
        font-size: 1.8rem;
        color: var(--secondaryColor2);
        padding: 0 3vw;
        font-family: var(--headerContactFont);
      }
      p {
        padding: 0 20px;
        text-align: justify;
        font-size: 1.1rem;
        margin-bottom: 20px;
      }
    }
  }
  .allArticles {
    /* background: rgba(20, 20, 20, 0.98); */
    background-image: url("/images/mainBg.jpg");
    background-size: cover;
    background-attachment: fixed;
    z-index: 9999991;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    transition: 1s;
    overflow-x: hidden;
    overflow-y: auto;
    .closeIcon {
      position: absolute;
      top: 3vh;
      left: 50%;
      transform: translateX(-50%);
      font-size: 4rem;
      color: #eee;
      cursor: pointer;
      transition: 0.4s;
      z-index: 9999999999999;
      :hover {
        color: var(--secondaryColor);
        transform: translateX(-50%) rotate(180deg);
      }
    }
    .articles {
      width: 100vw;
      min-height: 100vh;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 5vw;
      .oneArticle {
        margin: 2vw;
      }
    }
  }
  /* } */
`;

export default Blog;
