import React from 'react'
import { TiTick } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'

const Sunform = ({setAdd}) => {
    const navigate=useNavigate();
    const Handler=()=>{
        navigate('/student/job');
        setAdd(false);
    }
  return ( 
    <div className="flex items-center justify-center w-full my-52 text-green-700  rounded-lg  text-center flex-col">
  <TiTick size={48} className="mb-4" />
  <h2 className="text-2xl font-semibold mb-2">Submission Completed!</h2>
  <p className="text-lg">Thank you for submitting the form.</p>

  <button
    onClick={() => Handler()}
    className="mt-6 px-4 py-2  font-medium rounded-md  text-black hover:scale-[1.04] hover:underline transition-colors"
  >
    Go Back
  </button>
</div>
  )
}

export default Sunform
