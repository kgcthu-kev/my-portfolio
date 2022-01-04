function Home() {
  return (
    <div>
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1640768239132-4a0c74249b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='text-center hero-content text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
            <p className='mb-5'>
              I am Kaung Si Thu. I'm a self-taught frontend developer based in
              Yangon, Myanmar. My goal is to create engaging experiences for
              users, with a fine balance of technology and design
            </p>
            <button className='btn btn-neutral mr-4'>Contact Me</button>
            <button className='btn btn-primary'>Resume</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
