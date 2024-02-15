/* eslint-disable react/prop-types */
import {  Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }) => {
  const { signedIn } = useSelector((state) => state.auth);

  return signedIn ?  element  : <Navigate to="/signin" />;
};

export default ProtectedRoute;