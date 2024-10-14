import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [location, setLocation] = useState(''); 

  useEffect(() => {
    const fetchSchoolInfo = async () => {
      try {
        const response = await fetch('your-api-endpoint'); 
        const data = await response.json();
        setLocation(data.location); 
      } catch (error) {
        console.log('Error fetching school info:', error);
      }
    };

    fetchSchoolInfo();
  }, []);

  return (
    <footer className="bg-gray-700 text-white p-4 md:py-6">
      <div className="max-w-full md:max-w-6xl mx-auto flex flex-col items-start">
        <div className="flex flex-col mb-4 w-full">
          <div className="flex ml-4 space-x-3  items-center mb-4">
            <img
              src="your-school-logo-url.png" 
              alt="School Logo"
              className="w-12 h-12 mr-2"
            />
            <span className="text-lg md:text-xl font-semibold">
              Shri Ram Vishal Singh Shrimati Ramdhani Devi Yadav Intermediate College
            </span>
          </div>
          <div className="text-sm ml-4 md:text-base mt-2">
            <span>Location: {location}</span>
          </div>
          <Link to="/terms" className="ml-4 hover:underline mt-2">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;





