import React from 'react'
import { BiRightArrow, BiRightArrowAlt, BiSolidRightArrow, BiSolidRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router'
const Aboutme = () => {
  return (
    <div className='flex w-full not-md:flex-col'>
      <div className='flex w-full flex-col gap-8 secondarycolor'>
        <div className=' flex w-full items-center'>
          <span className='font-bold text-2xl text-white w-fit'><span className='primarycolor'>#</span>aboutme</span>
          <div className='flex h-0.5 w-full bg-[#c778db] mx-2'></div>
        </div>
        <p>Hello ,i'm Sagar Shinde</p>
        <p>I'm a self taught front-end and backend developer based in Maharashtra,India.I can develop responsive websites from scratch and raise them into modern user-freindly web experiences.</p>
        <p>Transforming my creativity and knowledge into a website has been my passion for over a year.i have been creating multiple projects.i always strive to learn about the newest technologies and frameworks.</p>
        <Link to='about-me' className=' font-bold border-2 border-[#C778DD] px-4 py-2 hover:bg-[#8c499fb9] transition-all ease-in-out duration-300 flex items-center w-fit'>Read More <BiRightArrowAlt/> </Link>
      </div>

      <div className='flex w-full justify-end relative'>
        <div className='w-fit relative'>
          <img src='Image.png' className='border-[#c778db] border-b-1'></img>
          <div className="grid grid-cols-6 h-1/6 w-1/3 absolute bottom-1/10 right-0 z-20">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-[#ABB2BF] rounded-full"></div>
            ))}
          </div>
          <div className="grid grid-cols-6 h-1/6 w-1/3 absolute top-1/10 left-0 z-20">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-[#ABB2BF] rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme