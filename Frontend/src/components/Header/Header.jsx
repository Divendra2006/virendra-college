import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUser, FaGraduationCap } from 'react-icons/fa'; 
import {useTranslation} from 'react-i18next'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {t} = useTranslation() 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  const handleSelectChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  return (
    <header className="bg-gray-700 text-white p-8 mb-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
       
        <div className="flex items-center space-x-6">
          <img
            src="your-school-logo-url.png" 
            alt="School Logo"
            className="w-14 h-14 mr-2"
          />
          <span className="text-xl text-white font-semibold">
           {t("schoolName")}
           </span>
        </div>

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

     
        <nav className="hidden md:flex justify-center space-x-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? 'text-orange-500' : 'text-white'
              } hover:text-orange-500 hover:font-semibold`
            }
          >
           {t("home")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? 'text-orange-500' : 'text-white'
              } hover:text-orange-500 hover:font-semibold`
            }
          >
            {t("about")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? 'text-orange-500' : 'text-white'
              } hover:text-orange-500 hover:font-semibold`
            }
          >
            {t("contactUs")}
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? 'text-orange-500' : 'text-white'
              } hover:text-orange-500 hover:font-semibold`
            }
          >
            {t("careerMentor")}
          </NavLink>
        </nav>

        <div className="hidden md:flex ml-16 space-x-6">
         
          <div className="relative">
            <div className="flex items-center space-x-2">
              <FaUser className="text-white text-2xl" />
              <select
                onChange={handleSelectChange}
                className="py-2 px-4 text-lg bg-white text-gray-900 border-2 border-gray-300 rounded-lg shadow-md appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
                style={{ backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB...)' }} // Custom dropdown arrow image
              >
                <option value="" className="text-gray-900">
                {t("admin")}
                </option>
                <option value="/dashboard">{t("dashboard")}</option>
                <option value="/AdminLogin">{t("login")}</option>
                <option value="/AdminSignup">{t("signup")}</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center space-x-2">
              <FaGraduationCap className="text-white text-2xl" />
              <select
                onChange={handleSelectChange}
                className="py-2 px-4 text-lg bg-white text-gray-900 border-2 border-gray-300 rounded-lg shadow-md appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
              >
                <option value="" className="text-gray-900">
                {t("student")}
                </option>
                <option value="/student/dashboard">{t("dashboard")}</option>
                <option value="/StudentLogin">{t("login")}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-4 bg-gray-700 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 text-lg duration-200 ${
                isActive ? 'text-orange-500' : 'text-white'
              } hover:text-orange-500 hover:font-semibold`
            }
          >
            {t("home")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 text-lg duration-200 ${
                isActive ? 'text-orange-500' : 'text-white'
              } hover:text-orange-500 hover:font-semibold`
            }
          >
            {t("about")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 text-lg duration-200 ${
                isActive ? 'text-orange-500' : 'text-white'
              } hover:text-orange-500 hover:font-semibold`
            }
          >
            {t("contactUs")}
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              `block py-2 text-lg duration-200 ${
                isActive ? 'text-orange-500' : 'text-white'
              } hover:text-orange-500 hover:font-semibold`
            }
          >
            {t("careerMentor")}
          </NavLink>

        
          <select
            onChange={handleSelectChange}
            className="py-2 px-4 bg-white text-gray-900 border border-transparent hover:border-gray-300 rounded-lg"
          >
            <option value="">{t("admin")}</option>
            <option value="/dashboard">{t("dashboard")}</option>
            <option value="/AdminLogin">{t("login")}</option>
            <option value="/AdminSignup">{t("signup")}</option>
          </select>

          <select
            onChange={handleSelectChange}
            className="py-2 px-4 bg-white text-gray-900 border border-transparent hover:border-gray-300 rounded-lg"
          >
            <option value=""> {t("student")}</option>
            <option value="/student/dashboard">{t("dashboard")}</option>
            <option value="/StudentLogin">{t("login")}</option>
          </select>
        </div>
      )}
    </header>
  );
}

export default Header;

