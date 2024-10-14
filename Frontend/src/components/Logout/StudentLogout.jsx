import React, { useEffect } from 'react';
import url from '../axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const StudentLogout = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await url.post('/api/v1/students/logout', {}, { withCredentials: true });
        navigate('/StudentLogin'); 
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    handleLogout();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800">{t('studentLogout.title')}</h1>
        <p className="text-gray-600 mt-4">{t('studentLogout.message')}</p>
      </div>
    </div>
  );
};

export default StudentLogout;
