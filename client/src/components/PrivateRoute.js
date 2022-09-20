import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  return <div>{isAuth || token ? children : <Navigate to="/" />}</div>;
}

export default PrivateRoute;
