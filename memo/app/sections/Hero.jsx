import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-row align-middle h-[100vh] items-center justify-between pl-20'>
      <div className='text-6xl'><h1>Your Memories,<br />Your Timeline.<br />Forever</h1></div>
      <div><img src="hero.png" className='w-[750px] mt-36' alt="Hero Image" /></div>
    </div>
  )
}

export default Hero
