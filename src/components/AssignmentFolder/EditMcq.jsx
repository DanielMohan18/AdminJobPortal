import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useRecoilState } from 'recoil';
import AssignmentAtom from '../../atoms/AssignmentAtom';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa6';
import NotificationM from '../Notification';
import NoteAtom from '../../atoms/NoteAtom';

const EditMcq = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const [note,setNote]=useRecoilState(NoteAtom);
  const [assignmentDetails, setAssignmentdetails] = useRecoilState(AssignmentAtom);
  const assignmentId = location.pathname.split('/')[2];
  const filterdata = assignmentDetails.filter(mcq => mcq.id === parseInt(assignmentId));
 

  // State for the selected question and options
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
    const updatedMcq=[...assignmentDetails,newdata]
    setAssignmentdetails(updatedMcq);
    localStorage.setItem('Assignmentdetails',JSON.stringify(updatedMcq));
    setNote(true);
   
  };

  const handleUpdate = async(e) => {
    e.preventDefault();

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
   alert('Only for server!');
   navigate('/assignment');
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    
    //LocalStorage
      const jobsToUpdate = assignmentDetails.filter(job => job.id !== filterdata[0].id);
      setAssignmentdetails(jobsToUpdate);
      localStorage.setItem('Assignmentdetails', JSON.stringify(jobsToUpdate));
      alert("Deleted Successfully");
      navigate('/assignment');

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
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
      <NotificationM context={"Saved Successfully"}/>
      <div className="w-full mx-10 lg:mx-auto max-w-4xl bg-white border p-8 rounded-lg shadow-xl">
        <div className="flex justify-end mb-4">
          <FaArrowRight
            onClick={()=>{navigate('/assignment')}}
            className='text-2xl text-gray-600 hover:text-gray-800 cursor-pointer transition-transform duration-200 hover:rotate-180'
          />
        </div>

        <div className="space-y-6">
          {/* Question Input */}
          <div className="flex flex-col text-gray-700">
            <label className="text-sm font-medium">Question:</label>
            <textarea
              className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows="3"
            />
          </div>

          {/* Options Input */}
          {[opt1, opt2, opt3, opt4].map((option, index) => (
            <div key={index} className="flex items-center justify-between space-x-4">
              <input
                className="border w-full border-gray-300 rounded-lg p-3 outline-none"
                placeholder={`Option ${index + 1}`}
                value={option.text}
                onChange={(e) => handleOptionChange(option, 'text', e.target.value)}
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

        {/* Save, Update, Delete Buttons */}
        <div className="flex  justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={handleSave}
            className=" w-20 sm:w-auto  bg-gradient-to-br from-purple-600 to-blue-500 text-white text-sm sm:text-lg font-medium rounded-lg px-3 sm:px-6 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleUpdate}
            className="w-20 sm:w-auto bg-gray-700  text-white text-sm sm:text-lg font-medium rounded-lg px-3 sm:px-6 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all"
          >
            Update
          </button>
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
