import Card from './Card'

function Projects() {
  return (
    <div className='hero py-8'>
      <div className='hero-content'>
        <div className='max-w-max'>
          <h1 className='text-5xl font-bold text-center mb-12'>Projects</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Card
              title='Quote Generator'
              description='HTML,CSS,Javascript used. Fetch random quotes from the api and displays it to users.'
              link='https://inspiring-wiles-8a6919.netlify.app/'
              repo='https://github.com/kgcthu-kev/quote-generator'
            />

            <Card
              title='NewsGrid'
              description='HTML and CSS used. Beautiful grid layout news website.'
              link='https://frosty-noether-ef179b.netlify.app/'
              repo='https://github.com/kgcthu-kev/newsgrid-website'
            />
            <Card
              title='Github Finder'
              description='Tailwind CSS and React JS used. Allows users to search and view other github users.'
              link='https://github-finder-six-rouge.vercel.app/'
              repo='https://github.com/kgcthu-kev/github-finder'
            />
            <Card
              title='Real State App - House Finder'
              description='Next.js and ChakraUI mainly used. Allows users to choose between buying and renting houses and filter search.'
              link='https://realtor-real-estate.vercel.app/'
              repo='https://github.com/kgcthu-kev/nextJS-house-app'
            />
            <Card
              title='Hulu Clone'
              description='Hulu Clone is a Movie app where you can search and filter your favourite genres. Built with Next.js and TailwindCSS'
              link='https://yokeshin-app.vercel.app/'
              repo='https://github.com/kgcthu-kev/yokeshin-app'
            />
            <Card
              title='Fashionify | Clothes Store'
              description='This is the coding test project that I built within 4 days. I used react.js and bootstrap/react-boostrap for styling of this app. Users can choose their favourite item and add to the list.'
              link='hhttps://clothes-store-iota.vercel.app/'
              repo='https://github.com/kgcthu-kev/clothes-store.git'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
