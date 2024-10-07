import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import url from '../axios';
// import axios from 'axios';
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Import eye icons
// axios.defaults.withCredentials = true;

const StudentSignup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    Class: '',
    Rollno: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.Class) {
      newErrors.Class = 'Class is required'; // Fixed typo
    }
    if (!formData.Rollno) {
      newErrors.Rollno = 'Roll number is required'; // Fixed typo
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      setSubmitStatus('loading');

      // Make API request
      try {
        const response = await url.post('/api/v1/students/register', {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          Rollno: formData.Rollno,
          Class: formData.Class,
        });

        console.log('Response:', response.data);
        setSubmitStatus('success');
        navigate('/login'); // Redirect to login page after successful signup
      } catch (error) {
        console.log('Registration failed', error.response ? error.response.data : error.message);
        setSubmitStatus('error');
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-10 rounded-lg w-full max-w-md"> {/* Adjust max width for larger screens */}

        <div className="flex justify-center mb-6">
          <img
            src="https://cdn.vectorstock.com/i/preview-1x/22/75/graduate-student-with-graduation-cap-icon-vector-32322275.webp" // Replace this with the actual student avatar URL
            alt="Student Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Student Sign Up</h1>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Field */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          {/* Class Field */}
          <div>
            <label htmlFor="Class" className="block text-sm font-medium text-gray-700">
              Class
            </label>
            <input
              type="text"
              id="Class"
              name="Class"
              value={formData.Class}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your class"
              required
            />
            {errors.Class && <p className="text-red-500 text-sm mt-1">{errors.Class}</p>}
          </div>

          {/* Roll Number Field */}
          <div>
            <label htmlFor="Rollno" className="block text-sm font-medium text-gray-700">
              Roll Number
            </label>
            <input
              type="text"
              id="Rollno"
              name="Rollno"
              value={formData.Rollno}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your roll number"
              required
            />
            {errors.Rollno && <p className="text-red-500 text-sm mt-1">{errors.Rollno}</p>}
          </div>

          {/* Email Field (Optional) */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email (optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              >
                {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
              </span>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors duration-200"
          >
            Sign Up
          </button>
          {submitStatus === 'loading' && <p className="text-blue-500 text-center mt-4">Submitting...</p>}
          {submitStatus === 'error' && <p className="text-red-500 text-center mt-4">Student with this Rollno is already exist</p>}
          {submitStatus === 'success' && <p className="text-green-500 text-center mt-4">Sign up successful!</p>}
        </form>

        {/* Link to Login Page */}
        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-orange-500 underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;