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
    <div className={`mt-16 lg:px-32 px-5 flex lg:flex-row flex-col align-middle items-center `}>
      <div className='lg:w-1/4 w-1/2'>
        <img src="whatis.png" className='w-full' />
      </div>
      <div className='lg:w-3/4 w-full lg:pl-20 px-5 mt-5 lg:mt-0'>
        <h1 className='lg:text-5xl text-4xl text-memop mb-3 lg:text-start text-center'>what is memo?</h1>
        <h2 className='lg:text-xl  text-center lg:text-start font-medium mb-1'>Memo is your personal time capsule.</h2>
        <h2 className='lg:text-xl text-center lg:text-start font-light'>It’s a collaborative memory-sharing platform that lets you:</h2>
        
        <div className='mt-5'>
            <h4 ref={ref1} className={`flex flex-col lg:flex-row text-center lg:text-start space-x-3 lg:text-base text-sm text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10 ${inView1 ? 'animate__animated animate__fadeInUp' : ''}`}><CircleCheckBig className='text-memop hidden lg:flex'/><span className='font-semibold lg:flex'>Capture & Relive <span className='hidden lg:flex mr-2'>-</span></span>  Store life’s best moments in interactive timelines.</h4>
            
            <h4 ref={ref2} className={`flex flex-col lg:flex-row text-center lg:text-start lg:text-base text-sm space-x-3 text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10 ${inView2 ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''}`}><CircleCheckBig className='text-memop hidden lg:flex'/><span className='font-semibold lg:flex'>Collaborate <span className='hidden lg:flex mr-2'>-</span></span>  Build shared memory albums with friends & family.</h4>
            
            <h4 ref={ref3} className={`flex flex-col lg:flex-row text-center lg:text-start lg:text-base text-sm space-x-3 text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10 ${inView3 ? 'animate__animated animate__fadeInUp animate__delay-2s' : ''}`}><CircleCheckBig className='text-memop hidden lg:flex'/><span className='font-semibold lg:flex'>Reconnect <span className='hidden lg:flex mr-2'>-</span></span>  Reminisce together with memory reminders & group reflections.</h4>
            
            <h4 ref={ref4} className={`flex flex-col lg:flex-row text-center lg:text-start lg:text-base text-sm space-x-3 text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10 ${inView4 ? 'animate__animated animate__fadeInUp animate__delay-3s' : ''}`}><CircleCheckBig className='text-memop hidden lg:flex'/><span className='font-semibold lg:flex'>Showcase Your Story <span className='hidden lg:flex mr-2'>-</span></span>  Personalize your profile with milestones & achievements.</h4>
            
            <h4 ref={ref5} className={`flex flex-col lg:flex-row text-center lg:text-start lg:text-base text-sm space-x-3 text-gray-700 bg-memop/5 rounded-2xl px-5 py-3 my-4 hover:bg-memop/10 ${inView5 ? 'animate__animated animate__fadeInUp animate__delay-4s' : ''}`}><CircleCheckBig className='text-memop hidden lg:flex'/><span className='font-semibold lg:flex'>Stay Connected <span className='hidden lg:flex mr-2'>-</span></span>  Get updates on events, friends’ memories & shared experiences.</h4>

        </div>
      </div>
    </div>
  )
}

export default WhatIs
