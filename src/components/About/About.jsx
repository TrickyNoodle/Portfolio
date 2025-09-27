import React from 'react'
import First from './First'
import Skills from './Skills'
const About = () => {
  return (
    <div className='w-3/4 mx-auto flex flex-col [&>div]:py-4 my-4'>
      <h3 className='text-3xl font-bold'><span className='primarycolor'>/</span>about-me</h3>
      <p>Who am I?</p>
      <First/>
      <Skills/>
    </div>
  )
}

export default About