
import { Navigate } from "react-router-dom";

export const Register = () => {
  // Redirect to login since we're using OAuth flow
  return <Navigate to="/auth/login" replace />;
};

export default Register;
