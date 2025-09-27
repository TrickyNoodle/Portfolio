import { CgMail } from 'react-icons/cg'
import { Link } from 'react-router'

const Contacts = () => {
    return (
        <div className='flex w-full flex-col'>
            <div className='flex w-full items-center'>
                <p className='font-bold text-white text-2xl'><span className='primarycolor'>#</span>contacts</p>
                <div className='w-1/6 h-0.5 flex bg-[#C778DB]'></div>
            </div>
            <div className='flex text-gray-400 w-full items-center'>
                <div className='flex w-full'>
                    <p className=' font-bold flex-wrap'>I'm Interested in working Opportunities.However, if you have other request or question, don't hesitate to contact me</p>
                </div>
                <div className='flex w-full justify-end'>
                    <div className='w-fit p-4 border-1 flex flex-col gap-2'>
                        <p className='text-white'>Message me here</p>
                        <Link to='mailto:sagarshinde2k20@gmail.com' className='text-gray-400 flex items-center hover:text-white hover:font-bold transition-all duration-300'><CgMail className='inline text-2xl' /> sagarshinde2k20@gmail.com</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts