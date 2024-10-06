import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-600 text-white p-10 mb-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* School Logo */}
        <div className="flex items-center space-x-10">
          <img
            src="your-school-logo-url.png" // Replace with your logo URL
            alt="School Logo"
            className="w-12 h-12 mr-2"
          />
          <span className="ml-1 text-xl text-pretty font-bold">
            Shri Ram Vishal Singh Shrimati Ramdhani Devi Inter College
          </span>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links - visible on larger screens */}
        <nav className="hidden md:flex justify-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 text-2xl duration-200 ${
                isActive ? 'text-orange-700' : 'text-gray-900'
              } hover:text-orange-700 hover:font-bold`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 text-2xl duration-200 ${
                isActive ? 'text-orange-700' : 'text-gray-900'
              } hover:text-orange-700 hover:font-bold`
            }
          >
            About
          </NavLink>
          {/* <NavLink
          to="/dashboard">
          </NavLink> */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 text-2xl duration-200 ${
                isActive ? 'text-orange-700' : 'text-gray-900'
              } hover:text-orange-700 hover:font-bold`
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 text-2xl duration-200 ${
                isActive ? 'text-orange-700' : 'text-gray-900'
              } hover:text-orange-700 hover:font-bold`
            }
          >
            Career Mentor
          </NavLink>
          
        </nav>

        {/* Login & Signup Links - visible on larger screens */}
        <div className="hidden md:flex ml-16 space-x-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `block py-2 px-4 text-2xl duration-200 border border-transparent hover:border-gray-300 hover:bg-white ${
                isActive ? 'text-orange-700' : 'text-gray-900'
              } hover:text-orange-700 rounded-lg hover:font-bold`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `block py-2 px-4 text-2xl duration-200 border border-transparent hover:border-gray-300 hover:bg-white ${
                isActive ? 'text-orange-700' : 'text-gray-900'
              } hover:text-orange-700 rounded-lg hover:font-bold`
            }
          >
            Signup
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu - visible only on small and medium screens */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-4 bg-gray-600 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 text-lg duration-200 ${
                isActive ? 'text-orange-700' : 'text-gray-900'
              } hover:text-orange-700 hover:font-bold`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 text-lg duration-200 ${
                isActive ? 'text-orange-700' : 'text-gray-900'
              } hover:text-orange-700 hover:font-bold`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 text-lg duration-200 ${
                isActive ? 'text-orange-700' : 'text-gray-900'
              } hover:text-orange-700 hover:font-bold`
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              `block py-2 text-lg duration-200 ${
                isActive ? 'text-orange-700' : 'text-gray-900'
              } hover:text-orange-700 hover:font-bold`
            }
          >
            Career Mentor
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `block py-2 text-lg duration-200 ${
                isActive ? 'text-orange-700' : 'text-gray-900'
              } hover:text-orange-700 hover:font-bold`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `block py-2 text-lg duration-200 ${
                isActive ? 'text-orange-700' : 'text-gray-900'
              } hover:text-orange-700 hover:font-bold`
            }
          >
            Signup
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;