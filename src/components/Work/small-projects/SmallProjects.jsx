import React from 'react'
import { Link } from 'react-router'
import { FaGithub } from 'react-icons/fa6'

const SmallProjects = () => {
    return (
        <div className='flex flex-col gap-4'>
            <p className='text-2xl font-bold'><span className='primarycolor'>#</span>small-projects</p>


            <div className='columns-3 [&>div]:break-inside-avoid not-md:flex flex-col [&>div]:my-2'>
                <div className="flex flex-col border-1 border-[#ABB2B]">
                    <ul className='p-2  border-1 border-[#ABB2B] secondarycolor flex justify-start gap-1 list-none flex-wrap'>
                        <li>Python</li>
                        <li>TensorFlow</li>
                        <li>Keras</li>
                    </ul>
                    <div className='flex flex-col gap-2 mx-4 secondarycolor'>
                        <h1 className='text-2xl text-white'>Forest Fire Detection using DeepLearning</h1>
                        <p>Detection of Forest Fire from Images using DeepLearning</p>
                        <div className='[&>a]:flex font-bold [&>a]:border-2 border-[#C778DD] py-2 [&>a]:hover:bg-[#8c499fb9] [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-300 flex [&>a]:items-center w-fit [&>a]:p-2 [&>a]:px-4 [&>a]:mx-2'>
                            <Link className='border-[#C778DD]' to="https://github.com/TrickyNoodle/Forest_fire_detection_dl"><FaGithub className='inline text-2xl mx-1' />Repo</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border-1 border-[#ABB2B]">
                    <ul className='p-2  border-1 border-[#ABB2B] secondarycolor flex justify-start gap-1 list-none flex-wrap'>
                        <li>BatchScript</li>
                        <li>Windows</li>
                    </ul>
                    <div className='flex flex-col gap-2 mx-4 secondarycolor'>
                        <h1 className='text-2xl text-white'>ProxySetup</h1>
                        <p>An Easy Windows Only Script Created With Batch Which Would help You configure proxy without going the hard way which is by going to settings and comitting changes there</p>
                        <div className='[&>a]:flex font-bold [&>a]:border-2 border-[#C778DD] py-2 [&>a]:hover:bg-[#8c499fb9] [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-300 flex [&>a]:items-center w-fit [&>a]:p-2 [&>a]:px-4 [&>a]:mx-2'>
                            <Link className='border-[#C778DD]' to="https://github.com/TrickyNoodle/ProxySetup"><FaGithub className='inline text-2xl mx-1' />Repo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallProjects