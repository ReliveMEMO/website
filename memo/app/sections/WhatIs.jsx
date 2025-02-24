import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const WhatIs = () => {
  return (
    <div className='mt-16 px-32 flex flex-row align-middle items-center'>
      <div className='w-1/4'>
        <img src="whatis.png" className='w-full' />
      </div>
      <div className='w-3/4 pl-20'>
        <h1 className='text-5xl text-memop mb-3'>what is memo?</h1>
        <h2 className='text-xl font-medium mb-1'>Memo is your personal time capsule.</h2>
        <h2 className='text-xl font-light'>It’s a collaborative memory-sharing platform that lets you:</h2>
        <div className='mt-5'>
            <h4 className='flex space-x-3 text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10'><CircleCheckBig className='text-memop'/><span className='font-semibold'>Capture & Relive -</span> – Store life’s best moments in interactive timelines.</h4>
            <h4 className='flex space-x-3 text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10'><CircleCheckBig className='text-memop'/><span className='font-semibold'>Collaborate -</span> – Build shared memory albums with friends & family.</h4>
            <h4 className='flex space-x-3 text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10'><CircleCheckBig className='text-memop'/><span className='font-semibold'>Reconnect -</span> – Reminisce together with memory reminders & group reflections.</h4>
            <h4 className='flex space-x-3 text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10'><CircleCheckBig className='text-memop'/><span className='font-semibold'>Showcase Your Story -</span> – Personalize your profile with milestones & achievements.</h4>
            <h4 className='flex space-x-3 text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10'><CircleCheckBig className='text-memop'/><span className='font-semibold'>Stay Connected -</span> – Get updates on events, friends’ memories & shared experiences.</h4>
        </div>
      </div>
    </div>
  )
}

export default WhatIs
