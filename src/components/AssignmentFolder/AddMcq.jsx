import axios from 'axios';
import React, { useState } from 'react';
import { RxCross1, RxCross2 } from "react-icons/rx";
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
  const [field,setField]=useState(false);
  const [text,setText]=useState('');

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
       setText("Question Required!!");
       setField(true);
       setTimeout(()=>{setField(false)},1400);
       return;
    }
    const emptyOptions = [opt1, opt2, opt3, opt4]
    .map((opt, index) => ({ option: `option${index + 1}`, text: opt.text.trim() }))
    .filter(opt => opt.text === '')
    .map(opt => opt.option);

    if (emptyOptions.length > 0) {
    setText(`Required: ${emptyOptions[0]}`);
    setField(true);
    setTimeout(() => setField(false), 1400);
    return;
    }

    const exsistingdata=assignmentDetails.filter(res=>res.jobTitle===job[0]);
    const dataa=exsistingdata.filter(res=>res.question===question.trim());
    const questionExists = assignmentDetails.filter(res=>res.question===question.trim());

    if (dataa.length>0) {
      alert('This question already exists in this assignment.');
      return;
    }
    if (questionExists.length>0) {
      alert('This question already exists in other assignment.');
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
  
    if(newQuestion.jobTitle==''){
      setText("No Job is Selected!!")
      setField(true);
      setTimeout(()=>setField(false),1400);
      return;
    }
    
    if(newQuestion.opt1.bool== false && newQuestion.opt2.bool== false && newQuestion.opt3.bool== false && newQuestion.opt4.bool==false){
      setText("Atleast one option should be correct!")
      setField(true);
      setTimeout(()=>setField(false),1400);
      return;
    }
    const Updatedmcq = [...assignmentDetails,newQuestion];
    setAssignmentdetails(Updatedmcq);
    localStorage.setItem('Assignmentdetails',JSON.stringify(Updatedmcq));
    setNote(true);
    setTimeout(()=>setNote(false),1500);
    setPop(!pop);
  };

  const handleField=()=>{
    setField(false);
  }
  const handleQues=()=>{
    
  }

  return (
    <div>
      {pop&& (
        <div className="h-full w-full fixed top-0 left-0 z-30 backdrop-blur-sm flex justify-center items-center ">

         {field &&(
                <div className='border rounded-full transition-all duration-300 bg-red-200 px-3 py-1.5  text-center text-red-900 border-red-400 absolute  right-4 top-4 z-50 flex gap-3 '>
                <div className='flex items-center justify-center text-lg cursor-pointer  bg-red-400 rounded-full p-0.5'>
                <RxCross2 onClick={handleField}/>
               </div>
                {text}
               </div>
          )}


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