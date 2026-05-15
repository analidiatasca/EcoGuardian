import styled from "styled-components";
import playBtn from "../assets/play.png.png";
import learnBtn from "../assets/learn.png.png";

const HeroContainer = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;

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

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
`;

const Botoesp = styled.div`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Botoes = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BotaoImgp = styled.img`
  width: 300px;
  cursor: pointer;
  image-rendering: pixelated;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const BotaoImg = styled.img`
  width: 200px;
  cursor: pointer;
  image-rendering: pixelated;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export function Hero({ imagem, scrollToSobre }) {
  return (
    <HeroContainer>
      <Background src={imagem} />
      <Overlay />

      <Botoesp>
        <BotaoImgp src={playBtn} alt="Play"  onClick={() => window.open("https://www.construct.net/en/free-online-games/ecoguardian-86179/play")}/>
        
      </Botoesp>
      <Botoes>
        <BotaoImg
  src={learnBtn}
  alt="Learn More"
  onClick={scrollToSobre}
/>
      </Botoes>
    </HeroContainer>
  );
}