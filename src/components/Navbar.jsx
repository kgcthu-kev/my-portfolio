import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar shadow-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 text-neutral-content'>
      <div className='flex-none px-2 mx-2'>
        <span className='text-lg font-bold'>KST</span>
      </div>
      <div className='flex-1 px-2 mx-2 navbar-end'>
        <div className='items-stretch hidden lg:flex'>
          <Link className='btn btn-ghost btn-sm rounded-btn ' to='/'>
            Home
          </Link>
          <Link className='btn btn-ghost btn-sm rounded-btn' to='/'>
            Portfolio
          </Link>
          <Link className='btn btn-ghost btn-sm rounded-btn' to='/'>
            About
          </Link>
          <Link className='btn btn-ghost btn-sm rounded-btn' to='/'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
