import React from 'react';
import { Navigate } from 'react-router-dom';
import url from './axios';
import { useTranslation } from 'react-i18next'; // Import the translation hook

const ProtectedRoute = ({ children }) => {
  const { t } = useTranslation(); // Initialize translation
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await url.get('/api/v1/admin/current-admin', {
          withCredentials: true,
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
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
        <div className="text-2xl font-semibold text-gray-700">{t('checkingAuthentication')}</div>
      </div>
    );
  }

  return isAuthenticated ? children:<Navigate to="/AdminLogin" replace />
};

export default ProtectedRoute;


