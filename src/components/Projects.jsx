import Card from './Card'

function Projects() {
  return (
    <div className='hero py-8'>
      <div className='hero-content'>
        <div className='max-w-max'>
          <h1 className='mb-5 text-5xl font-bold text-center mb-12'>
            Projects
          </h1>
          <div className='grid grid-cols-3 gap-4'>
            <Card
              title='Github Finder'
              description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore illum voluptates quibusdam earum cum sit?.'
            />
            <Card
              title='Github Finder'
              description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore illum voluptates quibusdam earum cum sit?.'
            />
            <Card
              title='Github Finder'
              description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore illum voluptates quibusdam earum cum sit?.'
            />
            <Card
              title='Github Finder'
              description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore illum voluptates quibusdam earum cum sit?.'
            />
            <Card
              title='Github Finder'
              description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore illum voluptates quibusdam earum cum sit?.'
            />
            <Card
              title='Github Finder'
              description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore illum voluptates quibusdam earum cum sit?'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
