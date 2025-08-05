import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Bienvenidos from './components/Bienvenidos'  

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navigation />
      <Hero />
      <Bienvenidos />
    </main>
  )
}