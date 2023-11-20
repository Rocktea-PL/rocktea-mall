import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedRoute({ children }) {
  const token = Cookies.get("token");

  const location = useLocation();
  const isAuthenticated = token !== undefined;

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate
      to={{
        pathname: "/login",
        state: { from: location },
      }}
    />
  );
}

export default ProtectedRoute;
