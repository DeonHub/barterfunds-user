// ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ path, ...props }) => {
  const isAuthorized = useSelector((state) => state.user.isAuthorized);

  return isAuthorized ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
