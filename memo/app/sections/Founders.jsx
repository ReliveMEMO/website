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
    <div className='lg:mt-32 lg:px-32 px-10 mt-16 text-center items-center'>
      <div>
        <h1 className='lg:text-5xl text-3xl text-memop'>Meet our founders</h1>
        <p className='lg:text-lg mt-2 px-5'>Memo is built by a passionate group of young innovators from IIT.</p>
      </div>

      <div ref={ref1} className={`flex lg:flex-row flex-col justify-between lg:space-x-5 space-y-4 items-center lg:mt-16 mt-8 ${inView1 ? 'animate__animated animate__fadeInUp' : ''}`}>
        <a href="https://www.linkedin.com/in/sandinu-pinnawala-b85b2b20a/" className='lg:w-1/3 hover:shadow-lg'><img src="Sandinu.png"  alt="" /></a>
        <a href="https://www.linkedin.com/in/sachin-kulathilaka-064037267/" className='lg:w-1/3 hover:shadow-lg'><img src="Sachin.png"  alt="" /></a>
        <a href="https://www.linkedin.com/in/thisas-ranchagoda-124b82294/" className='lg:w-1/3 hover:shadow-lg'><img src="Thisas.png"  alt="" /></a>
      </div>

      <div ref={ref2} className={`flex lg:flex-row flex-col justify-between lg:space-x-5 space-y-4 items-center lg:mt-16 mt-5 ${inView2 ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''}`}>
        <a href="https://www.linkedin.com/in/malsha-pabodani-jayasinghe-64a805292/" className='lg:w-1/3 hover:shadow-lg'><img src="Malsha.png"  alt="" /></a>
        <a href="https://www.linkedin.com/in/monalisuriarachchi/" className='lg:w-1/3 hover:shadow-lg'><img src="Monali.png"  alt="" /></a>
        <a href="https://www.linkedin.com/in/sadinsa-welagedara-68013b295/" className='lg:w-1/3 hover:shadow-lg'><img src="Sadinsa.png"  alt="" /></a>
      </div>

    </div>
  )
}

export default Founders
