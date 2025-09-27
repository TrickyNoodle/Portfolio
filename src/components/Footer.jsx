import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <div className='py-4'>
            <hr />
            <div className='w-3/4 mx-auto flex py-4 transition-all ease-in-out duration-300'>
                <div className='flex w-full flex-col gap-2'>
                    <p className='font-bold'>TrickyNoodle <span className='secondarycolor font-normal'>github.com/TrickyNoodle</span></p>
                    <p>Frontend,Backend and Full Stack Developer</p>
                </div>
                <div className='flex w-full justify-end'>
                    <div>
                        <p className='text-2xl'>Links</p>
                        <div className='flex gap-4 p-4'>
                            <Link to='https://github.com/TrickyNoodle'><BsGithub className='text-2xl fill-gray-400 hover:fill-white transition-all ease-in-out duration-300' /></Link>
                            <Link to='https://www.linkedin.com/in/sagar-shinde-9aa94531b/'><BsLinkedin className='text-2xl fill-gray-400 hover:fill-white transition-all ease-in-out duration-300' /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className='secondarycolor text-center'>Made by TrickyNoodle</p>
        </div>
    )
}

export default Footer