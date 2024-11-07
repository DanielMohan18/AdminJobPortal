import React from 'react'
import { useRecoilValue } from 'recoil'
import UserAtom from '../../atoms/UserAtom'
import HeaderA from './HeaderA'
import SidebarA from './SidebarA'
import Questions from './Questions'
const Assignment = () => {
   const jobDetails= useRecoilValue(UserAtom)
  return (
    <div>
       <HeaderA jobDetails={jobDetails}/>
       <div className='flex flex-col md:flex-row w-full h-full '>
         <SidebarA />
         <Questions />
       </div>
    </div>
  )
}

export default Assignment
