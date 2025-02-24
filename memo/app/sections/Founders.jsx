'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import 'animate.css'


const Founders = () => {
    const options = {
        triggerOnce: true,
        threshold: 0.1,
      }
    
      const { ref: ref1, inView: inView1 } = useInView(options)
      const { ref: ref2, inView: inView2 } = useInView(options)

  return (
    <div className='mt-32 px-32 text-center items-center'>
      <div>
        <h1 className='text-5xl text-memop'>Meet our founders</h1>
        <p className='text-lg mt-2'>Memo is built by a passionate group of young innovators from IIT.</p>
      </div>
      <div ref={ref1} className={`flex flex-row justify-between space-x-5 items-center mt-16 ${inView1 ? 'animate__animated animate__fadeInUp' : ''}`}>
        <a href="#" className='w-1/3 hover:shadow-lg'><img src="Sandinu.png"  alt="" /></a>
        <a href="#" className='w-1/3 hover:shadow-lg'><img src="Sachin.png"  alt="" /></a>
        <a href="#" className='w-1/3 hover:shadow-lg'><img src="Thisas.png"  alt="" /></a>
      </div>
      <div ref={ref2} className={`flex flex-row justify-between space-x-5 items-center mt-8 ${inView2 ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''}`}>
        <a href="#" className='w-1/3 hover:shadow-lg'><img src="Malsha.png"  alt="" /></a>
        <a href="#" className='w-1/3 hover:shadow-lg'><img src="Monali.png"  alt="" /></a>
        <a href="#" className='w-1/3 hover:shadow-lg'><img src="Sadinsa.png"  alt="" /></a>
      </div>
    </div>
  )
}

export default Founders
