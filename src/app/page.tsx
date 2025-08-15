// src/app/page.tsx

import Hero from "./components/Hero";
import Bienvenidos from "./components/Bienvenidos";
import Servicios from "./components/Servicios";
import FormacionProfesional from "./components/FormacionProfesional";
import Prl from "./components/Prl";
import CompetenciasDigitales from "./components/CompetenciasDigitales";
import CarouselAcademico from "./components/CarouselAcademico";
import QrCard from "./components/QrCard"; 

export default function Home() {
  return (
    <main>
      
      <Hero />
      <Bienvenidos />
      <Servicios />
      <CarouselAcademico profileUrl="https://ghformacion.com" />
      <FormacionProfesional />
      <Prl />
      <CompetenciasDigitales />
      
    
    </main>
  );
}
