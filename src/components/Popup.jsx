import React, { useEffect } from 'react'
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { useRecoilState } from 'recoil';
import UserAtom from '../atoms/UserAtom';
import axios from 'axios';

const Popup = ({popUp,setpopUp}) => {

    const [jobTitle,setjobTitle] =useState('');
    const [jobDescription,setjobDescription] =useState('');
    const [positionsOpen,setpositionsOpen] =useState('');
    const [employmentType,setemploymentType] =useState('');
    const [salaryLPA,setsalaryLPA] =useState('');
    const [numCandidatesApplied,setnumCandidatesApplied] =useState(0);
    const [globalData,setglobalData] =useRecoilState(UserAtom);
    
    // useEffect(()=>{
    //   console.log(globalData);
    // },[globalData]);


    const HandlePost=async()=>{
        const newJob={
                id:Math.floor(10000 + Math.random() * 90000),
                jobTitle,
                jobDescription,
                numCandidatesApplied:parseInt(numCandidatesApplied),
                positionsOpen:parseInt(positionsOpen),
                employmentType,
                salaryLPA:parseFloat(salaryLPA)
            };
          console.log("hii");  

        if (newJob.jobTitle !== '') {
            const  UpdateJobs = [...globalData, newJob];
            setglobalData(UpdateJobs);
            localStorage.setItem('Jobdetails', JSON.stringify(UpdateJobs));
            try {
                const response = await axios.post('http://localhost:3040/jobs', newJob);
            } catch (error) {
                console.error('Error posting job to API:', error);
                alert('Failed to save job to server');
            }
        } else {
            alert("Enter Something!!");
        }
    
        
        setpopUp(false);
    }
  return (
    <div>
      {popUp ? (
        <div className="h-full w-full fixed top-0 left-0 z-50 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[270px] sm:w-[300px] md:w-[360px] lg:w-[560px] bg-gradient-to-r from-slate-100 to-gray-100 border absolute border-black p-6 rounded-lg shadow-lg transform transition-all duration-300 bg-white/90">
            
            <div className="flex justify-end cursor-pointer mb-4">
              <RxCross1
                onClick={() => setpopUp(false)}
                className="text-2xl text-gray-600 hover:text-gray-800 transition-colors"
              />
            </div>
  
            <div className="space-y-4">
              <div className="flex items-center justify-between text-gray-700">
                <label className="w-[150px] text-sm font-medium">Post Name:</label>
                <input
                  className="border w-full border-gray-300 rounded-lg p-2 outline-none  transition-all"
                  value={jobTitle}
                  onChange={(e) => setjobTitle(e.target.value)}
                />
              </div>
  
              <div className="flex items-center justify-between text-gray-700">
                <label className="w-[150px] text-sm font-medium">Description:</label>
                <input
                  className="border w-full border-gray-300 rounded-lg p-2 outline-none transition-all"
                  value={jobDescription}
                  onChange={(e) => setjobDescription(e.target.value)}
                />
              </div>
  
              <div className="flex items-center justify-between text-gray-700">
                <label className="w-[150px] text-sm font-medium">Total Applied:</label>
                <input
                  className="border bg-slate-300  w-full border-gray-300 cursor-not-allowed pointer-events-none rounded-lg p-2 outline-none   transition-all"
                  value={0}
                  readOnly
                />
              </div>
  
              <div className="flex items-center justify-between text-gray-700">
                <label className="w-[150px] text-sm font-medium">Total Positions:</label>
                <input
                  className="border w-full border-gray-300 rounded-lg p-2 outline-none  transition-all"
                  value={positionsOpen}
                  onChange={(e) => setpositionsOpen(e.target.value)}
                />
              </div>
  
              <div className="flex items-center justify-between text-gray-700">
                <label className="w-[150px] text-sm font-medium">Role:</label>
                <input
                  className="border w-full border-gray-300 rounded-lg p-2 outline-none  transition-all"
                  value={employmentType}
                  onChange={(e) => setemploymentType(e.target.value)}
                />
              </div>
  
              <div className="flex items-center justify-between text-gray-700">
                <label className="w-[150px] text-sm font-medium">LPA:</label>
                <input
                  className="border w-full border-gray-300 rounded-lg p-2 outline-nonetransition-all"
                  value={salaryLPA}
                  onChange={(e) => setsalaryLPA(e.target.value)}
                />
              </div>
            </div>
  
            <button
              onClick={HandlePost}
              type="button"
              className="mt-6 w-full bg-gradient-to-br from-purple-600 to-blue-500 text-white text-lg font-medium rounded-lg py-2 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all"
            >
              Add Post
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
  
}

export default Popup
