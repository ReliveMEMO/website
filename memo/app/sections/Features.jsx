import React from 'react'

const Features = () => {
  return (
    <div className='mt-32 px-32'>
      <div className='items-center text-center flex'>
        <div className='w-1/3 py-16 bg-memop/5 hover:bg-memop/20 min-h-64 max-h-64'>
            <h1 className='text-3xl mb-2 text-memop font-poppins font-semibold'>Memory <br /> Reminders</h1>
            <p className='px-16'>Get nostalgic with reminders of shared moments from the past.</p>
        </div>
        <div className='w-1/3 py-16 bg-memop/10 hover:bg-memop/20 min-h-64 max-h-64'>
            <h1 className='text-3xl mb-2 text-memop font-poppins font-semibold'>Group Memory<br /> Sharing</h1>
            <p className='px-16'>Create and contribute to shared timelines with your circle.</p>
        </div>
        <div className='w-1/3 py-16  bg-memop/5 hover:bg-memop/20 min-h-64 max-h-64'>
            <h1 className='text-3xl mb-2 text-memop font-poppins font-semibold'>Personalized<br />Profiles</h1>
            <p className='px-16'>Showcase your bio, achievements, and the moments that shaped you.</p>
        </div>
      </div>

      <div className='items-center text-center flex'>
        <div className='w-1/3 py-16 bg-memop/10 hover:bg-memop/20 min-h-64 max-h-64'>
            <h1 className='text-3xl mb-2 text-memop font-poppins font-semibold'>Event<br /> Updates</h1>
            <p className='px-16'>Never miss out on the reunions, meetups, or campus events that matter to you.</p>
        </div>
        <div className='w-1/3 py-16 bg-memop/5 hover:bg-memop/20 min-h-64 max-h-64'>
            <h1 className='text-3xl mb-2 text-memop font-poppins font-semibold'>Messaging &<br /> Reactions</h1>
            <p className='px-16'>Connect with friends, react to memories, and keep the conversations alive.</p>
        </div>
        <div className='w-1/3 py-16  bg-memop/10 hover:bg-memop/20 min-h-64 max-h-64'>
            <h1 className='text-3xl mb-2 text-memop font-poppins font-semibold'>More Than Just a<br />Social Network</h1>
            <p className='px-16'>It’s a time machine for your life’s most cherished memories.</p>
        </div>
      </div>
    </div>
  )
}

export default Features
