import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import url from '../axios';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const AdminSignup = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
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
      newErrors.fullName = t('adminSignup.fullName.error'); // Use translation
    }

    if (formData.password !== '23165021') {
      newErrors.password = t('adminSignup.password.error'); // Use translation
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t('adminSignup.confirmPassword.error'); // Use translation
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      setSubmitStatus('loading');

      try {
        const response = await url.post('/api/v1/admin/register', {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        });

        setSubmitStatus('success');
        navigate('/AdminLogin');
      } catch (error) {
        setSubmitStatus('error');
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className=" bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">{t('adminSignup.title')}</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              {t('adminSignup.fullName.label')} {/* Use translation */}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('adminSignup.fullName.placeholder')} 
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {t('adminSignup.email.label')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('adminSignup.email.placeholder')} 
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              {t('adminSignup.password.label')} {/* Use translation */}
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t('adminSignup.password.placeholder')} 
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

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              {t('adminSignup.confirmPassword.label')} {/* Use translation */}
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('adminSignup.confirmPassword.placeholder')} 
              required
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            {t('adminSignup.signupButton')} 
          </button>

          <div className="text-center mt-4">
            <p className="text-sm">
              {t('adminSignup.alreadyHaveAccount')}{' '}
              <Link to="/AdminLogin" className="text-red-600 underline">
                {t('adminSignup.loginLink')} 
              </Link>
            </p>
          </div>

          {submitStatus === 'loading' && <p className="text-blue-500 text-center mt-4">{t('adminSignup.submitting')}</p>} 
          {submitStatus === 'error' && <p className="text-red-500 text-center mt-4">{t('adminSignup.error')}</p>} 
          {submitStatus === 'success' && <p className="text-green-500 text-center mt-4">{t('adminSignup.success')}</p>} 
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;
