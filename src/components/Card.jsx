import { FaGithub } from 'react-icons/fa'

function Card({ title, description }) {
  return (
    <div className='card lg:card-side card-bordered'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <div className='card-actions'>
          <button className='btn bg-cyan-700 hover:bg-cyan-900'>
            Live Demo
          </button>
          <button className='btn btn-ghost'>
            <FaGithub className='mr-2' /> Repo
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
