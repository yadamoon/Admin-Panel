/* eslint-disable react/prop-types */
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element, ...rest }) => {
  const { signedIn } = useSelector((state) => state.auth);

  return signedIn ? <Route {...rest} element={element} /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;