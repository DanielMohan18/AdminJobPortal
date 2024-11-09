import React from 'react'
import entBG from '../assets/entBG.webp'
import { useNavigate, useParams } from 'react-router-dom';
import { FaUserLock } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
const Home = () => {
  const navigate=useNavigate();  
  
  const BackImg = {
    backgroundImage: `url(${entBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (

    <div className='h-screen w-screen'>
      <div style={BackImg} className='grid  grid-cols-1 md:grid-cols-2 gap-4 relative'>

       {/* left div */}
       <div className='flex items-center justify-center'>
        
        <div  className='w-1/2 mx-2 flex items-center gap-2 justify-center flex-col text-white font-bold text-5xl sm:text-7xl  xl:text-8xl'>
          <div data-aos="fade-left" data-aos-delay='200'>ENTNT</div>
          <div data-aos="fade-left" data-aos-delay='600'>CAREERS</div>
        </div>
        
        <span 
        data-aos="fade-up"   
        className="border border-r-2 border-white opacity-60 rounded-full absolute left-1/2 top-1/4 hidden md:block md:h-1/2">    
        </span>
       </div>
       {/* left Div End */}

       {/* right div */}
        <div className='w-1/2 flex mx-auto  items-center text-3xl sm:text-5xl  xl:text-6xl text-white'>
          <div className='mx-auto flex  gap-4 sm:gap-8 md:gap-12 lg:gap-20 flex-col'>
        {/* Job div */}
            <div 
            onClick={()=>{navigate('/job')}} 
            className="relative group text-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-110">
            <p data-aos="fade-right" data-aos-delay='600'className='flex gap-3 md:gap-6 text-center items-center justify-center' >
              <p>
                Job
              </p>
              <div className='flex items-center justify-center'>
              <FaUserLock className='text-4xl ' />
              </div>
            </p>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 ease-in-out opacity-0 group-hover:w-full group-hover:opacity-100"></span>
            </div>
        {/* Assignments Div  */}
            <div 
            onClick={()=>{navigate('/assignment')}} 
            className="relative group text-center cursor-pointer transform transition duration-300 ease-in-out ">
            <p data-aos="fade-right" data-aos-delay='600'className='flex gap-3 md:gap-6 text-center items-center justify-center' >
              <p>
                Assignment
              </p>
              <div className='flex items-center justify-center'>
              <FaUserLock className='text-4xl ' />
              </div>
            </p>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 ease-in-out opacity-0 group-hover:w-full group-hover:opacity-100 group-hover:scale-110"></span>
            </div>
        {/* Students div */}
            <div 
            onClick={()=>{navigate('/student/job')}} 
            className="relative group text-center cursor-pointer transform transition duration-300 ease-in-out ">
            <p data-aos="fade-right" data-aos-delay='600'className='flex gap-3 md:gap-6 text-center items-center justify-center' >
              <p>
                Student
              </p>
              <div className='flex items-center justify-center'>
              <FaUserGraduate className='text-4xl ' />
              </div>
            </p>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 ease-in-out opacity-0 group-hover:w-full group-hover:opacity-100 group-hover:scale-110"></span>
            </div>
          </div>
        </div>
        {/* right div end */}

      </div>
    </div>
  )
}

export default Home
