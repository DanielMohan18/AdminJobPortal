import React, { useState, useEffect,useRef } from 'react';
import { useRecoilState } from 'recoil';
import UserAtom from '../atoms/UserAtom';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa6";
import CandidateAtom from '../atoms/CandidateAtom';
import NotificationM from './Notification';
import NoteAtom from '../atoms/NoteAtom';
import EditjobInfo from './EditjobInfo';
import EditAtom from '../atoms/EditAtom';
import { DiYii } from "react-icons/di";
import { Label } from 'flowbite-react';

const EditJob = () => {
  
  const { id } = useParams();
  const navigate=useNavigate();
  const isFirstRender = useRef(true);
  const [save,setSave]=useState(false);
  const [Jobdetails, setJobdetails] = useRecoilState(UserAtom);
  const [candidateDetails,setCandidateDetails] =useRecoilState(CandidateAtom);
  
  const [note,setNote]=useRecoilState(NoteAtom);
  const [edit,setedit]=useRecoilState(EditAtom);

  const filteredDetails = Jobdetails.find(job => job.id === parseInt(id));
  const filteredCandidate=candidateDetails.filter(job=>job.jobId===filteredDetails.id);

  const [jobTitle,setjobTitle] =useState(filteredDetails?.jobTitle||' ');
  const [jobDescription,setjobDescription] =useState(filteredDetails?.jobDescription || ' ');
  const [positionsOpen,setpositionsOpen] =useState(filteredDetails?.positionsOpen || ' ');
  const [employmentType,setemploymentType] =useState(filteredDetails?.employmentType || ' ');
  const [salaryLPA,setsalaryLPA] =useState(filteredDetails?.salaryLPA || ' ');
  const [context,setContext]=useState('Saved Successfully');

//   NewData
  const updatedJob = {
    id: parseInt(id),
    jobTitle,
    jobDescription,
    numCandidatesApplied: filteredCandidate.length,
    positionsOpen,
    employmentType,
    salaryLPA
  };

      
    //For Save
    const handleSave = (e) => {  
     e.preventDefault(); 
    const updatedJobList =Jobdetails.map(res=>res.id === updatedJob.id ? updatedJob : res); 
    setJobdetails(updatedJobList);
    localStorage.setItem('Jobdetails', JSON.stringify(updatedJobList));

    setSave(true);
    setTimeout(()=>setSave(false),1500);
    setNote(true);
    setTimeout(() => setNote(false), 1500);
  };

     //For Update
    const handleUpdate= async (e)=>{
        e.preventDefault();
      alert('Only For Server!');
      navigate('/job');
    }

//For Delete
const handleDelete = async () => {  
  //Local Storage
  const updatedJobList =Jobdetails.filter(res=>res.id !== updatedJob.id); 
  setJobdetails(updatedJobList);
  localStorage.setItem('Jobdetails', JSON.stringify(updatedJobList));

  const updatedCandidList=candidateDetails.filter(res=>res.jobid!==updatedJob.id);
  setCandidateDetails(updatedCandidList);
  localStorage.setItem('Candidatedetails',JSON.stringify(updatedCandidList));

  setedit(true);
  setTimeout(()=>setedit(false),1500);
  navigate('/job');
  };
  
  

  

  return (
    <>
   
    <div className="w-full h-[calc(100vh-70px)]  flex justify-center items-center bg-gray-100 relative">
      <div className="overflow-y-auto sm:mx-4 my-6 h-[560px] mx-1 bg-white border border-gray-200 rounded-lg shadow-lg py-6 px-10 w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12">
      {note?<NotificationM context={context} top={2} />:null} 
        <div className="space-y-3 h-full">
          <div 
            className='flex justify-between sm:justify-end'>
             {(save)?<DiYii className='text-green-600 text-2xl transition-all duration-200 block sm:hidden'/>:<div></div>}   
            <FaArrowRight className='cursor-pointer transition-transform duration-200 hover:rotate-180 ' onClick={()=>{navigate('/job')}}/>
        </div>
            
            <EditjobInfo head={"JobTitle:"} type={"text"} name={"jobTitle"} placeholder={"Enter job title"} value={jobTitle} setjobTitle={setjobTitle}/>
            <EditjobInfo head={"JobDescription:"} type={"text"} name={"jobDescription"} placeholder={"Enter job description"} value={jobDescription} setjobTitle={setjobDescription} /> 
            <EditjobInfo head={"Positions Opens:"} type={"number"} name={"positionsOpen"} placeholder={"Enter number of positions"} value={positionsOpen} setjobTitle={setpositionsOpen} /> 
            <EditjobInfo head={"Emplyment-Type:"} type={"text"} name={"employmentType"} placeholder={"Enter employment type"} value={employmentType} setjobTitle={setemploymentType} /> 
            <EditjobInfo head={"CTC:"} type={"text"} name={"salaryLPA"} placeholder={"Enter CTC"} value={salaryLPA} setjobTitle={setsalaryLPA} /> 
    

          <div className="flex gap-4 justify-center mx-auto ">
            
            <button onClick={handleSave} className=" bg-green-500  text-white font-semibold py-1 md:py-2 h-12 md:h-[50px] px-2 md:px-4 lg:px-6 rounded-lg shadow-md w-20 sm:w-24 md:w-28 hover:bg-green-800 focus:outline-none" >
              Save
            </button>
            {/* <button onClick={handleUpdate} className="bg-gray-500 text-white font-semibold py-1 md:py-2 h-12 md:h-[50px] px-2 md:px-4 lg:px-6 rounded-lg shadow-md w-20 sm:w-24 md:w-28 hover:bg-gray-800 focus:outline-none" >
              Update
            </button> */}
            <button onClick={handleDelete} className="bg-red-500 text-white  font-semibold py-1 md:py-2 h-12 md:h-[50px] px-2 md:px-4 lg:px-6 rounded-lg shadow-md  w-20 sm:w-24 md:w-28 hover:bg-red-800 focus:outline-none" >
              Delete
            </button>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default EditJob;


//for Update
// try{
        //     const response = await axios.put(`http://localhost:3040/jobs/${id}`,updatedJob);
        // }catch(err){
        //     console.error('Error Updating job to API:', err);
        //     alert('Failed to Update job to server');
        // }
 //for delete
    // try{
    //   const response=await axios.delete(`http://localhost:3040/jobs/${id}`);
    //   console.log(response.data);
    //   const jobsToUpdate = Jobdetails.filter(job => job.id!==id);
    //   setJobdetails(jobsToUpdate);
    //   localStorage.setItem('Jobdetails',JSON.stringify(jobsToUpdate));
    //   console.log('added');
    // }catch(err){
    //   console.log(err);
    //   alert("Error deleting");
    // }
     
    //  try {
    //   const response = await axios.get(`http://localhost:3040/candidates?jobId=${id}`);
    //   const candidatesToDelete = response.data;
    //   console.log(candidatesToDelete);
      
    //   for (const candidate of candidatesToDelete) {
    //     await axios.delete(`http://localhost:3040/candidates?cid=${candidate.cid}`);
    //   }
    //   const prevCandidates = candidateDetails.filter(candidate => candidate.jobId !==id);
    //   setCandidateDetails(prevCandidates);
    //   localStorage.setItem('Candidatedetails',prevCandidates);
    //   console.log('All candidates associated with jobId deleted successfully.')
    //   console.log('Jobs and candidates updated successfully.');
    //   alert("Delete and updates were successful.");
    //   navigate('/job');
    // } catch (error) {
    //   console.error('Error during delete and update:', error);
    //   alert("Delete failed!");
    // }        

     // for Server
    // setJobdetails(prevState => {
    //   const updatedJobList = prevState.map(job => 
    //     job.id === updatedJob.id ? updatedJob : job
    //   );
    //   localStorage.setItem('Jobdetails', JSON.stringify(updatedJobList));
    //   return updatedJobList; 
    // });