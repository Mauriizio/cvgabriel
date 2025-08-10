import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Bienvenidos from './components/Bienvenidos'  
import SobreMi from './components/SobreMi'
import FilosofiaDocente from './components/FilosofiaDocente'
import Servicios from './components/Servicios'
import FormacionProfesional from './components/FormacionProfesional'
import Prl from './components/Prl'
import CompetenciasDigitales from './components/CompetenciasDigitales'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="">
      <Navigation />
      <Hero />
      <Bienvenidos />
      <SobreMi />
      <FilosofiaDocente />
      <Servicios />  
      <FormacionProfesional />
      <Prl />
      <CompetenciasDigitales />
      <Testimonios />
      <Contacto />
      <Footer />
      
    </main>
  )
}
