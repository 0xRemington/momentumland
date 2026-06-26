import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Communities from './components/Communities.jsx'
import Approach from './components/Approach.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="site">
      <Nav />
      <Hero />
      <Communities />
      <Approach />
      <About />
      <Contact />
    </div>
  )
}
