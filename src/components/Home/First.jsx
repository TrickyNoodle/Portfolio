import React from 'react'
import { Link } from 'react-router'
const First = () => {
  return (
    <div className='flex not-md:flex-col w-full items-center justify-center [&>div]:mx-4'>
      <div className='w-fit flex-col flex'>
        <h1 className=' font-bold text-3xl [word-spacing:0.5rem] my-2'>Sagar Shinde is a <span className='primarycolor'>Web Developer</span> and a <span className='primarycolor'>Student</span></h1>
        <p className='secondarycolor my-4'>He develops websites where technologies meet creativity</p>
        <Link to='about-me' className=' font-bold border-2 border-[#C778DD] px-4 py-2 text-xs hover:bg-[#8c499fb9] transition-all ease-in-out duration-300 w-fit'>Learn More!!</Link>
      </div>
      <div className='flex flex-col relative'>
        <div className='w-1/3 border-2 border-[#C778DD] h-1/3 absolute top-4'>
          <div className='w-full border-2  border-[#C778DD] h-full absolute top-1/3 left-1/3'></div>
        </div>  
        <div className="grid grid-cols-6 h-1/3 w-1/3 absolute bottom-1/10 right-0 z-20">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-[#ABB2BF] rounded-full"></div>
          ))}
        </div>
        <img src="Image-1.png" alt='Image failed to Display' loading='lazy' className='z-10' />
        <div className='border-1 px-1 py-1 border-[#ABB2BF] w-full text-left secondarycolor flex items-center gap-1 z-30 backdrop-blur-2xl'>
          <div className="w-4 h-4 bg-purple-500 inline-block" />
          <span>Currently Working on <span className='text-white'>Portfolio</span></span>
        </div>
      </div>
    </div>
  )
}

export default First