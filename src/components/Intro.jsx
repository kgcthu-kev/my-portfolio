function Intro() {
  return (
    <div className='hero min-h-screen'>
      <div className='text-center hero-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>

          <p className='mb-5 text-lg'>
            I am{' '}
            <span className='underline underline-offset-1 decoration-cyan-600'>
              Kaung Si Thu
            </span>
            . I'm a self-taught frontend developer based in Yangon, Myanmar. My
            goal is to create engaging experiences for users, with a fine
            balance of technology and design
          </p>
          <button className='btn btn-neutral mr-4'>
            <a href='mailto:kgcthu.kev@gmail.com'>Email Me</a>
          </button>
          <button className='btn bg-cyan-700 hover:bg-cyan-900'>
            <a
              href='https://docs.google.com/document/d/e/2PACX-1vTAuP-izYaRdQlQ6vboFuwDqzweqygaxed1k_DHjEFfNGo3Ri7j0eZ7rbodyLCUtPgtb-gRFI5aIWAr/pub'
              target='_blank'
              rel='noreferrer'
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Intro
