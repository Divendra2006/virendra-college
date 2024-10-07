import React from 'react';
import { Navigate } from 'react-router-dom';
import url from './axios';

const StudentDashboardProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await url.get('/api/v1/students/current-student', {
          withCredentials: true, 
        });

        console.log("Auth response: ", response)

        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log("Auth error: ", error)
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  if (loading) {
    return <div> Loading...

    </div>; 
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default StudentDashboardProtectedRoute;