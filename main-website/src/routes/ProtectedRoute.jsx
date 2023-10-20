
import { Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/AuthContext";
//import { useAuthContext } from "path/to/AuthContext"; // Replace with the correct import path

const ProtectedRoute = ({ path, element }) => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default ProtectedRoute;
