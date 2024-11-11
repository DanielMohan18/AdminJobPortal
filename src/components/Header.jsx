import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import entBG from '../assets/entBG.webp';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const BackImg = {
    backgroundImage: `url(${entBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  const navLinks = location.pathname.startsWith('/student')
    ? [
        { path: '/', label: 'Home' },
        { path: '/student/job', label: 'Jobs' },
        { path: '/student/assignment', label: 'Assignment' }
      ]
    : [
        { path: '/', label: 'Home' },
        { path: '/job', label: 'Jobs' },
        { path: '/assignment', label: 'Create Assignment' }
      ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  if (location.pathname === '/') return null;

  return (
    <div style={BackImg}>
      <div className="flex items-center justify-between px-4 sm:px-10 py-4">
        {/* Title */}
        <div 
          onClick={() => handleNavigation('/')} 
          className="text-2xl cursor-pointer text-white font-bold"
        >
          ENTNT
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-6 text-xl my-auto">
          {navLinks.map((link) => (
            (link.label === 'Assignment' && link.path === '/student/assignment') ? null : (
              <div
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`${
                  location.pathname === link.path 
                    ? "text-yellow-300 font-semibold scale-110" 
                    : "text-white"
                } cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:text-yellow-300`}
              >
                {link.label}
              </div>
            )
          ))}
        </div>

        {/* Mobile Menu Container */}
        <div className="sm:hidden relative" ref={menuRef}>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              {navLinks.map((link) => (
                (link.label === 'Assignment' && link.path === '/student/assignment') ? null : (
                  <div
                    key={link.path}
                    onClick={() => handleNavigation(link.path)}
                    className={`px-4 py-2 text-sm cursor-pointer ${
                      location.pathname === link.path 
                        ? "bg-gray-100 text-blue-600 font-semibold" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;