import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../useUser/useUser";
export const UserRoute = ({ children }) => {
  const user = useUser();
  if (!user) return <Navigate to="/login" />;
  return children;
};
