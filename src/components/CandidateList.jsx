import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import CandidateAtom from '../atoms/CandidateAtom';
import { XCircle, User, Calendar, FileText, ChevronDown } from 'lucide-react';
import InputF from './InputF';

const CandidateList = ({ jobId }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [candidateDetails, setCandidateDetails] = useRecoilState(CandidateAtom);
  const [status, setStatus] = useState('');
  
  const filteredCandidates = candidateDetails.filter(
    candidate => candidate.jobId === parseInt(jobId)
  );

  const getStatusColor = (status) => {
    const colors = {
      'Pending': 'bg-yellow-100 text-yellow-800',
      'In Progress': 'bg-blue-100 text-blue-800',
      'Shortlisted': 'bg-green-100 text-green-800',
      'Rejected': 'bg-red-100 text-red-800',
      'On Hold': 'bg-gray-100 text-gray-800',
      'Selected': 'bg-purple-100 text-purple-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const updateStatus = (e, candidateId) => {
    e.preventDefault();
    const updatedCandidates = candidateDetails.map(candidate => 
      candidate.cid === candidateId 
        ? { ...candidate, status }
        : candidate
    );
    setCandidateDetails(updatedCandidates);
    localStorage.setItem('Candidatedetails', JSON.stringify(updatedCandidates));
  
    setSelectedCandidate(null);
  };

  if (filteredCandidates.length === 0) {
    return (
      <div data-aos="fade-up" className="text-center py-12 bg-white rounded-xl shadow-lg">
        <XCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700">No Applications Yet</h3>
        <p className="text-gray-500 mt-2">No candidates have applied for this position.</p>
      </div>
    );
  }
  
  return (
    <div data-aos="fade-up" data-aos-delay="300" className="space-y-4 container max-h-[calc(100vh-40vh)] overflow-y-auto border p-3 border-slate-300 rounded-lg">
      {filteredCandidates.map((candidate) => (
        <div key={candidate.cid} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div 
            className="p-4 cursor-pointer hover:bg-gray-50"
            onClick={() => {
              setSelectedCandidate(selectedCandidate === candidate.cid ? null : candidate.cid);
              setStatus(candidate.status);
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{candidate.candidateName}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-sm text-gray-500">Applied on {candidate.applicationDate}</p>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(candidate.status)}`}>
                      {candidate.status}
                    </span>
                  </div>
                </div>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  selectedCandidate === candidate.cid ? 'rotate-180' : ''
                }`}
              />
            </div>
          </div>

          {selectedCandidate === candidate.cid && (
            <div className="px-4 pb-4 border-t">
              <div className="max-h-[420px] overflow-y-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputF
                    label="Full Name" 
                    value={candidate.profile.name}
                  />
                  <InputF
                    label="Email" 
                    value={candidate.profile.email}
                  />
                  <InputF
                    label="Contact" 
                    value={candidate.profile.contact}
                  />
                  <InputF
                    label="Skills" 
                    value={candidate.profile.skills.join(', ')}
                  />
                  <InputF
                    label="Experience" 
                    value={candidate.profile.experience}
                  />
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-gray-700 text-sm">Status</label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg shadow-sm p-2 bg-blue-200 cursor-pointer"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Rejected">Rejected</option>
                      <option value="On Hold">On Hold</option>
                      <option value="Selected">Selected</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    Application Date: {candidate.applicationDate}
                  </span>
                </div>

                {candidate.resumeLink && (
                  <div className="flex items-center gap-2 mt-4">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <a
                      href={candidate.resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Download Resume
                    </a>
                  </div>
                )}

                <div className="flex justify-center mt-6">
                  <button
                    onClick={(e) => updateStatus(e, candidate.cid)}
                    className="w-full sm:w-60 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 focus:outline-none"
                  >
                    Update Status
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CandidateList;