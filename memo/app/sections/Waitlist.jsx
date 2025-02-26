import React from 'react'

const Waitlist = () => {
  return (
    <div className='lg:mt-28 mt-20 lg:px-32 px-10 text-center'>
        <h2 className='lg:text-5xl text-4xl text-memop font-poppins font-semibold'>JOIN THE WAITLIST</h2>
        <p className='mt-3 lg:text-lg mb-10'>Memo is launching soon! Be among the first to experience the future of memory-sharing.</p>
        <a href="https://forms.gle/P98oou8ZZXNRRBwh9" target='_blank' className='text-memop lg:text-lg border-memop border-2  py-3 px-10 rounded-full hover:bg-memop hover:text-white hover:shadow-lg shadow-memop transition-all'>Join the waitlist</a>
    </div>
  )
}

export default Waitlist
