import React from 'react'
import { useRecoilValue } from 'recoil'
import AssignmentAtom from '../../atoms/AssignmentAtom'
import { Button } from 'flowbite-react'
import { ImCross } from "react-icons/im";
import { FaFireAlt } from "react-icons/fa";
import AddMcq from './AddMcq';
import PopAtom from '../../atoms/PopAtom';
import { useNavigate } from 'react-router-dom';
import JobAtom from '../../atoms/JobAtom';
import NoMcq from './NoMcq';
import NotificationM from '../Notification';

const Questions = () => {
  const navigate=useNavigate();
  const job=useRecoilValue(JobAtom);
  const pop =useRecoilValue(PopAtom);
  const assignmentDetails = useRecoilValue(AssignmentAtom);
  const filteredData = assignmentDetails.filter(res => res.jobTitle === job);
  console.log(filteredData);
  return (
    <div className="flex flex-col gap-4 p-6 w-full relative">
     <NotificationM context={"Added Successfully"}/> 
     {(pop)? <AddMcq />:null}

      <div className="font-bold text-2xl">
        {job ? job : "Select"} 
        <span className="text-gray-400"> Assignment</span>
      </div>
      
      <div  className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-160px)] p-2 relative">
        {job ? (
           (filteredData.length>0)?
           filteredData.map((res, index) => (
            <div  key={index} className="w-full bg-white border border-gray-200 p-6 shadow-lg rounded-lg mx-auto max-w-2xl">
              <h1 className="font-semibold text-xl mb-4">
                Q{index + 1}. {res.question}?
              </h1>
              <div className="flex flex-col gap-2">
                
                <div className={` rounded-lg border ${(res.opt1.bool ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700")}`}>
                   <div className='p-3 flex justify-between items-center'>
                    <div>1.{res.opt1.text}</div>
                    {res.opt1.bool? <FaFireAlt className='text-green-900' /> : <ImCross className='text-red-900'/> }
                   </div>
                </div>

                <div className={` rounded-lg border ${(res.opt2.bool ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700")}`}>
                   <div className='p-3 flex justify-between items-center'>
                    <div>2.{res.opt2.text}</div>
                    {res.opt2.bool? <FaFireAlt className='text-green-900' /> : <ImCross className='text-red-900'/> }
                   </div>
                </div>

                <div className={` rounded-lg border ${(res.opt3.bool ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700")}`}>
                   <div className='p-3 flex justify-between items-center'>
                    <div>3.{res.opt3.text}</div>
                    {res.opt3.bool? <FaFireAlt className='text-green-900' /> : <ImCross className='text-red-900'/> }
                   </div>
                </div>

                <div className={` rounded-lg border ${(res.opt4.bool ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700")}`}>
                   <div className='p-3 flex justify-between items-center'>
                    <div>4.{res.opt4.text}</div>
                    {res.opt4.bool? <FaFireAlt className='text-green-900' /> : <ImCross className='text-red-900'/> }
                   </div>
                </div>

              </div>
              <div className="flex justify-center mt-6">
                <Button onClick={()=>{navigate(`/editmcq/${res.id}`)}} color="success" className="bg-green-500 hover:bg-green-600 text-white w-32">
                  Edit
                </Button>
              </div>
            </div>
          )): <NoMcq />
        ) : (
          <div className="text-center text-gray-500">No role was selected</div>
        )}
      </div>
    </div>
  );
};

export default Questions;
