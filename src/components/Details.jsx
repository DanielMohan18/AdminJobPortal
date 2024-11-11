import React from 'react';
import CandidateList from './CandidateList';
import { useRecoilValue} from 'recoil';
import UserAtom from '../atoms/UserAtom';
import { useParams,useNavigate } from 'react-router-dom';
import CandidateAtom from '../atoms/CandidateAtom';
import { ArrowLeft } from 'lucide-react';
import { FaRegUserCircle } from "react-icons/fa";


const Details = () => {
  const navigate = useNavigate();
  const jobDetails = useRecoilValue(UserAtom);
  const candidateDetails = useRecoilValue(CandidateAtom);
  const { id } = useParams();
  
  const filteredDetails = jobDetails.find(candidate => candidate.id === parseInt(id));
  const candidateData = candidateDetails.filter(res => res.jobId === parseInt(id));
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
     
      <button 
        onClick={() => navigate('/job')}
        className="mb-4 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 hover:bg-red-300 p-1.5 rounded-full"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Jobs</span>
      </button>
      
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div data-aos="fade-down" className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
         
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {filteredDetails?.jobTitle} Role
          </h1>

          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
            <FaRegUserCircle className="text-blue-500" />
            <span className="text-blue-700 font-medium">
              Total Applications: {candidateData.length}
            </span>
          </div>
        </div>
      </div>
      <CandidateList jobId={id} />
    </div>
  );
};

export default Details;