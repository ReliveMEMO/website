'use client'
import { AlignRight } from 'lucide-react';
import React, { useState } from 'react'

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);


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
    <div>
      <div className=' hidden lg:flex flex-row py-8 px-32 justify-between items-center fixed top-0 w-full backdrop-blur-md z-40 bg-white/70'>
        <div>
          <a href="#Hero" onClick={handleScroll}><img src="Logo.png" className='w-40' alt="" /></a>
        </div>
        <div>
          <ul className='flex space-x-10 text-memop'>
            <a href="#what" onClick={handleScroll}>
              <li className='cursor-pointer hover:underline transition-all underline-offset-8 hover:text-memob'>what is memo</li>
            </a>
            <a href="#features" onClick={handleScroll}>
              <li className='cursor-pointer hover:underline transition-all underline-offset-8 hover:text-memob'>features</li>
            </a>
            <a href="#founders" onClick={handleScroll}>
              <li className='cursor-pointer hover:underline transition-all underline-offset-8 hover:text-memob'>meet the founders</li>
            </a>
          </ul>
        </div>
        <div className=''>
          <a href="https://forms.gle/P98oou8ZZXNRRBwh9" target='_blank' className='text-memop border-memop border-2 py-3 px-10 rounded-full hover:bg-memop hover:text-white hover:shadow-lg shadow-memop transition-all'>Join the waitlist</a>
        </div>
      </div>
      <div className='z-50 lg:hidden fixed top-8 right-5 text-memop'>
        <AlignRight onClick={() => setNavBar(!navBar)}/>
      </div>


      <div className={` fixed z-40 bg-white w-screen h-screen items-center justify-center text-center flex flex-col text-white space-y-20 ${navBar ? 'translate-x-0' : 'translate-x-full'} lg:hidden transition-all`}>
        <div >
          <a href="#Hero" onClick={handleScroll}><img src="Logo.png" className='w-40' alt="" /></a>
        </div>
        <div className=''>
          <ul className='flex flex-col space-y-10  text-memop text-2xl'>
            <a href="#what" onClick={handleScroll}>
              <li className='cursor-pointer hover:underline transition-all underline-offset-8 hover:text-memob'>what is memo</li>
            </a>
            <a href="#features" onClick={handleScroll}>
              <li className='cursor-pointer hover:underline transition-all underline-offset-8 hover:text-memob'>features</li>
            </a>
            <a href="#founders" onClick={handleScroll}>
              <li className='cursor-pointer hover:underline transition-all underline-offset-8 hover:text-memob'>meet the founders</li>
            </a>
          </ul>
        </div>
        <div className=''>
          <a href="https://forms.gle/P98oou8ZZXNRRBwh9" target='_blank' className='text-memop border-memop border-2 py-3 px-10 rounded-full hover:bg-memop text-xl hover:text-white hover:shadow-lg shadow-memop transition-all'>Join the waitlist</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
