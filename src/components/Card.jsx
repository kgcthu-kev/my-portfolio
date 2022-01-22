function Card({ title, description, link, repo }) {
  return (
    <div className='p-6 max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 duration-300'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
        {title}
      </h5>
      <p className='mb-3 font-normal text-gray-400'>{description}</p>
      <button className='btn bg-cyan-700 hover:bg-cyan-900 mr-3'>
        <a href={link} target='_blank' rel='noreferrer'>
          Live Demo
        </a>
      </button>
      <button className='btn btn-ghost'>
        <a href={repo} target='_blank' rel='noreferrer'>
          Repository
        </a>
      </button>
    </div>
  )
}

export default Card
