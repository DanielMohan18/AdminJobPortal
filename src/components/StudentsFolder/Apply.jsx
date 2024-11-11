import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import UserAtom from '../../atoms/UserAtom';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import CandidateAtom from '../../atoms/CandidateAtom';
import Sunform from './Sunform';
import InputS from './InputS';
import JobAtom from '../../atoms/JobAtom';

const Apply = () => {
    const {name}=useParams();
    console.log(name);
    const navigate=useNavigate();
    const Jobdetails = useRecoilValue(UserAtom);
    const [add,setAdd] =useState(false);
    const [candidateDetails,setCandidateDetails]=useRecoilState(CandidateAtom);
    const [job,setJob]=useRecoilState(JobAtom);
    const { id } = useParams();

    const filterdata = Jobdetails.filter(res => res.id === parseInt(id));

    const [formData, setFormData] = useState({
        cid: Math.floor(10000 + Math.random() * 90000),
        jobId: parseInt(id),
        candidateName: '',
        resumeLink: '',
        applicationDate: new Date().toISOString().split('T')[0],
        status: 'Pending',
        profile: {
          name: '',
          email: '',
          contact: '',
          skills: [],
        },
        experience: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('profile.')) {
            const profileField = name.split('.')[1];
            if (profileField === 'skills') {
                setFormData((prevData) => ({
                    ...prevData,
                    profile: { ...prevData.profile, skills: value.split(',').map(skill => skill.trim()) },
                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    profile: { ...prevData.profile, [profileField]: value },
                }));
            }
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData=[...candidateDetails,formData];
        setCandidateDetails(updatedData);
        localStorage.setItem('Candidatedetails',JSON.stringify(updatedData));
        setJob(name);
        setAdd(true);

    };

    return (
            <div>
              <div className="w-full max-w-6xl h-[calc(100vh-75px)] sm:max-h-[calc(100vh-95px)] overflow-y-auto sm:mx-auto border border-gray-300 rounded-md shadow-lg bg-white sm:my-10 items-center justify-center ">
                <div className="flex flex-col sm:flex-row justify-between gap-3 p-6 border-b border-gray-300">
                  {add ? (
                    <Sunform setAdd={setAdd} />
                  ) : (
                    <>
                      <div className="flex flex-col space-y-4 ">
                        <div onClick={()=>{navigate('/student/job')}} className="flex items-center gap-2 border border-gray-200 w-20 rounded-md px-1.5 py-1 cursor-pointer hover:scale-105 hover:bg-gray-300">
                          <FaArrowLeftLong />
                          Back
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mt-4">
                          {filterdata[0].jobTitle}
                        </h1>
                      </div>
                      <div className="flex flex-col px-1 sm:px-10 space-y-4 mt-6 lg:mt-0 lg:w-1/2">
                        <p className="text-sm sm:text-base lg:text-lg text-slate-600">
                          {filterdata[0].jobDescription}
                        </p>
                        <div className="flex items-center gap-2 text-lg">
                          <span className="font-bold">CTC:</span>
                          <span className="text-slate-500">{filterdata[0].salaryLPA} LPA</span>
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                          <span className="font-bold">Location:</span>
                          <span className="text-slate-500">Remote</span>
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                          <span className="font-bold">Job-Type:</span>
                          <span className="text-slate-500">{filterdata[0].employmentType}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
        
                {!add && (
                  <div className="px-6 py-8">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     
                    <InputS formData={formData.candidateName} name={"candidateName"} placeholder={"Candidate Name"} handleChange={handleChange} />
                    <InputS formData={formData.resumeLink} name={"resumeLink"} placeholder={"Resume Link"} handleChange={handleChange} />
                    <InputS formData={formData.profile.name} name={"profile.name"} placeholder={"Profile Name"} handleChange={handleChange} />
                    <InputS formData={formData.profile.email} name={"profile.email"} placeholder={"Email"} handleChange={handleChange} />
                    <InputS formData={formData.profile.contact} name={"profile.contact"} placeholder={"Contact"} handleChange={handleChange} />        
                    <textarea
                        name="profile.skills"
                        placeholder="Skills (comma-separated)"
                        value={formData.profile.skills.join(', ')}
                        onChange={handleChange}
                        className="border row-span-2 rounded-md p-3 resize-none w-full h-28"
                        required
                      />
                    <InputS formData={formData.experience} name={"experience"} placeholder={"Experience"} handleChange={handleChange} />  

                      <div className="col-span-1 md:col-span-2 mt-4 flex items-center justify-center">
                        <button type="submit" className="bg-slate-800 hover:bg-slate-600 text-white p-3 rounded-md w-40">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          );
};

export default Apply;

