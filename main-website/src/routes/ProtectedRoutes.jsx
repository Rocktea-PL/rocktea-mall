
import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/AuthContext";
//import { useEffect } from "react";
//import { useAuthContext } from "path/to/AuthContext"; // Replace with the correct import path

const ProtectedRoutes = () => {
  const { accessToken } = useAuthContext();


  return  (
   accessToken ? <Outlet /> : <Navigate to='/signin' />
     
  )
}
export default ProtectedRoutes;
