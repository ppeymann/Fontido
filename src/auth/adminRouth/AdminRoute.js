import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../useUser/useUser.js";

const AdminRoute = ({ children }) => {
  const user = useUser();
  if (!user) return <Navigate to="/admin/login" />;
  return children;
};

export default AdminRoute;
