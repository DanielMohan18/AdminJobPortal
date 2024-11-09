import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import UserAtom from '../../atoms/UserAtom';
import axios from 'axios';
import Nojob from '../Nojob';

const JobS = () => {

    const navigate=useNavigate();
    const[Jobdetails,setJobdetails] = useRecoilState(UserAtom);
    const [job,setjob]=useState('');
    
    useEffect(()=>{
        const dataFetch = async () => {
            try {
              const response = await axios.get('http://localhost:3040/jobs');
              if (response.data) {
                setJobdetails(response.data);
                localStorage.setItem('Jobdetails', JSON.stringify(response.data)); 
              }
            } catch (err) {
              console.error("Failed to fetch details", err);
            }
          };
          dataFetch();
    },[setJobdetails])


  return (
    <div className=''>
       {(Jobdetails.length>0) ? <div data-aos="fade-in" className='grid px-5 py-10 md:p-10 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-h-[calc(100vh-100px)] overflow-y-auto'>
        {/* cardtemplate */}
       {Jobdetails.map((res,index)=>(
    
           <div key={index}  data-aos-delay="100" className='p-2 flex flex-col h-[220px] justify-center bg-white items-center border border-slate-200 transform duration-200 gap-4  shadow-lg py-4 hover:scale-105 rounded-md'>
           <h1 className='text-2xl font bold '>{res.jobTitle}</h1>
           <div className='  p-2 flex sm:gap-1 justify-center items-center'> 
            <button 
            type="button" 
            onClick={()=>{navigate(`/student/${res.id}`)}}
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Apply
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

export default JobS