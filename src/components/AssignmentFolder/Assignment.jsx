import React, { useState,useEffect } from 'react'
import HeaderA from './HeaderA'
import SidebarA from './SidebarA'
import Questions from './Questions'
import axios from 'axios'
import { useRecoilCallback, useRecoilState } from 'recoil'
import AssignmentAtom from '../../atoms/AssignmentAtom'
import JobAtom from '../../atoms/JobAtom'
const Assignment = () => {
  
   const [job,setJob] =useRecoilState(JobAtom);  
   const [assignmentDetails,setAssignmentdetails]=useRecoilState(AssignmentAtom);

   useEffect(()=>{
      const dataFetch = async () => {
          try {
            const response = await axios.get('http://localhost:3040/assignments');
            if (response.data) {
              setAssignmentdetails(response.data);
              localStorage.setItem('Assignmentdetails', JSON.stringify(response.data)); 
            }
          } catch (err) {
            console.error("Failed to fetch details", err);
          }
        };
        dataFetch();
  },[])

  return (
    <div>
       <HeaderA />
       <div className='flex flex-col md:flex-row w-full h-full '>
         <SidebarA  />
         <Questions />
       </div>
    </div>
  )
}

export default Assignment
