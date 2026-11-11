import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Cardapio from './components/Cardapio.jsx'
import Sobre from './components/Sobre.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans antialiased dark:bg-stone-950 dark:text-stone-100 transition-colors">
      <Header />
      <main>
        <Hero />
        <Cardapio />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}