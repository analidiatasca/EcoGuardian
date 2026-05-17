import styled from "styled-components";

import fundoDesktop1 from "../assets/1.png";
import fundoDesktop2 from "../assets/2.png";
import fundoDesktop3 from "../assets/3.png";
import fundoDesktop4 from "../assets/4.png";
import fundoDesktop5 from "../assets/5.png";

import fundoMobile1 from "../assets/1cel.png";
import fundoMobile2 from "../assets/2cel.png";
import fundoMobile3 from "../assets/3cel.png";
import fundoMobile4 from "../assets/4cel.png";
import fundoMobile5 from "../assets/5cel.png";

const Fundo = styled.header`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  background-image: url(${props => props.desktop});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    background-image: url(${props => props.mobile});
  }
`;

export function Sobre() {
  return (
    <>
      <Fundo desktop={fundoDesktop1} mobile={fundoMobile1} />
      <Fundo desktop={fundoDesktop2} mobile={fundoMobile2} />
      <Fundo desktop={fundoDesktop3} mobile={fundoMobile3} />
      <Fundo desktop={fundoDesktop4} mobile={fundoMobile4} />
      <Fundo desktop={fundoDesktop5} mobile={fundoMobile5} />
    </>
  );
}