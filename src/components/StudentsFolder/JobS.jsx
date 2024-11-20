import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import UserAtom from '../../atoms/UserAtom';
import JobAtom from '../../atoms/JobAtom';
import axios from 'axios';
import Nojob from '../Nojob';

const JobS = () => {
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useRecoilState(UserAtom);
  const [jo, setJob] = useRecoilState(JobAtom);

  // useEffect(() => {
  //   const dataFetch = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3040/jobs');
  //       if (response.data) {
  //         setJobDetails(response.data);
  //         localStorage.setItem('Jobdetails', JSON.stringify(response.data));
  //       }
  //     } catch (err) {
  //       console.error('Failed to fetch details', err);
  //     }
  //   };
  //   dataFetch();
  // }, [setJobDetails]);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate('/')}
        className="mb-4 text-black hover:scale-[1.04] border p-1.5 hover:bg-green-200 rounded-full"
      >
        &larr; Back to Home
      </button>

      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Jobs</h1>

      {jobDetails.length > 0 ? (
        <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-1.5">
            {jobDetails.map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{job.jobTitle}</h2>
                  <p className="text-gray-600 mb-4">{job.jobDescription}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">ENTNT</p>
                    <button
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                      onClick={() => {
                        setJob(job);
                        navigate(`/student/${job.id}`);
                      }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Nojob />
      )}
    </div>
  );
};

export default JobS;
