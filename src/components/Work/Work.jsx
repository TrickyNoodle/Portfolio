import React from 'react'
import CompleteApps from './complete-apps/CompleteApps'
import SmallProjects from './small-projects/SmallProjects'

const Work = () => {
  return (
    <div className='md:w-3/4 not-md:mx-4 mx-auto flex flex-col gap-8 my-4'>
      <div className='flex flex-col gap-2'>
        <p className='text-3xl font-bold'><span className='primarycolor'>/</span>projects</p>
        <p>List of My Projects</p>
      </div>
      <CompleteApps />
      <SmallProjects/>
    </div>
  )
}

export default Work