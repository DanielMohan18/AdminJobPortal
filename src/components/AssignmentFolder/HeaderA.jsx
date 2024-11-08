import React from 'react'
import { Button } from 'flowbite-react'
import { useRecoilState, useRecoilValue } from 'recoil'
import PopAtom from '../../atoms/PopAtom'
import JobAtom from '../../atoms/JobAtom'


const HeaderA = () => {

  const job=useRecoilValue(JobAtom); 
  const [pop,setPop]=useRecoilState(PopAtom);

  return (
    <div className='w-full sticky h-14 border-b border-black flex justify-between py-1 px-2 md:px-8 lg:px-16 items-center'>
           <div className='text-[15px] sm:text-xl md:text-xl lg:text-2xl font-bold'>{(job)?job:"ENTNT"} Assignment</div>
           <Button onClick={()=>{setPop(true)}} color="blue" className='bg-blue-500 w-40'>Add MCQ</Button>
    </div>
  )
}

export default HeaderA
