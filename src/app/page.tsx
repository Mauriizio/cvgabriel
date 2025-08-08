import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Bienvenidos from './components/Bienvenidos'  
import SobreMi from './components/SobreMi'

export default function Home() {
  return (
    <main className="">
      <Navigation />
      <Hero />
      <Bienvenidos />
      <SobreMi />
      
    </main>
  )
}
