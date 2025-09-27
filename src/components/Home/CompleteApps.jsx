import React from 'react'
import { BsArrows } from 'react-icons/bs'
import { FaAngleRight, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router'
const CompleteApps = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-2xl font-bold'><span className='primarycolor'>#</span>projects</p>

      <div className='columns-3 gap-4 w-full [&>div]:break-inside-avoid'>
        <div className="flex flex-col border-1 border-[#ABB2B]">
          <img src="mango-leaff.jpeg" alt="" />
          <ul className='p-2  border-1 border-[#ABB2B] secondarycolor flex justify-start gap-1 list-none flex-wrap'>
            <li>HTML</li>
            <li>Tailwindcss</li>
            <li>Python</li>
            <li>Flask</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TensorFlow</li>
          </ul>
          <div className='flex flex-col gap-2 mx-4 secondarycolor wrap-normal'>
            <h1 className='text-2xl text-white'>Mango Leaf Disease Classification using CNN</h1>
            <p>It allows users to upload a mango leaf image, sends it to the Flask backend for inference, and displays the predicted disease class with confidence.</p>
            <div className='[&>a]:flex font-bold [&>a]:border-2 border-[#C778DD] py-2 [&>a]:hover:bg-[#8c499fb9] [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-300 flex [&>a]:items-center w-fit [&>a]:p-2 [&>a]:px-4 [&>a]:mx-2'>
              <Link className='border-[#C778DD]' to="https://github.com/TrickyNoodle/Mango-Leaf-Disease-Classification-using-CNN"><FaGithub className='inline text-2xl mx-1' />Repo</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-1 border-[#ABB2B]">
          <img src="https://raw.githubusercontent.com/TrickyNoodle/Smart-Light-Control-System-using-ESP32/refs/heads/main/images/webserver2.jpeg" alt="" />
          <ul className='p-2  border-1 border-[#ABB2B] secondarycolor flex justify-start gap-1 list-none flex-wrap'>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Arduino</li>
            <li>ESP32</li>
            <li>Embedded-C</li>
          </ul>
          <div className='flex flex-col gap-2 mx-4 secondarycolor'>
            <h1 className='text-2xl text-white'>Smart Light Control System using ESP32</h1>
            <p>A wireless lighting control system leveraging the ESP32 microcontroller to manage multiple devices via a web interface.</p>
            <div className='[&>a]:flex font-bold [&>a]:border-2 border-[#C778DD] py-2 [&>a]:hover:bg-[#8c499fb9] [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-300 flex [&>a]:items-center w-fit [&>a]:p-2 [&>a]:px-4 [&>a]:mx-2'>
              <Link className='border-[#C778DD]' to="https://github.com/TrickyNoodle/Smart-Light-Control-System-using-ESP32/tree/main"><FaGithub className='inline text-2xl mx-1' />Repo</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-1 border-[#ABB2B]">
          <img src="https://camo.githubusercontent.com/f7df0129c086d43a200cb5e39a0f7f5fd900c0b418b0cecd571b1cd1404759ba/68747470733a2f2f676f646f74656e67696e652e6f72672f6173736574732f70726573732f6c6f676f5f736d616c6c5f636f6c6f725f6461726b2e706e67" alt="" />
          <ul className='p-2  border-1 border-[#ABB2B] secondarycolor flex justify-start gap-1 list-none flex-wrap'>
            <li>Godot</li>
            <li>GDScript</li>
            <li>Game</li>
          </ul>
          <div className='flex flex-col gap-2 mx-4 secondarycolor'>
            <h1 className='text-2xl text-white'>Hitting Rampage</h1>
            <p>A Game Developed and Compiled In Godot 4.3 using GDScript</p>
            <div className='[&>a]:flex font-bold [&>a]:border-2 border-[#C778DD] py-2 [&>a]:hover:bg-[#8c499fb9] [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-300 flex [&>a]:items-center w-fit [&>a]:p-2 [&>a]:px-4 [&>a]:mx-2'>
              <Link className='border-[#C778DD]' to="https://github.com/TrickyNoodle/Hitting-Rampage-Game"><FaGithub className='inline text-2xl mx-1' />Repo</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompleteApps