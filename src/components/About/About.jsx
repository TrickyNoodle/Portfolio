import React, { useEffect ,useState} from 'react'
import First from './First'
import Skills from './Skills'
const About = () => {
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    setTimeout(() => {
      setVisible(true)
    }, 100);
  })
  return (
    <div className={`${visible?"opacity-100":"opacity-0"} md:w-3/4 not-md:mx-4 mx-auto flex flex-col [&>div]:py-4 my-4 transition-all ease-in-out duration-300`}>
      <h3 className='text-3xl font-bold'><span className='primarycolor'>/</span>about-me</h3>
      <p>Who am I?</p>
      <First/>
      <Skills/>
    </div>
  )
}

export default About