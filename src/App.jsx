import { Hero } from "./components/Hero";
import heroimg from "./assets/fundo.png";
import { Sobre } from "./components/Sobre";
import { useRef } from "react";
export function App() {
   const sobreRef = useRef(null);

  function scrollToSobre() {
    if (sobreRef.current) {
      sobreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return(
    <>
    
    <Hero imagem={heroimg} scrollToSobre={scrollToSobre} ></Hero>

      {/* 👇 IMPORTANTE: ref direto no elemento HTML */}
      <div ref={sobreRef}>

      
    <Sobre />
    </div>
    </>
  )
}