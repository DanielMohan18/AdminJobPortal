import React from 'react'
import { Label, TextInput} from "flowbite-react";
const EditjobInfo = ({type,name,placeholder,value,setjobTitle}) => {
  return (
    <div className="flex flex-col gap-1">
    <Label className="font-semibold text-gray-700 text-lg" value="Job Title" />
    <TextInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e)=>{setjobTitle(e.target.value)}}
      className="w-full sm:w-10/12 border border-gray-300 rounded-lg shadow-sm p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
  )
}

export default EditjobInfo
