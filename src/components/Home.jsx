import Intro from './Intro'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'

function Home() {
  return (
    <div
      style={{
        backgroundColor: '#111827',
        backgroundImage:
          "url('data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23929bac' fill-opacity='0.32' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E')",
      }}
    >
      <Navbar />
      <Intro />
      <div className='h-0.5 w-full bg-cyan-900 '></div>
      <Skills />
      <div className='h-0.5 w-full bg-cyan-900'></div>
      <Projects />
    </div>
  )
}

export default Home
