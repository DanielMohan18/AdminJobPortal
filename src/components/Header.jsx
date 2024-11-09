import React from 'react';
import entBG from '../assets/entBG.webp';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const BackImg = {
    backgroundImage: `url(${entBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  // Navlinks 
 const navLinks = location.pathname.startsWith('/student')
    ? [
        { path: '/', label: 'Home' },
        { path: '/student/job', label: 'Jobs' },
        { path: '/student/assignment', label: 'Assignment' }
      ]
    : [
        { path: '/', label: 'Home' },
        { path: '/job', label: 'Jobs' },
        { path: '/assignment', label: 'Assignment' }
      ];

  return (
    <div
      style={BackImg}
      className={`${location.pathname === '/' ? "hidden" : "block"} flex items-center justify-between px-10 py-4 `}
    >
      {/* Title */}
      <div className='text-2xl text-white font-bold'>ENTNT</div>

      {/* Nav Options */}
      <div className='flex gap-2 text-sm sm:text-xl sm:gap-6 my-auto ml-6 sm:ml-0'>
        {navLinks.map((link) => (
          <div
            key={link.path}
            onClick={() => navigate(link.path)}
            className={`${location.pathname === link.path ? "text-yellow-300 font-semibold scale-110" : "text-white"} cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:text-yellow-300`}
          >
            {link.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
