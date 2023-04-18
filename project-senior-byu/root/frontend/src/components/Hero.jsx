import React from 'react'
import {RiPlayFill} from "react-icons/ri";

const Hero = () => {
  return (
    <section className="h-screen md:h-[90vh] grid grid-cols-1 md:grid-cols-8">
  {/* Info */}
  <div className="md:col-span-5 flex flex-col justify-center items-center md:items-start p-4 md:p-16">
    <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
      We help you prepare for your professional <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block">success</span>
    </h1>
    <p className="text-gray-500 text-xl md:text-2xl leading-relaxed text-center md:text-left mt-8">
      Help find the exact courses and university classes you need to take in order to be successful in your field. Through great content and wonderful teachers, we will help you in every single step you take!
    </p>
    <div className="flex flex-col md:flex-row items-center gap-4">
      <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">Let's begin!</button>
      <button className="w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl">
        <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content"/>
        <span>Watch our introduction video</span>
      </button>
    </div>
  </div>
  {/* Image */}
  <div className="md:col-span-3 flex items-center justify-center relative">
  <div className="max-w-[450px] mx-auto">
    <img src="pageImg.png" alt="img" className="xl:w-full xl:object-cover p-5" />
</div>
</div>

</section>

  )
}

export default Hero