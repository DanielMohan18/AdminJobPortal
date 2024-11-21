import React from 'react'
import { Button } from 'flowbite-react'
import { useRecoilState, useRecoilValue } from 'recoil'
import PopAtom from '../../atoms/PopAtom'
import JobAtom from '../../atoms/JobAtom'
import UserAtom from '../../atoms/UserAtom'


const HeaderA = () => {
  const Jobdetails=useRecoilValue(UserAtom);
  const [job,setJob]=useRecoilState(JobAtom); 
  const [pop,setPop]=useRecoilState(PopAtom);
  
  if(Jobdetails.length==0){
     setJob('');
  }
  return (
    <div className='w-full sticky h-14 border-b border-black flex justify-between py-1 px-2 md:px-8 lg:px-16 items-center'>
           <div className='text-[15px] sm:text-xl md:text-xl lg:text-2xl font-bold'>
           { String(job) ? String(job) : "ENTNT"} Assignment
           </div>
           <Button onClick={()=>{setPop(true)}} color="blue" className='bg-blue-500 w-40'>Add MCQ</Button>
    </div>
  )
}

export default HeaderA
