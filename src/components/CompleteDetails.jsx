import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useParams, useNavigate } from 'react-router-dom';
import CandidateAtom from '../atoms/CandidateAtom';
import { Button, Label } from 'flowbite-react';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import InputF from './InputF';

const CompleteDetails = () => {
  const { cid ,id} = useParams();
  const navigate = useNavigate();
  const [candidateDetails, setCandidateDetails] = useRecoilState(CandidateAtom);

  const filteredCandidates = candidateDetails.filter(candidate => candidate.cid === parseInt(cid));
  const filteredCandidate = filteredCandidates[0];

  const [status,setStatus] =useState(filteredCandidate.status);

  const statusHandler = async (e) => {
    e.preventDefault();
    
    console.log("Candidate ID:", filteredCandidate.cid); 
    const newStatus={
      ...filteredCandidate,
      status,
    } 
    const updatedList=candidateDetails.map(res=>res.cid=== newStatus.cid ? newStatus:res);
    setCandidateDetails(updatedList);
    localStorage.setItem('Candidatedetails', JSON.stringify(updatedList));    
    alert('Status Updated');
    navigate(`/details/${id}`);

    //Server
    // try {
    //   const response = await axios.put(`http://localhost:3040/candidates?cid=${filteredCandidate.cid}`,newStatus);
    //   if (response.status === 200) {
    //     console.log("Status updated successfully:", response.data);
    //   } else {
    //     console.error("Failed to update status");
    //   }
    // } catch (error) {
    //   console.error("Error updating status:", error);
    // }

  };

  return (
    <div className="w-full h-screen bg-[#fefefe] flex justify-center items-center">
      <div data-aos="fade-in" className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl p-2 sm:p-4 md:p-6 mx-4 sm:mx-auto lg:p-8  shadow-lg rounded-lg border border-gray-400">
        <div className="space-y-6 mx-2">
          
          {/* Back Arrow */}
          <div className="flex justify-end pt-2">
            <FaArrowRight
              className="cursor-pointer transition-transform duration-200 hover:rotate-180"
              onClick={() => navigate(`/details/${id}`)}
            />
          </div>

          {/* Candidate Name */}
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 text-center">{filteredCandidate.candidateName} Details:</h1>

          {/* Complete Info Display Div */}
          <div className="grid max-h-[420px] overflow-y-auto grid-cols-1 md:grid-cols-2 gap-6">
        
            <InputF input={filteredCandidate.profile.name}/>
            <InputF input={filteredCandidate.profile.email}/>
            <InputF input={filteredCandidate.profile.contact}/>
            <InputF input={filteredCandidate.profile.skills.join(', ')}/>
            <InputF input={filteredCandidate.profile.experience}/>

            
            {/* Status Dropdown */}
            <div className="flex flex-col gap-1">
              <Label className="font-semibold text-gray-700 text-sm md:text-[16px] lg:text-lg" value="Status" />
              <select
                id="status"
                name="status"
                defaultValue={status}
                onChange={(e)=>setStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-lg shadow-sm p-2 bg-blue-200 "
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Rejected">Rejected</option>
                <option value="On Hold">On Hold</option>
              </select>
            </div>
          </div>

          {/* Update Status Button */}
          <div className='flex items-center justify-center'>
          <Button onClick={statusHandler} className="mt-6 w-full sm:w-60 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 focus:outline-none">
            Update Status
          </Button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default CompleteDetails;
