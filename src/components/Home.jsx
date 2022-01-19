import Intro from './Intro'
import Navbar from './Navbar'
import Projects from './Projects'

function Home() {
  return (
    <div
      style={{
        backgroundColor: '#111827',
      }}
    >
      <Navbar />
      <Intro />
      <Projects />
    </div>
  )
}

export default Home
