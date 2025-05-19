import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("https://securesign-1039810289993.europe-west1.run.app/auth/check", {
          withCredentials: true, // ✅ Sends cookies with request
        });
        setIsAuthenticated(response.data.authenticated); // ✅ Fix: update state here
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false); // ✅ Explicitly set to false on error
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) return <p>Loading...</p>; // ✅ Show loader while checking

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
