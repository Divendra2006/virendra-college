import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import url from '../axios.jsx';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const AdminLogin = () => {
  const { t } = useTranslation();  // Initialize translation hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await url.post('/api/v1/admin/login', { email, password });
      navigate('/dashboard');
      console.log('Login successful:', response.data);
    } catch (error) {
      setErrorMessage(t('adminLogin.invalidCredentials')); // Use translation for error message
      console.log('login error', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-md rounded-lg p-8 max-w-md w-full">
        <p className="text-2xl text-center font-bold mb-6 text-gray-800">
          {t('adminLogin.title')}
        </p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              {t('adminLogin.email')}
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">
              {t('adminLogin.password')}
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <HiEyeOff className="h-5 w-5 text-gray-600 hover:text-gray-800" />
              ) : (
                <HiEye className="h-5 w-5 text-gray-600 hover:text-gray-800" />
              )}
            </span>
          </div>

          {errorMessage && (
            <div className="text-red-500 text-center font-semibold">{errorMessage}</div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            {t('adminLogin.login')}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600 font-semibold">
            {t('adminLogin.createAccount')}{' '}
            <Link to="/AdminSignup" className="text-red-500 underline hover:text-blue-600">
              {t('adminLogin.createAccount')}
            </Link>
          </p>
        </div>
        <div className="text-center mt-2">
          <Link to="/admin/forget-password" className="text-red-500 underline font-semibold hover:text-blue-600">
            {t('adminLogin.forgotPassword')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

