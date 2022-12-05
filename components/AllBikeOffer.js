import styled from "styled-components";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { MdExpandMore } from "react-icons/md";
import { bikePrices } from "../public/data";

const mainImg = "/images/bikeService/bike/main.png";

const AllBikeOffer = ({ setShowAllBikeOffer }) => {
  const [bikeImage, setBikeImage] = useState(mainImg);

  const handleClose = () => {
    setShowAllBikeOffer(false);
    setBikeImage(mainImg);
  };

  return (
    <Wrapper>
      <div className="content">
        <IoClose className="closeIcon" onClick={handleClose} />
        <h2 className="priceTitle">Cennik Serwisu Rowerów</h2>
        <img src={bikeImage} alt="rower" className="bikeImg" />
        <div className="allCategories">
          <Accordion allowZeroExpanded={true}>
            {bikePrices.map((oneInfo) => {
              const { title, details, id, image } = oneInfo;
              return (
                <AccordionItem key={id}>
                  <div className="category" onClick={() => setBikeImage(image)}>
                    <header>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h3>
                            {title}
                            <button type="button" className="btn">
                              <MdExpandMore />
                            </button>
                          </h3>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                    </header>
                    <AccordionItemPanel>
                      <ul>
                        {details.map((item, index) => {
                          const { info, price } = item;
                          return (
                            <li key={index}>
                              <p>{info}</p>
                              <div></div>
                              <span>{price} zł</span>
                            </li>
                          );
                        })}
                      </ul>
                    </AccordionItemPanel>
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
        <ul className="extraInfo">
          <li>*Ceny nie zawierają części.</li>
          <li>
            **Usługi nie zawarte w cenniku oraz indywidualne są wyceniane
            zależnie od nakładu czasu.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--bikeBg);
  background-image: url("/images/mainBg.jpg");
  background-size: cover;
  background-attachment: fixed;
  z-index: 999999999999999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  transition: 1s;
  overflow-x: hidden;
  overflow-y: auto;
  .content {
    width: 100vw;
    min-height: 120vh;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    background-color: var(--appBgColor);
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
  }
  .closeIcon {
    position: absolute;
    top: 5vh;
    left: 50%;
    transform: translateX(-50%);
    font-size: 4rem;
    color: var(--secondaryColor);
    cursor: pointer;
    transition: 0.5s;
    :hover {
      transform: translateX(-50%) rotate(180deg);
      color: var(--secondaryColor3);
    }
    @media screen and (max-width: 800px) {
      top: 3vh;
      font-size: 3rem;
    }
  }
  .bikeImg {
    width: 40vw;
    margin-bottom: 5vh;
    border: 2px solid var(--secondaryColor3);
    border-radius: 5px;
    animation: partColor 1s ease-in infinite alternate;
    @keyframes partColor {
      100% {
        filter: saturate(0);
      }
    }
    @media screen and (max-width: 800px) {
      margin: 35vh auto 10vh;
      width: 100vw;
    }
  }
  .priceTitle {
    position: absolute;
    top: 10vh;
    left: 73.5%;
    transform: translateX(-50%);
    font-size: 2rem;
    text-transform: uppercase;
    color: var(--secondaryColor);
    text-align: center;
    @media screen and (max-width: 800px) {
      left: 50%;
      top: 15vh;
      width: 90vw;
      font-size: 1.8rem;
    }
  }
  .accordion__panel {
    animation: fadein 0.5s ease-in;
    overflow: hidden;
  }
  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .category {
    color: #222;
    width: 35vw;
    padding: 1vh 2vw;
    background: #fff;
    border: 2px solid var(--secondaryColor3);
    border-radius: 5px;
    margin-bottom: 1vh;
    @media screen and (max-width: 800px) {
      width: 95vw;
      margin-bottom: 2vh;
    }
    header {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      h3 {
        width: 30vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        @media screen and (max-width: 800px) {
          font-size: 1.2rem;
          width: 90vw;
        }
      }
      .btn {
        background: transparent;
        border: none;
        font-size: 2.5rem;
        color: var(--secondaryColor3);
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: 0.4s;
        margin-right: 20px;

        @media screen and (max-width: 800px) {
          font-size: 1.8rem;
        }
        :hover {
          color: var(--secondaryColor3);
        }
      }
      .icon {
        margin-right: 10px;
        color: var(--secondaryColor);
      }
    }
    ul {
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        align-content: center;

        div {
          flex-grow: 1;
          border-bottom: 1px solid #ddd;
          align-self: flex-end;
          margin: 0 5px 10px;
        }
        span {
          color: var(--secondaryColor3);
          font-weight: 700;
          font-size: 1.2rem;
          @media screen and (max-width: 800px) {
            font-weight: 500;
            font-size: 1.1rem;
          }
        }
      }
    }
  }
  .extraInfo {
    position: absolute;
    bottom: 5%;
    left: 50%;
    display: flex;
    flex-direction: column;
    width: 45vw;
    list-style: none;
    @media screen and (max-width: 800px) {
      position: relative;
      width: 100vw;
      transform: translateX(-50%);
      margin: 8vh auto 10vh;
    }
    li {
      font-weight: 500;
      font-size: 1.15rem;
      @media screen and (max-width: 800px) {
        font-size: 1.1rem;
        font-weight: 400;
        text-align: center;
        width: 90%;
        margin: 0 auto;
      }
      span {
        opacity: 0;
      }
    }
  }
`;

export default AllBikeOffer;
