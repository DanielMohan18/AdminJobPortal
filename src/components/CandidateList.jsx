import React,{useEffect} from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaSkullCrossbones } from "react-icons/fa";
import CandidateAtom from '../atoms/CandidateAtom';

const CandidateList = () => {  
    return (
      <div className="container mx-auto p-2 ">
        <h1 className=" text-xl md:text-2xl font-bold mb-6 text-black">Candidate List:</h1>
        <CandidateCard />
      </div>
    );
  };

  const CandidateCard = () => {
   
    // const handleDownload = (resumeLink,candidateName) => {
    //   if (resumeLink) {
    //     const url = resumeLink;
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.download = `${candidateName}_resume`;
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //     URL.revokeObjectURL(url);
    //   }
    // };

    const {id} =useParams();
    
    const [candidateDetails,setCandidateDetails]=useRecoilState(CandidateAtom);

    useEffect(()=>{
        const dataFetch = async () => {
            try {
              const response = await axios.get('http://localhost:3040/candidates');
              console.log(response);
              if (response.data) {
                setCandidateDetails(response.data);
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
          <div>
            {filteredCandidates.map((res, index) => (
              <div key={index} className="  group border rounded-lg p-4 shadow-lg my-2 flex flex-col gap-2 md:flex-row items-center justify-between hover:scale-105 transform-all duration-150">
                <h2 
                onClick={()=>{navigate(`/candidateComDetails/${res.cid}`)}}
                className="text-lg font-semibold cursor-pointer hover:text-slate-900">
                  {res.candidateName}
                </h2>
                <p>Application Date: {res.applicationDate}</p>
                <p>Status: <span className="font-semibold">{res.status}</span></p>
    
                <div>
                  {res.resumeLink ? (
                    <a
                      // onClick={handleDownload(res.candidates[index].resumeLink, res.candidates[index].candidateName)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      href={`${res.resumeLink}`}
                    >
                      Download Resume
                    </a>
                  ) : (
                    <p className="text-gray-500">No resume available</p>
                  )}
                </div>
                <MdKeyboardArrowRight className="transform  text-black transition-transform duration-200 group-hover:rotate-180" /> 
              </div>
            ))}
          </div>
        ) : (
          <div className="transform-all flex flex-col duration-200 text-center text-slate-500 text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold ">
            <p className='flex items-center justify-center gap-4 mb-4'>Ooops <FaSkullCrossbones/> </p>
            <p>No candidates have applied yet.</p>
          </div>
        )}
      </div>
    );
  };
  
  export default CandidateList;