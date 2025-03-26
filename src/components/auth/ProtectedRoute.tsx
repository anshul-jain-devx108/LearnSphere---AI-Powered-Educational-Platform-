
import { Navigate, useLocation } from "react-router-dom";

// This is a mock authentication check. In a real app, you would check your auth state
const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
