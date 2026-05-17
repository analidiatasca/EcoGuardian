import { useState, useEffect } from "react";
import styled from "styled-components";

import playBtn from "../assets/play.png.png";
import learnBtn from "../assets/learn.png.png";

import imagemDesktop from "../assets/fundo.png";
import imagemMobile from "../assets/fundocel.png";

/* CONTAINER PRINCIPAL */
const HeroContainer = styled.section`
  height: 100dvh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

/* BACKGROUND */
const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  image-rendering: pixelated;

  animation: zoom 20s ease-in-out infinite alternate;

  @keyframes zoom {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.02);
    }
  }
`;

/* ESCURECIMENTO */
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.6)
  );
`;

/* BOTÕES */
const ButtonsContainer = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
`;

/* BOTÃO PLAY */
const PlayButton = styled.img`
  width: 300px;
  max-width: 80%;
  margin: -100px;
  cursor: pointer;

  image-rendering: pixelated;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 220px;
  }
`;

/* BOTÃO LEARN */
const LearnButton = styled.img`
  width: 200px;
  max-width: 70%;
  margin: 60px;
  cursor: pointer;

  image-rendering: pixelated;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 160px;
  }
`;

export function Hero({ scrollToSobre }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeroContainer>
      <Background
        src={isMobile ? imagemMobile : imagemDesktop}
        alt="Background"
      />

      <Overlay />

      <ButtonsContainer>
        <PlayButton
          src={playBtn}
          alt="Play"
          onClick={() =>
            window.open(
              "https://www.construct.net/en/free-online-games/ecoguardian-86179/play"
            )
          }
        />

        <LearnButton
          src={learnBtn}
          alt="Learn More"
          onClick={scrollToSobre}
        />
      </ButtonsContainer>
    </HeroContainer>
  );
}