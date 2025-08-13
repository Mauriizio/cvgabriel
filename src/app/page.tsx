// src/app/page.tsx

import Hero from "./components/Hero";
import Bienvenidos from "./components/Bienvenidos";
import Servicios from "./components/Servicios";
import FormacionProfesional from "./components/FormacionProfesional";
import Prl from "./components/Prl";
import CompetenciasDigitales from "./components/CompetenciasDigitales";


export default function Home() {
  return (
    <main>
      
      <Hero />
      <Bienvenidos />
      <Servicios />
      <FormacionProfesional />
      <Prl />
      <CompetenciasDigitales />
    
    </main>
  );
}
