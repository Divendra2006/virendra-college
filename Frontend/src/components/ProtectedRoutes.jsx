import React from 'react';
import { Navigate } from 'react-router-dom';
import url from './axios';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await url.get('/api/v1/admin/current-admin', {
          withCredentials: true,
        });

        console.log('Auth response: ', response);

        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log('Auth error: ', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

 
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="text-2xl font-semibold text-gray-700">Checking Authentication...</div>
      </div>
    );
  }

  // If authenticated, render children (dashboard); otherwise, redirect with a brief delay
  return isAuthenticated ? (
    children
  ) : (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <p className="text-xl text-red-600 font-semibold">Unauthorized Access</p>
      <p className="text-lg text-gray-700 mt-2">Redirecting to login page...</p>
      <Navigate to="/AdminLogin" replace />
    </div>
  );
};

export default ProtectedRoute;

