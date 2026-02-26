import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);

  if (loading) return <p>Loading...</p>
  if (!user) return <Navigate to='/sign-in' />;

  return children;
}

export default ProtectedRoute
/**protected route is like app ko pura load ho jaane do, if loading is set to false means no user, navigate to /sign-in */