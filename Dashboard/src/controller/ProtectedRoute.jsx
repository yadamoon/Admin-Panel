/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {  Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ProtectedRoute = ({ element , roles=[] }) => {
  const { signedIn  , user} = useSelector((state) => state.auth);
  if (signedIn) {
    if (roles.includes('*') || roles.includes(user.role) ) {
      return <>{element}</>; // Render all components for the admin
    } else {
      return <Navigate to="/dashboard"/>
    }
  } else {
    return <Navigate to="/signin" />; 
  }

  return null;

};




export default ProtectedRoute;