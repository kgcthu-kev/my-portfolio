import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='navbar shadow-lg text-white px-5'>
      <div className='flex-none px-2 mx-2'>
        <a
          href='https://www.instagram.com/kgcthu/'
          className='text-lg font-bold'
          target='_blank'
          rel='noreferrer'
        >
          kgcthu
        </a>
      </div>
      <div className='flex-1 px-2 mx-2 navbar-end'>
        <div className='items-stretch flex'>
          <a
            href='https://github.com/kgcthu-kev/'
            target='_blank'
            rel='noreferrer'
            className='btn btn-ghost btn-md rounded-btn'
          >
            <FaGithub className='h-6 w-6' />
          </a>
          <a
            href='https://twitter.com/kgcthu'
            target='_blank'
            rel='noreferrer'
            className='btn btn-ghost btn-md rounded-btn'
          >
            <FaTwitter className='h-6 w-6' />
          </a>
          <a
            href='https://www.linkedin.com/in/kaung-si-thu-518759224/'
            target='_blank'
            rel='noreferrer'
            className='btn btn-ghost btn-md rounded-btn'
          >
            <FaLinkedinIn className='h-6 w-6' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
