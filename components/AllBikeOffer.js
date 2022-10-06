import styled from "styled-components";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const amortyzatoryImg = "/images/bikeService/bike/amortyzatory.png";
const calyImg = "/images/bikeService/bike/caly.png";
const hamulceImg = "/images/bikeService/bike/hamulce.png";
const kolaImg = "/images/bikeService/bike/kola.png";
const mainImg = "/images/bikeService/bike/main.png";
const napedImg = "/images/bikeService/bike/naped.png";
const sterowanieImg = "/images/bikeService/bike/sterowanie.png";

const AllBikeOffer = ({ setShowAllBikeOffer }) => {
  const [bikeImage, setBikeImage] = useState(mainImg);

  const handleClose = () => {
    setShowAllBikeOffer(false);
    setBikeImage(mainImg);
  };

  return (
    <Wrapper>
      <IoClose className="closeIcon" onClick={handleClose} />
      <img src={bikeImage} alt="rower" className="bikeImg" />
      <div className="category" onClick={() => setBikeImage(napedImg)}>
        <h3>Napęd</h3>
      </div>
      <div className="category" onClick={() => setBikeImage(kolaImg)}>
        <h3>Koła</h3>
      </div>
      <div className="category" onClick={() => setBikeImage(amortyzatoryImg)}>
        <h3>Amortyzacja</h3>
      </div>
      <div className="category" onClick={() => setBikeImage(hamulceImg)}>
        <h3>Hamulce</h3>
      </div>
      <div className="category" onClick={() => setBikeImage(sterowanieImg)}>
        <h3>Układ Sterowania</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--bikeBg);
  z-index: 999999999999999;
  .closeIcon {
    position: absolute;
    top: 5vh;
    left: 50%;
    transform: translateX(-50%);
    font-size: 4rem;
    color: var(--navLinkColorHover);
    cursor: pointer;
    transition: 0.4s;
    :hover {
      color: var(--secondaryColor);
    }
  }
  .bikeImg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vw;
  }
  .category {
    color: #222;
  }
`;

export default AllBikeOffer;
