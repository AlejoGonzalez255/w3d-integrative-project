import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/use-auth-store";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore(); 
  
  if (!user) {

    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
