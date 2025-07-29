import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useUserRole from "../../../hooks/useUserRole";

const ParticipantRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, roleLoading] = useUserRole();
  const location = useLocation();

  if (loading || roleLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user && role === "participant") {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default ParticipantRoute;
