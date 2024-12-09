import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import url from '../axios.jsx'; // Assuming this is the axios instance
import { useTranslation } from 'react-i18next'; // Import useTranslation

const StudentLogin = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [formData, setFormData] = useState({
    fullName: '',
    Rollno: '',
    Class: '',
    dob: '',
    guardianName: '',
    phoneNo: '',
    yearofAdmission: '',
  });
  const [errors, setErrors] = useState({});
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
      newErrors.fullName = t('studentLogin.fullNameRequired');
    }
    if (!formData.Rollno) {
      newErrors.Rollno = t('studentLogin.rollNoRequired');
    }
    if (!formData.Class) {
      newErrors.Class = t('studentLogin.classRequired');
    }
    if (!formData.dob) {
      newErrors.dob = t('studentLogin.dobRequired');
    }
    if (!formData.guardianName) {
      newErrors.guardianName = t('studentLogin.guardianNameRequired');
    }
    if (!formData.phoneNo) {
      newErrors.phoneNo = t('studentLogin.phoneNoRequired');
    }
    if (!formData.yearofAdmission) {
      newErrors.yearofAdmission = t('studentLogin.yearOfAdmissionRequired');
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
      <div className="max-w-md w-full space-y-8 p-8 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">{t('studentLogin.title')}</h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
              {t('studentLogin.fullName')}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder={t('studentLogin.fullName')}
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="Rollno" className="block text-gray-700 font-medium mb-2">
              {t('studentLogin.rollNo')}
            </label>
            <input
              type="text"
              id="Rollno"
              name="Rollno"
              value={formData.Rollno}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder={t('studentLogin.rollNo')}
              required
            />
            {errors.Rollno && <p className="text-red-500 text-sm">{errors.Rollno}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="Class" className="block text-gray-700 font-medium mb-2">
              {t('studentLogin.class')}
            </label>
            <input
              type="number"
              id="Class"
              name="Class"
              value={formData.Class}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder={t('studentLogin.class')}
              required
            />
            {errors.Class && <p className="text-red-500 text-sm">{errors.Class}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">
              {t('studentLogin.dob')}
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              required
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="guardianName" className="block text-gray-700 font-medium mb-2">
              {t('studentLogin.guardianName')}
            </label>
            <input
              type="text"
              id="guardianName"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder={t('studentLogin.guardianName')}
              required
            />
            {errors.guardianName && <p className="text-red-500 text-sm">{errors.guardianName}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNo" className="block text-gray-700 font-medium mb-2">
              {t('studentLogin.phoneNo')}
            </label>
            <input
              type="tel" // Changed from phoneno to tel
              id="phoneNo"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder={t('studentLogin.phoneNo')}
              required
            />
            {errors.phoneNo && <p className="text-red-500 text-sm">{errors.phoneNo}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="yearofAdmission" className="block text-gray-700 font-medium mb-2">
              {t('studentLogin.yearOfAdmission')}
            </label>
            <input
              type="text"
              id="yearofAdmission"
              name="yearofAdmission"
              value={formData.yearofAdmission}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder={t('studentLogin.yearOfAdmission')}
              required
            />
            {errors.yearofAdmission && <p className="text-red-500 text-sm">{errors.yearofAdmission}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105"
          >
            {t('studentLogin.submit')}
          </button>

          {submitStatus === 'loading' && (
            <div className="flex items-center mt-4">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-blue-500 mr-2"></div>
            <p className="text-blue-500">{t('studentLogin.submitting')}</p>
          </div>
          
          )}
          {submitStatus === 'success' && (
            <p className="text-green-500 mt-4">{t('studentLogin.loginSuccessful')}</p>
          )}
          {submitStatus === 'failed' && (
            <p className="text-red-500 mt-4">{t('studentLogin.loginFailed')}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;

