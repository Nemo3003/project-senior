import React from 'react'
import {RiPlayFill} from "react-icons/ri";

const Hero = () => {
  return (
    <section className=' h-[90vh] grid grid-cols-1 md:grid-cols-8 p-12'>
      {/*Info*/}
      <div className=' md:col-span-5 flex items-center justify-center'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-7xl font-bold leading-[7.5rem]'>
            We help you prepare for your professional 
            <span className='text-primary py-2 px-6 border-8 border-primary relative'>success</span>
            </h1>
          <p className='text-gray-500 text-2xl leading-[2rem]'>
            Help find the exact courses and university classes you need to take in order to be successful in your field. 
            Through great content and wonderful teachers, we will help you in every single step you take!</p>
          <div className='flex items-center gap-8'>
            <button className='bg-primary text-white py-2 px-6 rounded-xl text-2xl'>Let's begin!</button>
            <button className='flex items-center gap-4 py-2 px-8 rounded-xl text-xl text-left'>
              <RiPlayFill className='bg-secondary text-primary p-4 box-content rounded-full'/> Watch our <br/> introduction video
            </button>
          </div>
        </div>
      </div>
      <div className='md:col-span-3'>
        <img src="pageImg.png" alt="img" />
      </div>
    </section>
  )
}

export default Hero