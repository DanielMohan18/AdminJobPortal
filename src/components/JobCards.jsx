import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import UserAtom from '../atoms/UserAtom';
import axios from 'axios';
import Nojob from './Nojob';

const JobCards = () => {

    const navigate=useNavigate();
    const[Jobdetails,setJobdetails] = useRecoilState(UserAtom);    

    useEffect(()=>{
      const data=JSON.parse(localStorage.getItem('Jobdetails'));
      (data)?setJobdetails(data):[];
    },[setJobdetails]);
  
    //Server  
  // useEffect(()=>{
  //       const dataFetch = async () => {
  //           try {
  //             const response = await axios.get('http://localhost:3040/jobs');
  //             if (response.data) {
  //               setJobdetails(response.data);
  //               localStorage.setItem('Jobdetails', JSON.stringify(response.data)); 
  //             }
  //           } catch (err) {
  //             console.error("Failed to fetch details", err);
  //           }
  //         };
  //         dataFetch();
         
       
  //         // const data=JSON.parse(localStorage.getItem('Jobdetails'));
  //         // setJobdetails(data);
  //   },[setJobdetails])

console.log(Jobdetails);
  return (
    <div>
       {(Jobdetails.length>0) ? <div data-aos="fade-in" className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-h-[calc(100vh-100px)]  md:p-4 overflow-y-auto'>
        {/* cardtemplate */}
       {Jobdetails.map((res,index)=>(
    
           <div key={index}  data-aos-delay="100" className='p-2 flex flex-col border transform duration-200 gap-4 border-slate-100 shadow-lg py-4 hover:scale-105'>
           <h1 className='text-2xl font bold '>{res.jobTitle}</h1>
           <span className='font-light text-gray-400 w-full h-16'>{res.jobDescription}</span>
           
           <div className='flex justify-between px-6'>
             <div className='sm:text-[9px] md:text-[10px] lg:text-[12px] text-[8px] text-blue-800 font-bold border border-blue-800 rounded-full py-1 px-1'>{res.positionsOpen} positions</div>
             <div className='sm:text-[9px] md:text-[10px] lg:text-[12px] text-[8px] text-red-800 font-bold border border-red-800 rounded-full py-1 px-1'>{res.employmentType}</div>
             <div className='sm:text-[9px] md:text-[10px] lg:text-[12px] text-[9px] text-purple-800 font-bold border border-purple-800 rounded-full py-1 px-1'>{res.salaryLPA} lpa</div>
           </div>
           
           
           <div className=' border-t-2 p-2 flex sm:gap-1 justify-between items-center'>
            
            <div 
            onClick={()=>{navigate(`/details/${res.id}`),console.log(res.id)}} 
            className='font-light hover:text-blue-600 hover:font-semibold hover:scale-110 cursor-pointer trasnform-all duration-200 flex items-center justify-center group'>
                Details
               <MdKeyboardArrowRight className='transform transition-transform duration-200 group-hover:rotate-180'/>
            </div>  

            <button 
            type="button" 
            onClick={()=>{navigate(`/editjob/${res.id}`)}}
            class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Edit
            </button>
           </div>
          </div>
       ))}
       
       
      </div>
      :
       <Nojob />}
    </div>
  )
}

export default JobCards