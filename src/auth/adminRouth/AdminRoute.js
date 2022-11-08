import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const admin = null;
  if (!admin) return <Navigate to="/admin/login" />;
  return children;
};

export default AdminRoute;
