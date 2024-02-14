/* eslint-disable react/prop-types */

import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element, ...rest }) => {
  const { signedIn } = useSelector((state) => state.auth) || {};

  return (
    <Route
      {...rest}
      element={signedIn ? element : <Navigate to="/SignIn" replace />}
    />
  );
};

export default PrivateRoute;