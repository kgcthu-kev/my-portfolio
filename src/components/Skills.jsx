import { FaHtml5, FaCss3, FaJsSquare, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

function Skills() {
  return (
    <div className='hero py-8'>
      <div className='text-center hero-content'>
        <div className='max-w-max'>
          <h1 className='mb-5 text-5xl font-bold my-5'>Skills</h1>
          <div className='grid lg:grid-cols-5 md:grid-cols-5 grid-cols-2 lg:gap-6 gap-3'>
            <div className='flex justify-center align-center block p-6 max-w-sm rounded-full border border-gray-200 shadow-lg bg-gray-800 border-gray-800 hover:bg-cyan-700'>
              <FaHtml5 className='h-9 w-8' />
            </div>
            <div className='flex justify-center align-center block p-6 max-w-sm rounded-full border border-gray-200 shadow-lg bg-gray-800 border-gray-800 hover:bg-cyan-700'>
              <FaCss3 className='h-9 w-8' />
            </div>
            <div className='flex justify-center align-center block p-6 max-w-sm rounded-full border border-gray-200 shadow-lg bg-gray-800 border-gray-800 hover:bg-cyan-700'>
              <FaJsSquare className='h-9 w-8' />
            </div>
            <div className='flex justify-center align-center block p-6 max-w-sm rounded-full border border-gray-200 shadow-lg bg-gray-800 border-gray-800 hover:bg-cyan-700'>
              <FaReact className='h-9 w-8' />
            </div>
            <div className='flex justify-center align-center block p-6 max-w-sm rounded-full border border-gray-200 shadow-lg bg-gray-800 border-gray-800 hover:bg-cyan-700'>
              <SiTailwindcss className='h-9 w-8' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
