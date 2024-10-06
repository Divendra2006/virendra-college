import React, { useState } from 'react';
import AdminLogin from './AdminLogin'; // Import AdminLogin component
import StudentLogin from './StudentLogin'; // Import StudentLogin component

const MainLoginPage = () => {
  const [profile, setProfile] = useState(null); // State to track selected profile (Admin/student)

  const handleProfileSelect = (selectedProfile) => {
    setProfile(selectedProfile);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700">Login</h1>

        {!profile && (
          <div>
            <p className="text-xl text-center mb-6 font-semibold">Select Your Profile:</p>
            <div className="flex justify-around mb-12">
              {/* Admin Avatar */}
              <div
                onClick={() => handleProfileSelect('admin')}
                className="cursor-pointer text-center hover:scale-110 transition-transform duration-200"
              >
                <img
                  src="https://via.placeholder.com/120" // Replace with actual admin avatar
                  alt="Admin Avatar"
                  className="w-28 h-28 mx-auto mb-3 rounded-full border-4 border-blue-500 shadow-lg transition-transform duration-200"
                />
                <p className="font-semibold text-lg">Admin</p>
              </div>

              {/* Student Avatar */}
              <div
                onClick={() => handleProfileSelect('student')}
                className="cursor-pointer text-center hover:scale-110 transition-transform duration-200"
              >
                <img
                  src="https://via.placeholder.com/120" // Replace with actual student avatar
                  alt="Student Avatar"
                  className="w-28 h-28 mx-auto mb-3 rounded-full border-4 border-blue-500 shadow-lg transition-transform duration-200"
                />
                <p className="font-semibold text-lg">Student</p>
              </div>
            </div>
          </div>
        )}

        {/* Conditionally render AdminLogin or StudentLogin */}
        {profile === 'admin' && <AdminLogin />}
        {profile === 'student' && <StudentLogin />}

        {/* Option to change profile */}
        {profile && (
          <div className="text-center mt-6">
            <button
              onClick={() => setProfile(null)}
              className="text-orange-500 underline font-medium hover:text-orange-600"
            >
              Switch Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLoginPage;