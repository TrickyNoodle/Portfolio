import React from 'react'
import { BiSolidQuoteAltLeft,BiSolidQuoteAltRight } from 'react-icons/bi';
const Quotes = () => {
    return (
        <div id='quote' className='border-1 text-white border-white w-fit text-2xl flex mx-auto text-center relative bg-inherit'>
            <BiSolidQuoteAltLeft  className='primarycolor absolute -top-4 left-4 text-4xl bg-[#282C33] px-2'/>
            <BiSolidQuoteAltRight className=' primarycolor absolute -bottom-4 right-4 z-10 text-4xl bg-[#282C33] px-2'/>
            <span className='font-bold p-4'>With Great Power Comes Great Electricity Bill</span>
            <div className='border-1 p-2 border-white text-white absolute top-full right-0'>
                - Dr. Who
            </div>
        </div>
    )
}

export default Quotes