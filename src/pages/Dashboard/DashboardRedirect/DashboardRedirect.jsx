import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const DashboardRedirect = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (loading || !user?.email) return;

    const getUserRole = async () => {
      try {
        const res = await axiosSecure.get(`/users/role/${user.email}`);
        const role = res.data?.role;

        if (role === "organizer") navigate("/dashboard/organizer");
        else if (role === "participant") navigate("/dashboard/participant");
        else if (role === "admin") navigate("/dashboard/admin");
        else navigate("/"); // fallback if no role
      } catch (error) {
        console.error("Failed to fetch user role", error);
        navigate("/");
      }
    };

    getUserRole();
  }, [user, loading, navigate, axiosSecure]);

  return <div className="p-6 text-lg">Redirecting to your dashboard...</div>;
};

export default DashboardRedirect;
