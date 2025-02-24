'use client'
import { CircleCheckBig } from 'lucide-react'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import 'animate.css'

const WhatIs = () => {
  const options = {
    triggerOnce: true,
    threshold: 0.1,
  }

  const { ref: ref1, inView: inView1 } = useInView(options)
  const { ref: ref2, inView: inView2 } = useInView(options)
  const { ref: ref3, inView: inView3 } = useInView(options)
  const { ref: ref4, inView: inView4 } = useInView(options)
  const { ref: ref5, inView: inView5 } = useInView(options)

  return (
    <div className={`mt-16 px-32 flex flex-row align-middle items-center `}>
      <div className='w-1/4'>
        <img src="whatis.png" className='w-full' />
      </div>
      <div className='w-3/4 pl-20'>
        <h1 className='text-5xl text-memop mb-3'>what is memo?</h1>
        <h2 className='text-xl font-medium mb-1'>Memo is your personal time capsule.</h2>
        <h2 className='text-xl font-light'>It’s a collaborative memory-sharing platform that lets you:</h2>
        <div className='mt-5'>
            <h4 ref={ref1} className={`flex space-x-3 text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10 ${inView1 ? 'animate__animated animate__fadeInUp' : ''}`}><CircleCheckBig className='text-memop'/><span className='font-semibold'>Capture & Relive -</span> – Store life’s best moments in interactive timelines.</h4>
            <h4 ref={ref2} className={`flex space-x-3 text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10 ${inView2 ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''}`}><CircleCheckBig className='text-memop'/><span className='font-semibold'>Collaborate -</span> – Build shared memory albums with friends & family.</h4>
            <h4 ref={ref3} className={`flex space-x-3 text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10 ${inView3 ? 'animate__animated animate__fadeInUp animate__delay-2s' : ''}`}><CircleCheckBig className='text-memop'/><span className='font-semibold'>Reconnect -</span> – Reminisce together with memory reminders & group reflections.</h4>
            <h4 ref={ref4} className={`flex space-x-3 text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10 ${inView4 ? 'animate__animated animate__fadeInUp animate__delay-3s' : ''}`}><CircleCheckBig className='text-memop'/><span className='font-semibold'>Showcase Your Story -</span> – Personalize your profile with milestones & achievements.</h4>
            <h4 ref={ref5} className={`flex space-x-3 text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10 ${inView5 ? 'animate__animated animate__fadeInUp animate__delay-4s' : ''}`}><CircleCheckBig className='text-memop'/><span className='font-semibold'>Stay Connected -</span> – Get updates on events, friends’ memories & shared experiences.</h4>
        </div>
      </div>
    </div>
  )
}

export default WhatIs
