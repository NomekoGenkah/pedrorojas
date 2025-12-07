import { Quickbar } from './components/Quickbar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import pedroImage from './assets/pedro.png'
import './App.css'

function App() {
  return (
    <>
      <Quickbar />
      <div className="portfolio-layout">
        <aside className="portfolio-image">
          <img src={pedroImage} alt="Pedro" />
        </aside>
        <main className="portfolio-content">
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
