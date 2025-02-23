import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row py-10 px-24 justify-between items-center fixed top-0 w-full backdrop-blur-md'>
      <div>
        <a href="#"><img src="Logo.png" className='w-40' alt="" /></a>
      </div>
      <div>
        <ul className='flex space-x-10 text-memop'>
          <li className='cursor-pointer hover:underline transition-all underline-offset-8 hover:text-memob'>what is memo</li>
          <li className='cursor-pointer hover:underline transition-all underline-offset-8 hover:text-memob'>features</li>
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
