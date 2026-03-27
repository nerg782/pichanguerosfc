import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Matches from './components/Matches'
import Signup from './components/Signup'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Matches />
        <Signup />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
