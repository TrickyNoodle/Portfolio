import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'
import { BsLinkedin, BsGithub, BsHammer } from 'react-icons/bs'
import { Link } from 'react-router'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
const Navbar = () => {
  const [shown, setshown] = useState(false)
  return (
    <div className={`${shown ? "not-md:h-screen" : ""} justify-between sticky top-0 not-md:flex-col not-md:mx-4 md:w-3/4 mx-auto flex py-4 transition-all ease-in-out duration-300 z-99 bg-inherit`}>
      <div className='flex w-full text-white font-bold justify-between'>
        <NavLink to='/'>TrickyNoodle</NavLink>
        <label className='text-2xl absolute right-0 md:hidden' htmlFor="navbar">{
          shown?<RxCross1/>:<GiHamburgerMenu />
        }
        </label>
        <input className="md:hidden h-0 w-0" type="checkbox" name="navbar" id="navbar" onChange={() => { setshown(!shown) }} />
      </div>
      <div className={`not-md:${shown ? "" : "hidden"} h-full flex not-md:flex-col w-full md:justify-end not-md:justify-between secondarycolor not-md:my-4`}>
        <ul id='navbar' className='flex not-md:flex-col not-md:text-2xl gap-5 [&>li]:hover:text-gray-200 [&>li]:transition-all [&>li]:ease-in-out [&>li]:duration-300'>
          <li><NavLink className={({ isActive }) => isActive ? 'font-medium text-white' : ''} onClick={() => { setshown(!shown) }} to='/'>home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'font-medium text-white' : ''} onClick={() => { setshown(!shown) }} to='work'>work</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'font-medium text-white' : ''} onClick={() => { setshown(!shown) }} to='about-me'>about-me</NavLink></li>
        </ul>
        <div className='md:hidden flex gap-4 py-12 justify-center'>
          <Link to='https://github.com/TrickyNoodle'><BsGithub className='text-3xl fill-gray-400 hover:fill-white transition-all ease-in-out duration-300' /></Link>
          <Link to='https://www.linkedin.com/in/sagar-shinde-9aa94531b/'><BsLinkedin className='text-3xl fill-gray-400 hover:fill-white transition-all ease-in-out duration-300' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar