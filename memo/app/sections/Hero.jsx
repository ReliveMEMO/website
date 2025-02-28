import React from 'react'

const Hero = () => {
  return (
    <div className='flex lg:flex-row flex-col align-middle h-[100vh] w-[100vw] lg:w-auto overflow-hidden lg:justify-start items-center justify-center pl-0 lg:pl-32'>
      <div className='lg:w-1/2 lg:mt-10 mt-10 px-10 lg:px-0 items-center lg:items-start flex flex-col'>
        <h1 className='lg:text-7xl text-4xl text-center lg:text-start text-memop font-poppins font-light leading-tight'>Your Memories,<br />Your Timeline<br /><span className='font-medium lg:text-8xl text-7xl'>Forever</span></h1>
        <p className='lg:w-2/3 text-sm lg:text-start text-center mt-6 lg:mb-8 mb-6'>Relive your best moments with the people who made them unforgettable! Create vibrant timelines, revisit cherished experiences, and stay effortlessly connected.</p>
        <a href="https://forms.gle/P98oou8ZZXNRRBwh9" target='_blank' className='text-memop border-memop border-2  py-3 px-10 rounded-full hover:bg-memop hover:text-white hover:shadow-lg shadow-memop transition-all'>Join the waitlist</a>
      </div>
      <div><img src="hero.png" className='lg:w-[850px] w-[400px] lg:mt-32 mt-10 translate-x-5' alt="Hero Image" /></div>
    </div>
  )
}

export default Hero
