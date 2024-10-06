import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Footer() {
  const [schoolInfo, setSchoolInfo] = useState({
    location: '',
    email: '',
    contactNo: '',
  });

  useEffect(() => {
    // Fetch school information from the API
    const fetchSchoolInfo = async () => {
      try {
        const response = await fetch(''); // Replace with your API endpoint
        const data = await response.json();
        setSchoolInfo({
          location: data.location,
          email: data.email,
          contactNo: data.contactNo,
        });
      } catch (error) {
        console.log('Error fetching school info:', error)
      }
    };

    fetchSchoolInfo();
  }, []);

  return (
    <footer className="bg-gray-600 text-white p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section: School Name and Info */}
        <div className="flex flex-col mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <img
              src="your-school-logo-url.png" // Replace with your logo URL
              alt="School Logo"
              className="w-12 h-12 mr-2"
            />
            <span className="text-2xl text-pretty">Shri Ram Vishal Singh Shrimati Ramdhani Devi Inter College</span>
          </div>
          <div className="flex flex-col mt-2 space-y-2">
            <span>Location: {schoolInfo.location}</span>
            <span>Email: {schoolInfo.email}</span>
            <span>Contact No: {schoolInfo.contactNo}</span>
          </div>
        </div>

        

        {/* Right Section: Navigation Links */}
        <div className="mt-16 flex flex-col md:flex-row md:space-x-8">
          <Link to="/terms" className="hover:underline mb-2 md:mb-0">Terms and Conditions</Link>
          <Link to="" className="hover:underline mb-2 md:mb-0 sm:hidden md:block">Home</Link>
          <Link to="/about" className="hover:underline mb-2 md:mb-0 sm:hidden md:block">About</Link>
          <Link to="/contact" className="hover:underline sm:hidden md:block">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
