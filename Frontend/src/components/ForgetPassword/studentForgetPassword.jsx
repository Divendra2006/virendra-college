import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DeleteAccount = () => {
  const [Rollno, setRollno] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null); // Track success or failure

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any previous message

    try {
      const response = await axios.post('http://localhost:8000/api/v1/students/delete-account', { Rollno });

      setMessage(response.data.message); // Set success message
      setIsSuccess(true); // Indicate success

      // Clear input field after successful deletion
      setRollno('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error deleting account');
      setIsSuccess(false); // Indicate failure
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Delete Student Account</h1>
      <form onSubmit={handleDeleteAccount} className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <div className="mb-6">
          <label htmlFor="Rollno" className="block text-lg font-medium text-gray-700">Enter Rollno:</label>
          <input
            type="text"
            id="Rollno"
            value={Rollno}
            onChange={(e) => setRollno(e.target.value)}
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

export default DeleteAccount;