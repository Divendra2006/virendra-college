import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminDeleteAccount = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null); // Track success or failure

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post('http://localhost:8000/api/v1/admin/forget-password', { email });

      setMessage(response.data.message); 
      setIsSuccess(true); 
    
      setEmail('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Account does not exit');
      setIsSuccess(false); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Delete Admin Account</h1>
      <form onSubmit={handleDeleteAccount} className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Enter Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300"
        >
          Delete Account
        </button>
      </form>

      {message && (
        <p className={`mt-6 text-xl font-semibold ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
          {isSuccess ? '✔️ ' : '❌ '}
          {message}
        </p>
      )}

      {/* Conditionally render signup link if the account is successfully deleted */}
      {isSuccess && (
        <div className="mt-6">
          <Link
            to="/signup"
            className="text-blue-600 underline text-lg"
          >
            Go to Signup Page
          </Link>
        </div>
      )}
    </div>
  );
};

export default AdminDeleteAccount;