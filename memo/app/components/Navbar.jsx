'use client'
import React from 'react'

const Navbar = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='flex flex-row py-8 px-32 justify-between items-center fixed top-0 w-full backdrop-blur-md'>
      <div>
        <a href="#"><img src="Logo.png" className='w-40' alt="" /></a>
      </div>
      <div>
        <ul className='flex space-x-10 text-memop'>
          <a href="#what" onClick={handleScroll}>
            <li className='cursor-pointer hover:underline transition-all underline-offset-8 hover:text-memob'>what is memo</li>
          </a>
          <a href="#features" onClick={handleScroll}>
          <li className='cursor-pointer hover:underline transition-all underline-offset-8 hover:text-memob'>features</li>
          </a>
          <li className='cursor-pointer hover:underline transition-all underline-offset-8 hover:text-memob'>meet the founders</li>
        </ul>
      </div>
      <div className=''>
        <a href="#" className='text-memop border-memop border-2 py-3 px-10 rounded-full hover:bg-memop hover:text-white hover:shadow-lg shadow-memop transition-all'>Join the waitlist</a>
      </div>
    </div>
  )
}

export default Navbar
