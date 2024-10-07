import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import url from '../axios';
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Import HiEye and HiEyeOff icons

axios.defaults.withCredentials = true;

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = async (e) => {
    e.preventDefault();

    try {
      const response = await url.post('/api/v1/admin/login', {
        email,
        password,
      });
      navigate('/dashboard');
      console.log('Login successful:', response.data);
    } catch (error) {
      setErrorMessage('Invalid login credentials');
      console.log('login error', error);
    }
  };

  return (
    <div>
      <p className="text-xl text-center mb-8 font-bold text-gray-700">
        Login as Admin
      </p>
      <form onSubmit={handleChange} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-lg font-medium text-gray-800">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'} // Toggle between text and password
            id="password"
            className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)} // Toggle visibility on icon click
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
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-md"
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
          <Link to="/admin/forget-password" className="text-orange-500 underline font-semibold hover:text-orange-600">
            Forget Password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;