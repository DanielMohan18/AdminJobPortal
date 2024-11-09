import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
const Nojob = () => {
  return (
    <div className="relative p-4">
    
    <div  className="hidden md:flex text-xl absolute  gap-4 top-4 left-10  animate-bounce duration-100 "> 
      <FaArrowAltCircleLeft  className="text-3xl text-blue-500 " />
      <h1 className="text-slate-600 font-semibold">Click to Add</h1>  
    </div>
  
    <div className="flex items-center justify-center h-full">
      <h1 className="text-2xl md:text-3xl my-auto md:my-20 text-slate-400 text-center">
         No jobs assigned. Create one to get started!
      </h1>
    </div>
   </div>
  )
}

export default Nojob
