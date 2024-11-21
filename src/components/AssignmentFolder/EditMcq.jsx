import React, { useState,useEffect,useRef } from 'react'
import { useRecoilState } from 'recoil';
import AssignmentAtom from '../../atoms/AssignmentAtom';
import { useLocation, useNavigate,useParams } from 'react-router-dom';

import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa6';
import NotificationM from '../Notification';
import NoteAtom from '../../atoms/NoteAtom';
import EditAtom from '../../atoms/EditAtom';
import { DiYii } from "react-icons/di";
import JobAtom from '../../atoms/JobAtom';
import { RxCross2 } from 'react-icons/rx';
import { LuSave } from "react-icons/lu";

const EditMcq = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const {name}=useParams();
  const [note,setNote]=useRecoilState(NoteAtom);
  const [edit,setedit]=useRecoilState(EditAtom);
  const [save,setSave]=useState(false);
  const [job,setJob]=useRecoilState(JobAtom);
  const [text,setText]=useState('');
  const [field,setField]=useState(false);
  const [safe,setSafe]=useState(false);

  const [assignmentDetails, setAssignmentdetails] = useRecoilState(AssignmentAtom);
  const assignmentId = location.pathname.split('/')[2];
  const filterdata = assignmentDetails.filter(mcq => mcq.id === parseInt(assignmentId));

 
  const [question, setQuestion] = useState(filterdata[0].question);
  const [opt1, setOpt1] = useState({ text: filterdata[0].opt1.text, bool: filterdata[0].opt1.bool });
  const [opt2, setOpt2] = useState({ text: filterdata[0].opt2.text, bool: filterdata[0].opt2.bool });
  const [opt3, setOpt3] = useState({ text: filterdata[0].opt3.text, bool: filterdata[0].opt3.bool });
  const [opt4, setOpt4] = useState({ text: filterdata[0].opt4.text, bool: filterdata[0].opt4.bool });

  const handleOptionChange = (option, field, value) => {
    const update = { ...option, [field]: field === 'bool' ? value === 'true' : value };
    switch (option) {
      case opt1: setOpt1(update); break;
      case opt2: setOpt2(update); break;
      case opt3: setOpt3(update); break;
      case opt4: setOpt4(update); break;
      default: break;
    }
    
  };

 

  const newdata ={
    id:filterdata[0].id,
    jobTitle:filterdata[0].jobTitle,
    question,
    opt1,
    opt2,
    opt3,
    opt4
  }
  
  
  const handleSave = (e) => {
    e.preventDefault();
   
    if (!opt1.bool && !opt2.bool && !opt3.bool && !opt4.bool) {
      setText("At least one option should be correct!");
      setField(true);
      setTimeout(() => setField(false), 1400);
      return;
  }


  const invalidFields = [];
  if (question.trim() === '') invalidFields.push("Question");
  if (opt1.text.trim() === '') invalidFields.push("Option 1");
  if (opt2.text.trim() === '') invalidFields.push("Option 2");
  if (opt3.text.trim() === '') invalidFields.push("Option 3");
  if (opt4.text.trim() === '') invalidFields.push("Option 4");

 
  if (invalidFields.length > 0) {
      setText(`Required ${invalidFields[0]} Field! `);
      setField(true);
      setTimeout(() => setField(false), 1400);
      return;
  }

    
    const updatedMcq =assignmentDetails.map(res=>res.id === newdata.id ? newdata : res); 
    setAssignmentdetails(updatedMcq);
    localStorage.setItem('Assignmentdetails',JSON.stringify(updatedMcq));

    setSafe(true);
    setTimeout(()=>setSafe(false),1400);

    setNote(true);
    setTimeout(()=>setNote(false),1500);
    setSave(true);
    setTimeout(()=>setSave(false),1500);

    setJob(name);
  };

  const handleUpdate = async(e) => {
    e.preventDefault();
   alert('Only for server!');
   navigate('/assignment');
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    
    //LocalStorage
      const jobsToUpdate = assignmentDetails.filter(job => job.id !== filterdata[0].id);
      setAssignmentdetails(jobsToUpdate);
      localStorage.setItem('Assignmentdetails', JSON.stringify(jobsToUpdate));
      setedit(true);
      setTimeout(()=>setedit(false),1500);
      navigate('/assignment');
  };
  
  const handleField=()=>{
    setField(false);
  }
  const handleSafe=()=>{
    setSave(false);
  }
  return (
    <div className="flex justify-center items-center h-[calc(100vh-70px)] bg-gray-100 relative ">
      {/* <NotificationM context={"Saved Successfully"} top={2}/> */}

      {field &&(
                <div className='border rounded-full transition-all duration-300 bg-red-200 px-3 py-1.5  text-center text-red-900 border-red-400 absolute  right-4 top-4 z-50 flex gap-3 '>
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

      <div className="w-full mx-2 sm:mx-10 lg:mx-auto max-w-4xl bg-white border p-8 rounded-lg shadow-xl overflow-y-auto">
        <div className="flex justify-between mb-4">
          {(save)?<DiYii className='text-green-600 text-2xl transition-all duration-200 '/>:<div></div>}
          <FaArrowRight
            onClick={()=>{navigate('/assignment')}}
            className='text-2xl text-gray-600 hover:text-gray-800 cursor-pointer transition-transform duration-200 hover:rotate-180'
          />
        </div>

        <div className="space-y-6">
        
          <div className="flex flex-col text-gray-700">
            <label className="text-sm font-medium">Question:</label>
            <textarea
              className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows="3"
            />
          </div>

     
          {[opt1, opt2, opt3, opt4].map((option, index) => (
            <div key={index} className="flex items-center justify-between space-x-4">
              <input
                className="border w-full border-gray-300 rounded-lg p-3 outline-none"
                placeholder={`Option ${index + 1}`}
                value={option.text}
                onChange={(e) => handleOptionChange(option, 'text', e.target.value)}
                required
              />
              <select
                className="border border-gray-300 rounded-lg p-3 outline-none"
                value={option.bool ? 'true' : 'false'}
                onChange={(e) => handleOptionChange(option, 'bool', e.target.value)}
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </select>
            </div>
          ))}
        </div>

   
        <div className="flex  justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={handleSave}
            className=" w-20 sm:w-auto  bg-gradient-to-br from-purple-600 to-blue-500 text-white text-sm sm:text-lg font-medium rounded-lg px-3 sm:px-6 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all"
          >
            Save
          </button>
          {/* <button
            type="button"
            onClick={handleUpdate}
            className="w-20 sm:w-auto bg-gray-700  text-white text-sm sm:text-lg font-medium rounded-lg px-3 sm:px-6 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all"
          >
            Update
          </button> */}
          <button
            type="button"
            onClick={handleDelete}
            className="w-20 sm:w-auto bg-red-600 text-white text-sm sm:text-lg font-medium rounded-lg py-3 px-3 sm:px-6 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 transition-all"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditMcq;


//save
//Server
    // try{
    //   const response = await axios.put(`http://localhost:3040/assignments/${filterdata[0].id}`,newdata)
    //   if(response.status===200){
    //     alert('Success');
    //   }
    // }catch(err){
    //      console.log(err);
    //      alert("failed to update server!") 
    // }

//delete
 //Server    
    // try {
    //   const response = await axios.delete(`http://localhost:3040/assignments/${filterdata[0].id}`);
    //   if (response.status === 200) {
    //     const jobsToUpdate = assignmentDetails.filter(job => job.id !== filterdata[0].id);
    //     setAssignmentdetails(jobsToUpdate);
    //     localStorage.setItem('Assignmentdetails', JSON.stringify(jobsToUpdate));
    //     alert('Deleted Successfully!');
    //     navigate('/assignment'); 
    //   }
    // } catch (err) {
    //   console.log(err);
    //   alert("Error deleting");
    // }