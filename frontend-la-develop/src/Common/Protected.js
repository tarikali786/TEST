import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthInfo } from "../features/auth/authSlice";

function Protected({ children }) {
  const user = useSelector(selectAuthInfo);
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}
export const AdminProtected = ({ children }) => {
  const user = useSelector(selectAuthInfo);
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  if (user && user.role !== "admin") {
    alert("OK")
    return <Navigate to="/" replace={true} />;
  }
  return children;
};

export default Protected;
