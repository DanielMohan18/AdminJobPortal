import React from 'react';
import CandidateList from './CandidateList';
import { useRecoilValue } from 'recoil';
import UserAtom from '../atoms/UserAtom';
import { useParams } from 'react-router-dom';

const Details = () => {
    const jobDetails = useRecoilValue(UserAtom);
    const { id } = useParams(); 
    const filteredDetails = jobDetails.filter(candidate => candidate.id === parseInt(id));

    return (
        <div className="min-h-screen w-full bg-[#fffff] flex flex-col items-center py-8 border border-gray-100">
            {/* Header Section */}
            <div className="bg-white border shadow-xl rounded-lg p-8 w-11/12 max-w-4xl text-center transform transition duration-500 hover:scale-105 mb-8">
                <h1 data-aos="fade-down" className="text-3xl md:text-4xl font-extrabold   ">
                    {filteredDetails[0].jobTitle} Role
                </h1>
                <h3 data-aos="fade-down" className="text-lg md:text-2xl text-text mt-2">
                    Total Students Applied: <span className="text-black font-semibold">{filteredDetails[0].numCandidatesApplied}</span>
                </h3>
            </div>

            {/* Candidate List Section */}
            <div data-aos="fade-up" data-aos-delay="250" className="w-11/12  max-w-8xl p-4 md:p-10 space-y-6 border border-gray-200 rounded-lg shadow-xl overflow-y-auto max-h-[70vh]">
                <CandidateList />
            </div>
        </div>
    );
};

export default Details;
