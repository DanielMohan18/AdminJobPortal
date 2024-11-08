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
          <div className='space-y-3'>
            {filteredCandidates.map((res, index) => (
              <div key={index} className="  group border rounded-lg p-4 shadow-lg  flex flex-col gap-4 md:flex-row items-center justify-between hover:scale-105 transform-all duration-150">
                <h2 
                onClick={()=>{navigate(`/candidateComDetails/${res.cid}`)}}
                className=" text-md sm:text-lg font-semibold text-white cursor-pointer hover:text-slate-900">
                  {res.candidateName}
                </h2>
                <p className='text-sm sm:text-md text-white'>Application Date: {res.applicationDate}</p>
                <p className='text-sm sm:text-md text-white' >Status: <span className="font-semibold">{res.status}</span></p>
    
                <div>
                  {res.resumeLink ? (
                    <a
                      // onClick={handleDownload(res.candidates[index].resumeLink, res.candidates[index].candidateName)}
                      className="px-4 py-2 bg-transparent border border-white text-sm md:text-md text-white rounded-lg hover:bg-blue-600"
                      href={`${res.resumeLink}`}
                    >
                      Download Resume
                    </a>
                  ) : (
                    <p className="text-gray-500">No resume available</p>
                  )}
                </div>
                <MdKeyboardArrowRight className="transform text-white transition-transform duration-200 group-hover:rotate-180" /> 
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
  
  export default CandidateList;

// import React, { useEffect } from 'react';
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { useRecoilState } from 'recoil';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { FaSkullCrossbones } from "react-icons/fa";
// import CandidateAtom from '../atoms/CandidateAtom';

// const CandidateList = () => {  
//     return (
//       <div className="container mx-auto p-4 bg-gray-50 shadow-md rounded-lg bg-transparent">
//         <h1 className="text-2xl md:text-3xl  font-extrabold mb-6 text-white">
//           Candidate List:
//         </h1>
//         <CandidateCard />
//       </div>
//     );
// };


// const CandidateCard = () => {
//     const { id } = useParams();
//     const [candidateDetails, setCandidateDetails] = useRecoilState(CandidateAtom);

//     useEffect(() => {
//         const dataFetch = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3040/candidates');
//                 if (response.data) {
//                     setCandidateDetails(response.data);
//                     localStorage.setItem('Candidatedetails', JSON.stringify(response.data)); 
//                 }
//             } catch (err) {
//                 console.error("Failed to fetch details", err);
//             }
//         };
//         dataFetch();
//     }, [setCandidateDetails]);

//     const filteredCandidates = candidateDetails.filter(candidate => candidate.jobId === parseInt(id));
//     const navigate = useNavigate();

//     return (
//         <div className="space-y-4">
//             {filteredCandidates.length > 0 ? (
//                 <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
//                     {filteredCandidates.map((res, index) => (
//                         <div
//                             key={index}
//                             className="border group   border-gray-200 rounded-lg p-6 shadow-lg transition-transform bg-transparent transform hover:scale-105 hover:shadow-xl"
//                         >
//                             <h2 
//                                 onClick={() => { navigate(`/candidateComDetails/${res.cid}/${id}`); }}
//                                 className=" text-xl font-bold text-slate-200 cursor-pointer hover:text-white"
//                             >
//                                 {res.candidateName}
//                             </h2>
//                             <p className="text-md text-slate-100 font-medium">
//                                 Application Date: <span className="text-black font-medium sm:font-semibold">{res.applicationDate}</span>
//                             </p>
//                             <p className="text-sm sm:text-md font-medium text-slate-100">
//                                 Status: <span className="font-semibold text-black">{res.status}</span>
//                             </p>
//                             <div className="mt-4">
//                                 {res.resumeLink ? (
//                                     <a
//                                         className="inline-block px-4 py-2 text-md font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
//                                         href={`${res.resumeLink}`}
//                                     >
//                                         Download Resume
//                                     </a>
//                                 ) : (
//                                     <p className=" text-md text-gray-500">No resume available</p>
//                                 )}
//                             </div>
//                             <div className='flex items-end justify-end'>
//                             <MdKeyboardArrowRight className="text-white transition-transform transform duration-200 group-hover:rotate-180" />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//               <div className="flex flex-col items-center justify-center text-black text-[16px] sm:text-3xl md:text-4xl font-bold space-y-4 mt-8">
//               <p className="flex items-center gap-2">
//                   Ooops <FaSkullCrossbones className="text-3xl" />
//               </p>
//                 <p >No candidates have applied yet.</p>
//               </div>
//             )}
//         </div>
//     );
// };

// export default CandidateList;
