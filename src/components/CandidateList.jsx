import CandidateCard from "./CandidateCard";

const CandidateList = () => {  
    return (
      <div className="container mx-auto p-2 ">
        <h1 className=" text-xl md:text-2xl font-bold mb-6 text-black">Candidate List:</h1>
        <CandidateCard />
      </div>
    );
  };  
  export default CandidateList;

