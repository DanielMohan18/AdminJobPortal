import React from 'react'
import entBG from '../assets/entBG.webp'
import { useLocation,useNavigate} from 'react-router-dom';
const Header = () => {
   const navigate=useNavigate(); 
   const location=useLocation();
   const BackImg = {
    backgroundImage: `url(${entBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <div style={BackImg} className={`${location.pathname==='/'?"hidden":"block"} flex items-center justify-between px-10 py-4 `}>
      {/* title */}
      <div  className=' text-2xl text-white font-bold'>
        ENTNT
      </div>
 
     {/* Nav Options */}
      <div className='flex gap-2 text-sm sm:text-xl sm:gap-6 my-auto  ml-6 sm:ml-0'>
      <div onClick={()=>{navigate('/')}} className='text-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:text-yellow-300 hover:font-semibold' >
         Home
      </div>  

      <div onClick={()=>{navigate('/job')}} className={`${location.pathname==='/job' ? "text-yellow-300 font-semibold scale-110":"text-white"} cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:text-yellow-300 `}>
              <p>Jobs</p>        
      </div>
     
      <div onClick={() => { navigate('/assignment') }} 
         className={`${location.pathname === '/assignment' ? "text-yellow-300 font-semibold scale-110" : "text-white"} cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:text-yellow-300 `}>
       <p>Assignment</p>      
      </div>
      </div>

    </div>
  )
}

export default Header