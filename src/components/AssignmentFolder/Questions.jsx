import React from 'react';
import { useRecoilValue } from 'recoil';
import AssignmentAtom from '../../atoms/AssignmentAtom';
import { Button } from 'flowbite-react';
import { ImCross } from 'react-icons/im';
import { FaFireAlt } from 'react-icons/fa';
import AddMcq from './AddMcq';
import PopAtom from '../../atoms/PopAtom';
import { useNavigate, useParams } from 'react-router-dom';
import JobAtom from '../../atoms/JobAtom';
import NoMcq from './NoMcq';
import NotificationM from '../Notification';
import NoteAtom from '../../atoms/NoteAtom';
import EditAtom from '../../atoms/EditAtom';

const Questions = () => {
  const navigate = useNavigate();
  const job = useRecoilValue(JobAtom);
  const pop = useRecoilValue(PopAtom);
  const note = useRecoilValue(NoteAtom);
  const edit = useRecoilValue(EditAtom);
  console.log(job);
 

  const assignmentDetails = useRecoilValue(AssignmentAtom);
  const filteredData = assignmentDetails.filter((res) => res.jobTitle === String(job)); // Ensure `job` is a string or get a specific property
  console.log(filteredData);
  return (
    <div className="flex flex-col gap-4 p-6 w-full relative">
      {note && <NotificationM context="Added Successfully" top={2} />}
      {edit && <NotificationM context="Deleted" top={2} />}
      {pop && <AddMcq />}

      <div className="font-bold text-2xl">
        {job ? job.jobTitle : "Select"} 
        <span className="text-gray-400"> Assignment</span>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-200px)] p-2 relative">
        {job ? (
          filteredData.length > 0 ? (
            filteredData.map((res, index) => (
              <div
                key={res.id}
                className="w-full bg-white border border-gray-200 p-6 shadow-lg rounded-lg mx-auto max-w-2xl"
              >
                <h1 className="font-semibold text-xl mb-4">
                  Q{index + 1}. {res.question}?
                </h1>
                <div className="flex flex-col gap-2">
                  {[res.opt1, res.opt2, res.opt3, res.opt4].map((option, i) => (
                    <div
                      key={i}
                      className={`rounded-lg border ${
                        option.bool ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}
                    >
                      <div className="p-3 flex justify-between items-center gap-2">
                        <div>{i + 1}. {option.text}</div>
                        {option.bool ? (
                          <FaFireAlt className="hidden sm:block text-green-900 text-sm sm:text-lg" />
                        ) : (
                          <ImCross className="hidden sm:block text-red-900 text-sm md:text-lg" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <Button
                    onClick={() => {
                      navigate(`/editmcq/${res.id}/${job.jobTitle}`);
                    }}
                    color="success"
                    className="bg-green-500 hover:bg-green-600 text-white w-32"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <NoMcq />
          )
        ) : (
          <div className="text-center text-gray-500">No role was selected</div>
        )}
      </div>
    </div>
  );
};

export default Questions;
