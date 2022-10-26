import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user && user?.uid) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivetRoute;
