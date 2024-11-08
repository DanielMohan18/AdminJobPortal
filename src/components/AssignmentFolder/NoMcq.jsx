import React from 'react'
import { FaArrowsUpToLine } from "react-icons/fa6";
const NoMcq = () => {
  return (
    <div className="relative p-4">
    <div  className="hidden md:flex text-xl absolute  gap-4 top-0 right-10  animate-bounce duration-100 "> 
      <h1 className="text-slate-600 font-semibold">Click to Add</h1> 
      <FaArrowsUpToLine  className="text-3xl text-blue-500 " />
    </div>
  
    <div className="flex items-center justify-center h-full">
      <h1 className="text-2xl md:text-3xl my-auto md:my-20 text-slate-400 text-center">
        No MCQs are Assigned!
      </h1>
    </div>
  </div>
  
  )
}

export default NoMcq
