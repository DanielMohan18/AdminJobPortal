import React, { useState } from 'react';
import JobCards from './JobCards';
import Popup from './Popup';

const YourComponent = () => {
    const [popUp,setpopUp]=useState(false);

  return (
    <div className="w-screen flex sm:flex-row flex-col">

      {/* Sidebar */}
      <div className="sm:w-2/12 pl-10 sm:p-2  sm:h-screen h-12 border-b-2 sm:border-r-2 flex items-center sm:items-start sm:flex-col">
        <button 
        onClick={()=>{setpopUp(true)}} 
        className="relative  w-12 sm:w-16 md:w-24 lg:w-32 inline-flex items-center justify-center p-0.5 mb-2 sm:mx-auto my-2 sm:my-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span 
          className="relative text-center w-full sm:py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add
          </span>
        </button>
      </div>

      {/* Main content area */}
      <div className="sm:w-10/12 w-full px-4 py-4 ">
        {/* popup for add */}
       {popUp? <Popup popUp={popUp} setpopUp={setpopUp}/> :null}       
        {/* Cards */}
        <JobCards  />
      </div>
    </div>
  );
};

export default YourComponent;