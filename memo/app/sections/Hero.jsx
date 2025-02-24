import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-row align-middle h-[100vh] items-center justify-between pl-32'>
      <div className='w-1/2 mt-10'>
        <h1 className='text-7xl text-memop font-poppins font-light leading-tight'>Your Memories,<br />Your Timeline.<br /><span className='font-medium text-8xl'>Forever</span></h1>
        <p className='w-2/3 text-sm mt-6 mb-8'>Relive your best moments with the people who made them unforgettable! Create vibrant timelines, revisit cherished experiences, and stay effortlessly connected.</p>
        <a href="#" className='text-memop border-memop border-2  py-3 px-10 rounded-full hover:bg-memop hover:text-white hover:shadow-lg shadow-memop transition-all'>Join the waitlist</a>
      </div>
      <div><img src="hero.png" className='w-[850px] mt-32' alt="Hero Image" /></div>
    </div>
  )
}

export default Hero
