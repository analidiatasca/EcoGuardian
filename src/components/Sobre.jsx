import fundoo1 from "../assets/1.png"
import styled from "styled-components";
import fundoo2 from "../assets/2.png"
import fundoo3 from "../assets/3.png"
import fundoo4 from "../assets/4.png"
import fundoo5 from "../assets/5.png"

const Fundo1 = styled.header`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  background-image: url(${props => props.imagem});
  background-size: cover;
  background-position: center;
`;
const Fundo2 = styled.header`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  background-image: url(${props => props.imagem});
  background-size: cover;
  background-position: center;
`;
const Fundo3 = styled.header`
  margin-top: auto;
height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  background-image: url(${props => props.imagem});
  background-size: cover;
  background-position: center;
`;
const Fundo4 = styled.header`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  background-image: url(${props => props.imagem});
  background-size: cover;
  background-position: center;
`;
const Fundo5 = styled.header`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  background-image: url(${props => props.imagem});
  background-size: cover;
  background-position: center;
`;
export function Sobre() {
  return (<>
    <Fundo1 imagem={fundoo1}></Fundo1>
    <Fundo2 imagem={fundoo2}></Fundo2>
    <Fundo3 imagem={fundoo3}></Fundo3>
    <Fundo4 imagem={fundoo4}></Fundo4>
    <Fundo5 imagem={fundoo5}></Fundo5>
    </>
  );
}