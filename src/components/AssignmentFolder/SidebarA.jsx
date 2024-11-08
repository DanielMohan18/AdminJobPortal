import React, { useEffect, useState } from 'react'
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil'
import UserAtom from '../../atoms/UserAtom'
import JobAtom from '../../atoms/JobAtom'

const SidebarA = () => {
  
  const [job,setJob] =useRecoilState(JobAtom);
  const jobDetails = useRecoilValue(UserAtom)
  const [selectedJob, setSelectedJob] = useState('')

  useEffect(() => {
    if (jobDetails.length > 0) {
      setSelectedJob(jobDetails[0].jobTitle)
      setJob(jobDetails[0].jobTitle)
    }
  }, [])

  const handleSelectJob = (jobTitle) => {
    setSelectedJob(jobTitle)
    setJob(jobTitle)
  }

  return (
    <div className="  md:h-[calc(100vh-4rem)]">
     
      <div className={`w-full md:w-52 bg-gray-100 shadow-lg md:flex-col md:h-[calc(100vh-4rem)] md:overflow-y-auto md:py-5 h-[75px] flex flex-row overflow-x-auto`}>
        
        {jobDetails.map((job, index) => (
          <div 
            key={index}
            className={`px-4 py-0.5 md:p-4 cursor-pointer transition-all duration-200 text-sm md:text-lg text-center ease-in-out rounded-lg  
                        ${selectedJob === job.jobTitle ? 'bg-blue-300 font-semibold' : 'bg-white hover:bg-blue-50'} 
                        hover:shadow-md mx-1 my-auto md:mx-2 md:my-1 `}
            onClick={() => handleSelectJob(job.jobTitle)}
          >
            {job.jobTitle}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SidebarA
