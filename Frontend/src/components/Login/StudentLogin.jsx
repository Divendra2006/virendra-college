import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import url from '../axios.jsx'; // Assuming this is the axios instance

const StudentLogin = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    Rollno: '',
    Class: '',
    dob: '',
    guardianName: '',
    phoneNo: '',
    yearofAdmission: '',
  });
  const [errors, setErrors] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateErrors = () => {
    const newErrors = {};
    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.Rollno) {
      newErrors.Rollno = 'Roll no is required';
    }
    if (!formData.Class) {
      newErrors.Class = 'Class is required';
    }
    if (!formData.dob) {
      newErrors.dob = 'Date of birth is required';
    }
    if (!formData.guardianName) {
      newErrors.guardianName = 'Guardian name is required';
    }
    if (!formData.phoneNo) {
      newErrors.phoneNo = 'Phone no is required';
    }
    if (!formData.yearofAdmission) {
      newErrors.yearofAdmission = 'Year of admission is required';
    }
    return newErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formErrors = validateErrors();
    if (Object.keys(formErrors).length === 0) {
      setSubmitStatus('loading');
      try {
        const response = await url.post('/api/v1/students/login', formData);
        setSubmitStatus('success');
        navigate('/student/dashboard'); // Navigate to dashboard after successful login
        console.log('Login successful:', response.data);
      } catch (error) {
        setSubmitStatus('failed');
        console.error('Login failed:', error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center p-2 justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Student Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="Full Name"
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="Rollno" className="block text-gray-700 font-medium mb-2">
              Roll No
            </label>
            <input
              type="text"
              id="Rollno"
              name="Rollno"
              value={formData.Rollno}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="Roll No"
              required
            />
            {errors.Rollno && <p className="text-red-500 text-sm">{errors.Rollno}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="Class" className="block text-gray-700 font-medium mb-2">
              Class
            </label>
            <input
              type="number"
              id="Class"
              name="Class"
              value={formData.Class}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="Class"
              required
            />
            {errors.Class && <p className="text-red-500 text-sm">{errors.Class}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="Date of Birth"
              required
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="guardianName" className="block text-gray-700 font-medium mb-2">
              Guardian Name
            </label>
            <input
              type="text"
              id="guardianName"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="Guardian Name"
              required
            />
            {errors.guardianName && <p className="text-red-500 text-sm">{errors.guardianName}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNo" className="block text-gray-700 font-medium mb-2">
              Phone No
            </label>
            <input
              type="phoneno"
              id="phoneNo"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="Phone no"
              required
            />
            {errors.phoneNo && <p className="text-red-500 text-sm">{errors.phoneNo}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="yearofAdmission" className="block text-gray-700 font-medium mb-2">
              Year of Admission
            </label>
            <input
              type="text"
              id="yearofAdmission"
              name="yearofAdmission"
              value={formData.yearofAdmission}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="Year of Admission"
              required
            />
            {errors.yearofAdmission && <p className="text-red-500 text-sm">{errors.yearofAdmission}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105"
          >
            Login
          </button>

          {submitStatus === 'loading' && (
            <p className="text-blue-500 mt-4">Submitting...</p>
          )}
          {submitStatus === 'success' && (
            <p className="text-green-500 mt-4">Login Successful!</p>
          )}
          {submitStatus === 'failed' && (
            <p className="text-red-500 mt-4">Student not match with this credentials</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
