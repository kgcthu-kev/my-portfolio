import Intro from './Intro'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'
import ScatterForcefields from '../img/scattered-forcefields.svg'

function Home() {
  return (
    <div
      style={{
        backgroundColor: '#111827',
      }}
    >
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home
