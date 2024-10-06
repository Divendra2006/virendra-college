import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    const handleLogout = async () => {
      try {
        
        await axios.post('http://localhost:8000/api/v1/students/logout', {}, {
          withCredentials: true, 
        });

        navigate('/login'); 
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    
    handleLogout();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800">Logging out...</h1>
        <p className="text-gray-600 mt-4">Please wait while we log you out.</p>
      </div>
    </div>
  );
};

export default StudentLogout;