import React from 'react'
import First from './First'
import Quotes from './Quotes'
import Skills from './Skills'
import Contacts from './Contacts'
import Aboutme from './Aboutme'
import CompleteApps from './CompleteApps'
const Home = () => {
  return (
    <div className='flex flex-col not-md:mx-4 md:w-3/4 mx-auto justify-center md:[&>div]:my-15 [&>div]:my-10'>
      <First />
      <Quotes/>
      <CompleteApps/>
      <Skills/>
      <Aboutme/>
      <Contacts/>
    </div>
  )
}

export default Home