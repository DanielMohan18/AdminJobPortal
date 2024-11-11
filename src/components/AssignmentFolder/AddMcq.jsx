import axios from 'axios';
import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { useRecoilState } from 'recoil';
import PopAtom from '../../atoms/PopAtom';
import AssignmentAtom from '../../atoms/AssignmentAtom';
import JobAtom from '../../atoms/JobAtom';
import NoteAtom from '../../atoms/NoteAtom';

const AddMcq = () => {
  
  const [note,setNote]=useRecoilState(NoteAtom);

  const job =useRecoilState(JobAtom)
  
  const [assignmentDetails,setAssignmentdetails]=useRecoilState(AssignmentAtom)  

  const [pop,setPop] = useRecoilState(PopAtom);
 
  const [question, setQuestion] = useState('');
  const [opt1, setOpt1] = useState({ text: '', bool: false });
  const [opt2, setOpt2] = useState({ text: '', bool: false });
  const [opt3, setOpt3] = useState({ text: '', bool: false });
  const [opt4, setOpt4] = useState({ text: '', bool: false });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!question.trim()) {
      alert('Please enter a question.');
      return;
    }
    if (![opt1, opt2, opt3, opt4].some(opt => opt.text.trim())) {
      alert('Please provide at least one option.');
      return;
    }

    const exsistingdata=assignmentDetails.filter(res=>res.jobTitle===job[0]);
  
    const questionExists = exsistingdata.filter(res=>res.question===question);
  
    if (questionExists.length>0) {
      alert('This question already exists in the assignments.');
      return;
    }

    const newQuestion = {
      id: Math.floor(10000 + Math.random() * 90000),
      jobTitle:job[0],
      question,
      opt1,
      opt2,
      opt3,
      opt4,
    };

    const Updatedmcq = [...assignmentDetails,newQuestion];
    setAssignmentdetails(Updatedmcq);
    localStorage.setItem('Assignmentdetails',JSON.stringify(Updatedmcq));
    setNote(true);
    setTimeout(()=>setNote(false),1500);
    setPop(!pop);
  };

  return (
    <div>
      {pop&& (
        <div className="h-full w-full fixed top-0 left-0 z-50 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[300px] sm:w-[400px] md:w-[560px] bg-white border p-6 rounded-lg shadow-lg">
            <div className="flex justify-end mb-4">
              <RxCross1
                onClick={() => {setPop(!pop)}}
                className="text-2xl cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
              />
            </div>

            <div className="space-y-4">
              {/* Question Input */}
              <div className="flex flex-col text-gray-700">
                <label className="text-sm font-medium">Question:</label>
                <textarea
                  
                  className="border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>

              {/* Options Input */}
              {[opt1, opt2, opt3, opt4].map((option, index) => (
                <div key={index} className="flex items-center justify-between space-x-2">
                  <input
                    className="border w-full border-gray-300 rounded-lg p-2 outline-none"
                    placeholder={`Option ${index + 1}`}
                    value={option.text}
                    onChange={(e) => handleOptionChange(option, 'text', e.target.value)}
                  />
                  <select
                    className="border border-gray-300 rounded-lg p-2 outline-none"
                    value={option.bool ? 'true' : 'false'}
                    onChange={(e) => handleOptionChange(option, 'bool', e.target.value)}
                  >
                    <option value="false">False</option>
                    <option value="true">True</option>
                  </select>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              type="button"
              className="mt-6 w-full bg-gradient-to-br from-purple-600 to-blue-500 text-white text-lg font-medium rounded-lg py-2 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all"
            >
              Add Question
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMcq;

// try {
    //   const response = await axios.post('http://localhost:3040/assignments', newQuestion);
    //   console.log(response.data);
    // } catch (err) {
    //   console.log(err);
    //   alert("Failed to save.");
    // }