import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/admin/current-admin', {
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

export default ProtectedRoute;