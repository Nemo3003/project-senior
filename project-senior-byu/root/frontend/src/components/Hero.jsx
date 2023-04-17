import React from 'react'

const Hero = () => {
  return (
    <section className=' h-[90vh] grid grid-cols-1 md:grid-cols-8 p-8'>
      {/*Info*/}
      <div className=' md:col-span-5 flex items-center justify-center'>
        <div>
          <h1 className='text-7xl font-bold'>
            We help you prepare for your professional 
            <span className='text-primary p-2 border-8 border-primary relative'>success</span>
            </h1>
          <p>Description</p>
          <button>Button</button>
        </div>
      </div>
      <div className='bg-red-600 md:col-span-3'>Image</div>
    </section>
  )
}

export default Hero