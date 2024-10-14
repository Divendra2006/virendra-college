import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import url from './axios';
import { useTranslation } from 'react-i18next'; // Import the translation hook

const StudentDashboardProtectedRoute = ({ children }) => {
  const { t } = useTranslation(); // Initialize translation
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await url.get('/api/v1/students/current-student', {
          withCredentials: true,
        });

        console.log("Auth response: ", response);

        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log("Auth error: ", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  // Display loading spinner or message while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-xl font-bold">{t('studentloading')}</div> {/* Use translation key */}
      </div>
    );
  }

  // If authenticated, render children (dashboard); otherwise, redirect to login
  return isAuthenticated ? children : <Navigate to="/StudentLogin" replace />;
};

export default StudentDashboardProtectedRoute;

