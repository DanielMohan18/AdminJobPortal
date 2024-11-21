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
import AssignmentAtom from '../atoms/AssignmentAtom';
import { RxCross2 } from 'react-icons/rx';
import { LuSave } from 'react-icons/lu';

const EditJob = () => {
  
  const { id } = useParams();
  const navigate=useNavigate();
  const [save,setSave]=useState(false);
  const [Jobdetails, setJobdetails] = useRecoilState(UserAtom);
  const [candidateDetails,setCandidateDetails] =useRecoilState(CandidateAtom);
  const [assignmentDetails,setAssignmentdetails]=useRecoilState(AssignmentAtom);
  const [note,setNote]=useRecoilState(NoteAtom);
  const [edit,setedit]=useRecoilState(EditAtom);
  const [field,setField]=useState(false);
  const [text,setText]=useState('');
  const [safe,setSafe]=useState(false);


  const filteredDetails = Jobdetails.find(job => job.id === parseInt(id));
  const filteredCandidate=candidateDetails.filter(job=>job.jobId===filteredDetails.id);

  const [jobTitle,setjobTitle] =useState(filteredDetails?.jobTitle||' ');
  const [jobDescription,setjobDescription] =useState(filteredDetails?.jobDescription || ' ');
  const [positionsOpen,setpositionsOpen] =useState(filteredDetails?.positionsOpen || ' ');
  const [employmentType,setemploymentType] =useState(filteredDetails?.employmentType || ' ');
  const [salaryLPA,setsalaryLPA] =useState(filteredDetails?.salaryLPA || ' ');
  const [context,setContext]=useState('Saved Successfully');
  

  const updatedJob = {
    id: parseInt(id),
    jobTitle:jobTitle.trim(),
    jobDescription:jobDescription.trim(),
    numCandidatesApplied: filteredCandidate.length,
    positionsOpen,
    employmentType,
    salaryLPA
  };

      
    //For Save
    const handleSave = (e) => { 
      e.preventDefault();
      const invalidFields = Object.entries(updatedJob)
            .filter(([key, value]) => 
                value === '' || 
                value === undefined || 
                value === null || 
                (typeof value === 'number' && isNaN(value))
            )
            .map(([key]) => key); 
       
        if (invalidFields.length > 0) {
            setText(`Please fill the ${invalidFields[0]} field!`);
            setField(true);
            setTimeout(() => setField(false), 1400);
            return;
        }
     
    const updatedJobList =Jobdetails.map(res=>res.id === updatedJob.id ? updatedJob : res); 
    setJobdetails(updatedJobList);
    localStorage.setItem('Jobdetails', JSON.stringify(updatedJobList));

    setSafe(true);
    setTimeout(()=>setSafe(false),1400);

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
  
  const updatedJobList =Jobdetails.filter(res=>res.id !== updatedJob.id); 
  setJobdetails(updatedJobList);
  localStorage.setItem('Jobdetails', JSON.stringify(updatedJobList));

  const updatedCandidList=candidateDetails.filter(res=>res.jobId !== updatedJob.id);
  setCandidateDetails(updatedCandidList);
  localStorage.setItem('Candidatedetails',JSON.stringify(updatedCandidList));

  const data=assignmentDetails.filter(res=>res.jobTitle!=updatedJob.jobTitle);
  setAssignmentdetails(data);
  localStorage.setItem('Assignmentdetails',JSON.stringify(data));


  setedit(true);
  setTimeout(()=>setedit(false),1500);
  navigate('/job');
  };
  
  
  const handleField=()=>{
    setField(false);
  }
  
  const handleSafe=()=>{
     setSafe(false);
  }
  
  return (
    <>
   
    <div className="w-full h-[calc(100vh-70px)]  flex justify-center items-center bg-gray-100 relative">
      <div className="overflow-y-auto sm:mx-4 my-6 h-[560px] mx-1 bg-white border border-gray-200 rounded-lg shadow-lg py-6 px-10 w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12">
      {/* {note?<NotificationM context={context} top={2} />:null}  */}

      {field &&(
                <div className='border rounded-full transition-all duration-300 bg-red-200 px-3 py-1.5 text-center text-red-900 border-red-400 absolute  right-4 top-4 z-50 flex gap-3 '>
                <div className='flex items-center justify-center text-lg cursor-pointer  bg-red-400 rounded-full p-0.5'>
                <RxCross2 onClick={handleField}/>
               </div>
                {text}
               </div>
          )}
      
      {safe &&(
                <div className='border rounded-full transition-all duration-300 bg-green-200 px-3 py-1.5  text-center text-green-900 border-green-400 absolute -translate-x-24 left-1/2 top-4 z-50 flex gap-3 '>
                <div className='flex items-center justify-center text-lg cursor-pointer  bg-green-300 rounded-full p-0.5'>
                <LuSave onClick={handleSafe}/>
               </div>
                Saved Succussfully.
               </div>
          )}    


        <div className="space-y-3 h-full">
          <div 
            className='flex justify-between '>
             {(save)?<DiYii className='text-green-600 text-2xl transition-all duration-200 '/>:<div></div>}   
            <FaArrowRight className='cursor-pointer transition-transform duration-200 hover:rotate-180 ' onClick={()=>{navigate('/job')}}/>
        </div>
           
            <EditjobInfo head={"JobTitle:"} type={"text"} name={"jobTitle"} placeholder={"Enter job title"} value={jobTitle} setjobTitle={setjobTitle}/>
            <EditjobInfo head={"JobDescription:"} type={"text"} name={"jobDescription"} placeholder={"Enter job description"} value={jobDescription} setjobTitle={setjobDescription} /> 
            <EditjobInfo head={"Positions Opens:"} type={"number"} name={"positionsOpen"} placeholder={"Enter number of positions"} value={positionsOpen} setjobTitle={setpositionsOpen} /> 
            <div className="flex flex-col gap-1">
                                <label className="font-semibold text-gray-700 text-lg" value={"Employment-Type:"}>Employment Type </label>
                                <select
                                    className="w-full sm:w-10/12 px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    value={employmentType}
                                    name={"employmentType"}
                                    onChange={(e) => setemploymentType(e.target.value)}
                                >
                                    <option value="Full Time">Full Time</option>
                                    <option value="Intern">Intern</option>
                                    <option value="Contract">Contract</option>
                                </select>
            </div>
            <EditjobInfo head={"CTC:"} type={"number"} name={"salaryLPA"} placeholder={"Enter CTC"} value={salaryLPA} setjobTitle={setsalaryLPA} /> 
          

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