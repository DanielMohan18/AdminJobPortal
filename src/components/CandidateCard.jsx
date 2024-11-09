import React,{useEffect} from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaSkullCrossbones } from "react-icons/fa";
import CandidateAtom from '../atoms/CandidateAtom';

const CandidateCard = () => {

    const {id} =useParams();
    
    const [candidateDetails,setCandidateDetails]=useRecoilState(CandidateAtom);

    useEffect(()=>{
        const dataFetch = async () => {
            try {
              const response = await axios.get('http://localhost:3040/candidates');
              console.log(response);
              if (response.data) {
                setCandidateDetails(response.data);
                console.log(JSON.stringify(response.data));
                localStorage.setItem('Candidatedetails', JSON.stringify(response.data)); 
              }
            } catch (err) {
              console.error("Failed to fetch details", err);
            }
          };
          dataFetch();
       },[])

        const filteredCandidates = candidateDetails.filter(candidate => candidate.jobId === parseInt(id));

        const navigate=useNavigate();

    return (
        <div className=''>
        {filteredCandidates.length > 0 ? (
          <div className='space-y-3'>
{filteredCandidates.map((res, index) => (
  <div 
    key={index} 
    className="group border border-black bg-white text-black rounded-lg p-4 shadow-lg hover:scale-[1.01] transition-transform duration-150"
  >
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 justify-between">
      {/* Candidate Name */}
      <h2 
        onClick={() => { navigate(`/candidateComDetails/${res.cid}/${id}`) }}
        className="text-md sm:text-lg font-semibold cursor-pointer hover:underline flex-1 min-w-[120px] truncate"
      >
        {res.candidateName}
      </h2>

      {/* Application Date */}
      <p className="text-sm sm:text-md flex-1 font-medium min-w-[120px]">
        Application Date: {res.applicationDate}
      </p>

      {/* Status */}
      <p className="text-sm sm:text-md flex-1  min-w-[120px]">
        Status: 
        <span 
          className={`font-semibold py-1 px-2 mx-1 rounded-full text-sm lg:text-[14px] 
            ${res.status === "Shortlisted" ? "bg-green-600 text-green-100" : 
              res.status === "Rejected" ? "bg-red-600 text-red-100" : 
              "bg-gray-600 text-gray-100"}`
          }
        >
          {res.status}
        </span>
      </p>

      {/* Resume Download Button */}
      <div className="flex-1 min-w-[150px] text-center">
        {res.resumeLink ? (
          <a
            onClick={(event) => {
              event.preventDefault();  
              window.open(res.resumeLink, '_blank');  
            }}
            className="px-4 py-2  border bg-blue-400 border-black text-sm md:text-md rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
            href={`${res.resumeLink}`}
          >
            Download Resume
          </a>
        ) : (
          <p className="text-gray-500">No resume available</p>
        )}
      </div>

      {/* Arrow Icon */}
      <MdKeyboardArrowRight className="transform transition-transform duration-200 group-hover:rotate-180" />
    </div>
  </div>
))}

          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-black text-[16px] sm:text-3xl md:text-4xl font-bold space-y-4 mt-8">
               <p className="flex items-center gap-2">
                   Ooops <FaSkullCrossbones className="text-3xl" />
               </p>
                 <p >No candidates have applied yet.</p>
          </div>
        )}
      </div>
    );
  };

export default CandidateCard;  