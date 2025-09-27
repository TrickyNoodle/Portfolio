import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='w-3/4 mx-auto flex py-4 transition-all ease-in-out duration-300'>
        <div className='flex w-full text-white font-bold'>
            <NavLink to='/'>TrickyNoodle</NavLink>
        </div>
        <div className='flex w-full justify-end secondarycolor'>
            <ul id='navbar'className='flex gap-5 [&>li]:hover:text-gray-200 [&>li]:transition-all [&>li]:ease-in-out [&>li]:duration-300'>
                <li><NavLink className={({isActive})=>isActive?'font-medium text-white':''} to='/'>home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?'font-medium text-white':''} to='work'>work</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?'font-medium text-white':''} to='about-me'>about-me</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar