import React, { useState } from 'react';
import AdminSignup from './AdminSignup'; // Import the AdminSignup component
import StudentSignup from './StudentSignup'; // Import the StudentSignup component
import { Link } from 'react-router-dom';

const MainSignupPage = () => {
  const [role, setRole] = useState(null);

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-2xl">
        {/* Role Selection */}
        {!role && (
          <>
            <div className="flex justify-center mb-6">
              <h1 className="text-4xl font-extrabold text-center mb-2 text-blue-600 shadow-md p-2 rounded-md">
                Sign Up
              </h1>
            </div>

            <p className="text-center text-lg mb-6 text-gray-600">
              Choose your role to create an account:
            </p>

            <div className="flex flex-col md:flex-row justify-around items-center mb-8 space-y-6 md:space-y-0">
              {/* Admin Signup */}
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn.vectorstock.com/i/1000x1000/22/20/administrator-avatar-icon-flat-style-vector-27512220.webp" // Admin avatar URL
                  alt="Admin Avatar"
                  className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500 shadow-lg transition-transform duration-300 transform hover:scale-110 hover:border-blue-700"
                />
                <button
                  onClick={() => handleRoleSelection('admin')}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors duration-200 text-lg shadow-md hover:bg-blue-600 hover:shadow-lg hover:text-gray-100"
                >
                  Sign Up as Admin
                </button>
              </div>

              {/* Student Signup */}
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn.vectorstock.com/i/preview-1x/22/75/graduate-student-with-graduation-cap-icon-vector-32322275.webp" // Student avatar URL
                  alt="Student Avatar"
                  className="w-24 h-24 rounded-full mb-4 border-4 border-orange-500 shadow-lg transition-transform duration-300 transform hover:scale-110 hover:border-orange-700"
                />
                <button
                  onClick={() => handleRoleSelection('student')}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg transition-colors duration-200 text-lg shadow-md hover:bg-orange-600 hover:shadow-lg hover:text-gray-100"
                >
                  Sign Up as Student
                </button>
              </div>
            </div>

            {/* Already have an account */}
            <div className="text-center mt-4">
              <p className="text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 underline hover:text-blue-600">
                  Log in
                </Link>
              </p>
            </div>
          </>
        )}

        {/* Conditionally render signup form based on the selected role */}
        {role === 'admin' && <AdminSignup />}
        {role === 'student' && <StudentSignup />}
      </div>
    </div>
  );
};

export default MainSignupPage;
