import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import UserAtom from '../../atoms/UserAtom';
import JobAtom from '../../atoms/JobAtom';
import { ChevronRight, ChevronLeft, Briefcase } from 'lucide-react';

const SidebarA = () => {
  const [job, setJob] = useRecoilState(JobAtom);
  const jobDetails = useRecoilValue(UserAtom);
  const [selectedJob, setSelectedJob] = useState('');
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  
  useEffect(() => {
    const savedJob = localStorage.getItem('selectedJob');
    if (savedJob && jobDetails.some(job => job.jobTitle === savedJob)) {
      setSelectedJob(savedJob);
      setJob(savedJob);
    } else if (jobDetails.length > 0) {
      setSelectedJob(jobDetails[0].jobTitle);
      setJob(jobDetails[0].jobTitle);
    }
  }, [jobDetails, setJob]);

 
  const handleSelectJob = (jobTitle) => {
    setSelectedJob(jobTitle);
    setJob(jobTitle);
    localStorage.setItem('selectedJob', jobTitle); 
  };

  return (
    <div className="relative h-14 sm:h-[calc(100vh-120px)] py-4">
      <div className="md:inline hidden">
        <button
          onClick={() => setSidebarCollapsed(prev => !prev)}
          className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 hover:bg-gray-50 transition-colors"
        >
          {isSidebarCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          )}
        </button>

        <div
          className={`
            transition-all duration-300 ease-in-out
            md:h-[calc(100vh-4rem)] bg-white shadow-lg
            ${isSidebarCollapsed ? 'md:w-16' : 'md:w-64'}
            w-full h-[80px] md:h-full
            flex md:flex-col
            overflow-x-auto md:overflow-y-auto md:overflow-x-hidden
            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
          `}
        >
          {jobDetails.length > 0 ? (
            jobDetails.map((jobItem, index) => (
              <div
                key={index}
                className={`
                  group flex items-center
                  min-w-[200px] md:min-w-0
                  m-2 p-3 rounded-lg cursor-pointer
                  transition-all duration-200
                  ${selectedJob === jobItem.jobTitle
                    ? 'bg-blue-50 text-blue-700 shadow-md'
                    : 'hover:bg-gray-50 text-gray-700'}
                `}
                onClick={() => handleSelectJob(jobItem.jobTitle)}
              >
                <Briefcase
                  className={`
                    flex-shrink-0 w-5 h-5
                    ${selectedJob === jobItem.jobTitle ? 'text-blue-500' : 'text-gray-400'}
                  `}
                />
                <span
                  className={`
                    ml-3 truncate
                    ${isSidebarCollapsed ? 'md:hidden' : ''}
                    ${selectedJob === jobItem.jobTitle ? 'font-medium' : ''}
                  `}
                >
                  {jobItem.jobTitle}
                </span>
              </div>
            ))
          ) : (
            <div className={`w-full text-center mt-5 font-bold ${isSidebarCollapsed ? 'md:hidden' : ''}`}>
              No Jobs Available.
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-1 items-center justify-center md:hidden">
        <p className="font-bold">Select:</p>
        <div className="w-48">
          <select
            value={selectedJob}
            onChange={(e) => handleSelectJob(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {jobDetails.map((jobItem, index) => (
              <option key={index} value={jobItem.jobTitle}>
                {jobItem.jobTitle}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SidebarA;
