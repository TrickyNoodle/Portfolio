import React from 'react'
import { Link } from 'react-router'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
const Ribbon = () => {
    return (
        <div className='not-md:hidden flex flex-col w-fit fixed left-16 gap-4 h-1/3 justify-end items-center'>
            <div className='h-full border-1 w-0.1 border-[#abb2bf]' />
            <Link target='_blank' to='https://github.com/TrickyNoodle'><BsGithub className='text-2xl fill-gray-400 hover:fill-white transition-all ease-in-out duration-300' /></Link>
            <Link target='_blank' to='https://www.linkedin.com/in/sagar-shinde-9aa94531b/'><BsLinkedin className='text-2xl fill-gray-400 hover:fill-white transition-all ease-in-out duration-300' /></Link>
            <Link target='_blank' to='mailto:sagarshinde2k20@gmail.com' > <CgMail className='text-gray-400 items-center hover:text-white hover:font-bold transition-all duration-300 text-2xl' /></Link>
        </div>
    )
}

export default Ribbon