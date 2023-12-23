import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext.jsx";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  if (JSON.stringify(user) === "{}") {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
