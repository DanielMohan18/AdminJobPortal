import React from 'react'

const HeaderA = ({jobDetails}) => {
  return (
    <div className='w-full h-14 border-b border-black flex justify-between py-1 px-2 md:px-8 lg:px-16 items-center'>
           <div className='text-[15px] sm:text-xl md:text-xl lg:text-2xl font-bold'>Role Assignment</div>
           <div className='flex gap-2 sm:gap-4 items-center' >
           <label for="jobs" class="block mb-2 text-sm sm:text-xl md:text-xl lg:text-2xl font-medium sm:font-bold text-gray-900">Role:</label>
           <select id="jobs" class="bg-gray-50 border w-40 sm:w-60 md:w-80 lg:w-96 border-gray-300 text-gray-900 text-sm rounded-lg outline-none">
              <option selected>Choose a Job Role</option>
              {jobDetails.map((res)=>(
                <option >{res.jobTitle}</option>
              ))}
           </select>
        </div>
    </div>
  )
}

export default HeaderA
