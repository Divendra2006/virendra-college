import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Footer() {
  const [schoolInfo, setSchoolInfo] = useState({
    location: '',
  });

  useEffect(() => {
    // Fetch school information from the API
    const fetchSchoolInfo = async () => {
      try {
        const response = await fetch(''); // Replace with your API endpoint
        const data = await response.json();
        setSchoolInfo({
          location: data.location,
        });
      } catch (error) {
        console.log('Error fetching school info:', error);
      }
    };

    fetchSchoolInfo();
  }, []);

  return (
    <footer className="bg-gray-700 text-white py-4 md:py-6">
      <div className="max-w-full md:max-w-6xl mx-auto flex flex-col items-start">
        {/* Left Section: School Name and Info */}
        <div className="flex flex-col mb-4 w-full">
          <div className="flex items-center mb-2">
            <img
              src="your-school-logo-url.png" // Replace with your logo URL
              alt="School Logo"
              className="w-12 h-12 mr-2"
            />
            <span className="text-lg md:text-xl font-semibold">
              Shri Ram Vishal Singh Shrimati Ramdhani Devi Inter College
            </span>
          </div>
          <div className="text-sm md:text-base mt-2">
            <span>Location: {schoolInfo.location}</span>
          </div>
          <Link to="/terms" className="hover:underline mt-2">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;




