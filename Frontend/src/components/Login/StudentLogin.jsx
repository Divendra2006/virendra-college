import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Import HiEye and HiEyeOff icons
axios.defaults.withCredentials = true;

const StudentLogin = () => {
  // State to store form inputs, handle errors, and toggle password visibility
  const [Rollno, setRollNo] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate('/forget-password');
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send POST request to your backend using Axios
      const response = await axios.post('http://localhost:8000/api/v1/students/login', {
        Rollno,
        password,
      });
      navigate('/student/dashboard');

      // Handle successful login (e.g., save token, redirect, etc.)
      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle error (e.g., show an error message)
      setErrorMessage('Invalid login credentials');
      console.log('Login error:', error);
    }
  };

  return (
    <div>
      <p className="text-xl text-center mb-8 font-bold text-gray-700">Login as Student</p>
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label htmlFor="Rollno" className="block text-lg font-medium text-gray-800">
            Roll Number
          </label>
          <input
            type="text"
            id="Rollno"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
            placeholder="Enter your roll number"
            value={Rollno}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-lg font-medium text-gray-800">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'} // Toggle between text and password types
            id="password"
            className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
          >
            {showPassword ? (
              <HiEyeOff className="h-5 w-5 text-gray-600 hover:text-gray-800 transition duration-300" />
            ) : (
              <HiEye className="h-5 w-5 text-gray-600 hover:text-gray-800 transition duration-300" />
            )}
          </span>
        </div>

        {errorMessage && (
          <div className="text-red-500 text-center">{errorMessage}</div>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-md"
        >
          Login
        </button>
      </form>

      {/* Sign Up Link */}
      <div className="text-center mt-8">
        <p className="text-base">
          Don't have an account?{' '}
          <Link to="/signup" className="text-orange-500 underline font-semibold hover:text-orange-600">
            Create an account
          </Link>
        </p>
      </div>

      <div className="text-center mt-8">
        <p className="text-base">
          <Link to="/forget-password" className="text-orange-500 underline font-semibold hover:text-orange-600">
            Forget Password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;