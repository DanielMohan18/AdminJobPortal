import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { X } from 'lucide-react';
import UserAtom from '../atoms/UserAtom';
import NoteAtom from '../atoms/NoteAtom';
import { RxCross2 } from 'react-icons/rx';

const Popup = ({ popUp, setpopUp }) => {
    const [jobTitle, setjobTitle] = useState('');
    const [jobDescription, setjobDescription] = useState('');
    const [positionsOpen, setpositionsOpen] = useState('');
    const [employmentType, setemploymentType] = useState('');
    const [salaryLPA, setsalaryLPA] = useState('');
    const [numCandidatesApplied, setnumCandidatesApplied] = useState(0);
    const [field,setfield]=useState(false);
    const [globalData, setglobalData] = useRecoilState(UserAtom);
    const [note, setNote] = useRecoilState(NoteAtom);
   
    const HandlePost = () => {
        
        const newJob = {
            id: Math.floor(10000 + Math.random() * 90000),
            jobTitle,
            jobDescription,
            numCandidatesApplied: parseInt(numCandidatesApplied),
            positionsOpen: parseInt(positionsOpen),
            employmentType,
            salaryLPA: parseFloat(salaryLPA)
        };

        const data=globalData.filter((res)=>{res.jobTitle==newJob.jobTitle});
        const data1 = globalData.find(job => job.jobTitle === newJob.jobTitle);
        console.log(data1);
        if(data1){
           setfield(true);
        }

        if (newJob.jobTitle !== '' && newJob.jobDescription!=='' && newJob.positionsOpen!=='' && newJob.employmentType!=='' && newJob.salaryLPA!=='') {
            const UpdateJobs = [...globalData, newJob];
            setglobalData(UpdateJobs);
            localStorage.setItem('Jobdetails', JSON.stringify(UpdateJobs));
            setpopUp(false);
            setNote(true);
            setTimeout(()=>setNote(false),1500);
        } else {
           setfield(true);
        }
    };

    const handleField=()=>{
        setfield(false);
    }

    if (!popUp) return null;

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
           
           {field &&(
                <div className='border rounded-full transition-all duration-300 bg-red-200 px-3 py-1.5 w-[240px] text-center text-red-900 border-red-400 absolute  right-4 top-4 z-50 flex gap-3 '>
                <div className='flex items-center justify-center text-lg cursor-pointer  bg-red-400 rounded-full p-0.5'>
                <RxCross2 onClick={handleField}/>
               </div>
                All fields are required!!
               </div>
          )}

            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl  max-h-[90vh] overflow-y-auto">
                <div className="p-4 md:p-6 space-y-4">
                  
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Create New Job</h2>
                        <button
                            onClick={() => setpopUp(false)}
                            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="h-5 w-5 text-gray-500" />
                        </button>
                    </div>

                    
                    <div className="space-y-3">
                        <div className="space-y-1.5">
                            <label className="block text-sm font-medium text-gray-700">Job Title</label>
                            <input
                                type="text"
                                placeholder="Enter job title"
                                className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                value={jobTitle}
                                onChange={(e) => setjobTitle(e.target.value)}
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                placeholder="Enter job description"
                                rows={3}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                                value={jobDescription}
                                onChange={(e) => setjobDescription(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-gray-700">Applications</label>
                                <input
                                    className="w-full px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-lg text-gray-500 cursor-not-allowed"
                                    value={0}
                                    readOnly
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-gray-700">Positions</label>
                                <input
                                    type="number"
                                    placeholder="Number of positions"
                                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    value={positionsOpen}
                                    onChange={(e) => setpositionsOpen(e.target.value)}
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-gray-700">Employment Type</label>
                                <select
                                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    value={employmentType}
                                    onChange={(e) => setemploymentType(e.target.value)}
                                >
                                    <option value="">Select Type</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Intern">Intern</option>
                                    <option value="Contract">Contract</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-gray-700">Salary (LPA)</label>
                                <input
                                    type="number"
                                    placeholder="Enter salary"
                                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    value={salaryLPA}
                                    onChange={(e) => setsalaryLPA(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                
                    <div className="flex justify-end gap-2 pt-4 border-t">
                        <button
                            onClick={() => setpopUp(false)}
                            className="px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 "
                        >
                            Cancel
                        </button>
                        <button
                            onClick={HandlePost}
                            className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 "
                        >
                            Create Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;