import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate()
 
  const handleLogoutClick = () => {
    navigate('/admin/logout');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
        <h1 className="text-2xl font-bold text-center text-black mb-6">Admin Dashboard</h1>
         
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <NavLink
              to="/uploadMaterial"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 text-xl font-semibold block text-center border-b-2 border-blue-600'
                  : 'text-blue-600 text-xl font-semibold block text-center hover:text-red-600 transition-colors duration-200'
              }
            >
              Upload Material
            </NavLink>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <NavLink
              to="/addStudent"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 text-xl font-semibold block text-center border-b-2 border-blue-600'
                  : 'text-blue-600 text-xl font-semibold block text-center hover:text-red-600 transition-colors duration-200'
              }
            >
              Upload Student Details
            </NavLink>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <NavLink
              to="/getUniqueStudent"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 text-xl font-semibold block text-center border-b-2 border-blue-600'
                  : 'text-blue-600 text-xl font-semibold block text-center hover:text-red-600 transition-colors duration-200'
              }
            >
              Get Student List
            </NavLink>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <NavLink
              to="/getAllStudent"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 text-xl font-semibold block text-center border-b-2 border-blue-600'
                  : 'text-blue-600 text-xl font-semibold block text-center hover:text-red-600 transition-colors duration-200'
              }
            >
              Get Class List
            </NavLink>
          </div>
          <div className="w-full flex justify-center">
        <button
          onClick={handleLogoutClick}
          className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300"
        >
          Logout
        </button>
      </div>

          
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;





