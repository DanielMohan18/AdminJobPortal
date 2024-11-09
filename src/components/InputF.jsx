import React from 'react'
import { Label } from 'flowbite-react';

const InputF = ({input}) => {
  return (
    <div className="flex flex-col gap-1">
    <Label className="font-semibold text-gray-700 text-sm md:text-[16px] lg:text-lg" value="Name" />
    <input
     type="text"
     name="candidateName"
     value={input}
     readOnly
     className="cursor-not-allowed pointer-events-none bg-slate-200 w-full border border-gray-300 rounded-lg p-1 md:p-2 outline-none"
    />
    </div>
  )
}

export default InputF
