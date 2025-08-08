import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Bienvenidos from './components/Bienvenidos'  
import SobreMi from './components/SobreMi'
import FilosofiaDocente from './components/FilosofiaDocente'
import FormacionProfesional from './components/FormacionProfesional'

export default function Home() {
  return (
    <main className="">
      <Navigation />
      <Hero />
      <Bienvenidos />
      <SobreMi />
      <FilosofiaDocente />
      <FormacionProfesional />
      
    </main>
  )
}
