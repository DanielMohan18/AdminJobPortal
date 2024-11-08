import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useParams, useNavigate } from 'react-router-dom';
import CandidateAtom from '../atoms/CandidateAtom';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';

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
    try {
      const response = await axios.put(`http://localhost:3040/candidates?cid=${filteredCandidate.cid}`,newStatus);
      if (response.status === 200) {
        console.log("Status updated successfully:", response.data);
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-teal-500 to-purple-700 flex justify-center items-center">
      <div className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl p-2 sm:p-4 md:p-6 mx-2 sm:mx-auto lg:p-8 bg-white shadow-lg rounded-lg border border-gray-200">
        <div className="space-y-6">
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
            
            {/* Name */}
            <div className="flex flex-col gap-1">
            <Label className="font-semibold text-gray-700 text-sm md:text-[16px] lg:text-lg" value="Name" />
            <input
             type="text"
             name="candidateName"
             value={filteredCandidate.profile.name}
             readOnly
             className="cursor-not-allowed pointer-events-none bg-slate-200 w-full border border-gray-300 rounded-lg p-1 md:p-2 outline-none"
            />
            </div>


            {/* Email */}
            <div className="flex flex-col gap-1">
              <Label className="font-semibold text-gray-700 text-sm md:text-[16px] lg:text-lg" value="Email" />
              <input
                type="email"
                name="email"
                value={filteredCandidate.profile.email}
                readOnly
                className="cursor-not-allowed pointer-events-none w-full border border-gray-300 bg-slate-200 rounded-lg shadow-sm p-2 outline-none"
              />
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-1">
              <Label className="font-semibold  text-gray-700 text-sm md:text-[16px] lg:text-lg" value="Contact No" />
              <input
                type="tel"
                name="contact"
                value={filteredCandidate.profile.contact}
                readOnly
                className="cursor-not-allowed pointer-events-none w-full border border-gray-300 bg-slate-200 rounded-lg shadow-sm p-2 outline-none"
              />
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-1">
              <Label className="font-semibold text-gray-700 text-sm md:text-[16px] lg:text-lg" value="Skills" />
              <input
                type="text"
                name="skills"
                value={filteredCandidate.profile.skills.join(', ')}
                readOnly
                className="cursor-not-allowed pointer-events-none w-full border border-gray-300 rounded-lg bg-slate-200 shadow-sm p-2 outline-none"
              />
            </div>

            {/* Experience */}
            <div className="flex flex-col gap-1">
              <Label className="font-semibold text-gray-700 text-sm md:text-[16px] lg:text-lg" value="Experience" />
              <input
                type="text"
                name="experience"
                value={filteredCandidate.profile.experience}
                readOnly
                className="cursor-not-allowed pointer-events-none w-full border border-gray-300 bg-slate-200 rounded-lg shadow-sm p-2  outline-none"
              />
            </div>

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
                <option value="Shorlisted">Shorlisted</option>
                <option value="Rejected">Rejected</option>
                <option value="On Hold">On Hold</option>
              </select>
            </div>
          </div>

          {/* Update Status Button */}
          <Button onClick={statusHandler} className="mt-6 w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
            Update Status
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompleteDetails;
