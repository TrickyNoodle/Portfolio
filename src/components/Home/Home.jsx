import React from 'react'
import First from './First'
import Quotes from './Quotes'
import Skills from './Skills'
import Contacts from './Contacts'
import Aboutme from './Aboutme'
import CompleteApps from './CompleteApps'
import { useState,useEffect } from 'react'
const Home = () => {
  const [visible, setVisible] = useState(false)
    useEffect(()=>{
      setTimeout(() => {
        setVisible(true)
      }, 100);
    })
  return (
    <div className={`${visible?"opacity-100":"opacity-0"} flex flex-col not-md:mx-4 md:w-3/4 mx-auto justify-center md:[&>div]:my-15 [&>div]:my-10 transition-all ease-in-out duration-300`}>
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