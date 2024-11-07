import React, { useState, useEffect } from 'react';
import { Button, Label, TextInput,Alert } from "flowbite-react";
import { useRecoilState } from 'recoil';
import UserAtom from '../atoms/UserAtom';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa6";
import CandidateAtom from '../atoms/CandidateAtom';


const EditJob = () => {

  const { id } = useParams();
  const navigate=useNavigate();
  const [Jobdetails, setJobdetails] = useRecoilState(UserAtom);
  const [candidateDetails,setCandidateDetails] =useRecoilState(CandidateAtom);

  const filteredDetails = Jobdetails.find(job => job.id === parseInt(id));

  const [jobTitle,setjobTitle] =useState(filteredDetails?.jobTitle||' ');
  const [jobDescription,setjobDescription] =useState(filteredDetails?.jobDescription || ' ');
  const [positionsOpen,setpositionsOpen] =useState(filteredDetails?.positionsOpen || ' ');
  const [employmentType,setemploymentType] =useState(filteredDetails?.employmentType || ' ');
  const [salaryLPA,setsalaryLPA] =useState(filteredDetails?.salaryLPA || ' ');

//   NewData

  const updatedJob = {
    id: `${id}`,
    jobTitle,
    jobDescription,
    numCandidatesApplied: filteredDetails.numCandidatesApplied,
    positionsOpen,
    employmentType,
    salaryLPA
  };


  // useEffect(()=>{
  //   console.log(Jobdetails);
  //   console.log(localStorage.getItem('Jobdetails'));
  // },[Jobdetails]);

//For Save
  const handleSave = (e) => {
    e.preventDefault();
    setJobdetails(prevState => {
      const updatedJobList = prevState.map(job => 
        job.id === updatedJob.id ? updatedJob : job
      );
      localStorage.setItem('Jobdetails', JSON.stringify(updatedJobList));
      return updatedJobList; 
    });
    alert("Job details saved!");
  };

//For Update
    const handleUpdate= async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.put(`http://localhost:3040/jobs/${id}`,updatedJob);
        }catch(err){
            console.error('Error Updating job to API:', err);
            alert('Failed to Update job to server');
        }
        navigate('/job')
    }

//For Delete
 
 
// console.log("Jobs to Update:", JSON.stringify(jobsToUpdate, null, 2));
// console.log("Previous Candidates:", JSON.stringify(prevCandidates, null, 2));


const handleDelete = async () => {
 

    try{
      const response=await axios.delete(`http://localhost:3040/jobs/${id}`);
      console.log(response.data);
      const jobsToUpdate = Jobdetails.filter(job => job.id!==id);
      setJobdetails(jobsToUpdate);
      localStorage.setItem('Jobdetails',JSON.stringify(jobsToUpdate));
      console.log('added');
    }catch(err){
      console.log(err);
      alert("Error deleting");
    }
     
     try {
      const response = await axios.get(`http://localhost:3040/candidates?jobId=${id}`);
      const candidatesToDelete = response.data;
      console.log(candidatesToDelete);
      
      for (const candidate of candidatesToDelete) {
        await axios.delete(`http://localhost:3040/candidates?cid=${candidate.cid}`);
      }
      const prevCandidates = candidateDetails.filter(candidate => candidate.jobId !==id);
      setCandidateDetails(prevCandidates);
      localStorage.setItem('Candidatedetails',prevCandidates);
      console.log('All candidates associated with jobId deleted successfully.')
      console.log('Jobs and candidates updated successfully.');
      alert("Delete and updates were successful.");
      navigate('/job');
    } catch (error) {
      console.error('Error during delete and update:', error);
      alert("Delete failed!");
    }
  };
  
  

  

  return (
    <div className="w-full max-h-screen  flex justify-center items-center bg-gray-100">
      <div className="container max-h-screen overflow-y-auto mx-2 sm:mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-8 sm:w-10/12 lg:w-8/12 xl:w-6/12">
        
        <div className="space-y-6">
         
          <div 
            className='flex justify-end'>
            <FaArrowRight className='cursor-pointer transition-transform duration-200 hover:rotate-180' onClick={()=>{navigate('/job')}}/>
        </div>

          <div className="flex flex-col gap-1">
            <Label className="font-semibold text-gray-700 text-lg" value="Job Title" />
            <TextInput
              type="text"
              name="jobTitle"
              placeholder="Enter job title"
              value={jobTitle}
              onChange={(e)=>{setjobTitle(e.target.value)}}
              className="w-full sm:w-10/12 border border-gray-300 rounded-lg shadow-sm p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label className="font-semibold text-gray-700 text-lg" value="Description" />
            <TextInput
              type="text"
              name="jobDescription"
              placeholder="Enter job description"
              value={jobDescription}
              onChange={(e)=>{setjobDescription(e.target.value)}}
              className="w-full sm:w-10/12 border border-gray-300 rounded-lg shadow-sm p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label className="font-semibold text-gray-700 text-lg" value="Total Positions" />
            <TextInput
              type="number"
              name="positionsOpen"
              placeholder="Enter number of positions"
              value={positionsOpen}
              onChange={(e)=>{setpositionsOpen(e.target.value)}}
              className="w-full sm:w-10/12 border border-gray-300 rounded-lg shadow-sm p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label className="font-semibold text-gray-700 text-lg" value="Employment Type" />
            <TextInput
              type="text"
              name="employmentType"
              placeholder="Enter employment type"
              value={employmentType}
              onChange={(e)=>{setemploymentType(e.target.value)}}
              className="w-full sm:w-10/12 border border-gray-300 rounded-lg shadow-sm p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label className="font-semibold text-gray-700 text-lg" value="CTC" />
            <TextInput
              type="text"
              name="salaryLPA"
              placeholder="Enter CTC"
              value={salaryLPA}
              onChange={(e)=>{setsalaryLPA(e.target.value)}}
              className="w-full sm:w-10/12 border border-gray-300 rounded-lg shadow-sm p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex gap-4 justify-center pt-4 mx-auto">
            <Button onClick={handleSave} color="success" className=" bg-green-500 text-white font-semibold py-2 px-1 md:px-4 lg:px-6 rounded-lg shadow-md  focus:outline-none">
              Save
            </Button>
            <Button onClick={handleUpdate} color="dark" className="bg-gray-500 text-white font-semibold py-2 px-2 md:px-4 lg:px-6 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none">
              Update
            </Button>
            <Button onClick={handleDelete} color='failure'  className="bg-red-500 text-white font-semibold py-2 px-2 md:px-4 lg:px-6 rounded-lg shadow-md hover:bg-red-800 focus:outline-none" >
                Delete
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditJob;
