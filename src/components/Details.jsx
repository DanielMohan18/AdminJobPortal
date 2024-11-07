import React from 'react'
import CandidateList from './CandidateList'
import {useRecoilValue } from 'recoil'
import UserAtom from '../atoms/UserAtom'
import { useParams } from 'react-router-dom'

const Details = () => {

    const jobDetails =useRecoilValue(UserAtom);
    const { id } = useParams(); 

    const filteredDetails=jobDetails.filter(candidate=>candidate.id===parseInt(id));
   
  return (
    <div>
       <div className='h-screen  w-screen  flex flex-col  gap-6 bg-gradient-to-r from-blue-200 to-purple-300 text-white'>
       <div  data-aos="fade-down" className='flex flex-col p-6 gap-6  text-black'>
       <h1  className='text-4xl md:text-6xl transform-all duration-250'> {filteredDetails[0].jobTitle} Role</h1>
        <h3  className='text-xl md:text-3xl transform-all duration-150'>Total no of Students Applied: {filteredDetails[0].numCandidatesApplied}</h3>
        </div> 
        <div data-aos="fade-up" data-aos-delay="250" className='flex flex-col gap-4 max-h-[720px] overflow-y-auto'>
            <CandidateList />
        </div>
       </div>
    </div>
  )
}

export default Details
