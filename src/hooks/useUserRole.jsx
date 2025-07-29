import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useUserRole = () => {
  const { user, loading } = useAuth();
  const axios = useAxios();
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`/users/${user.email}`)
        .then((res) => {
          setRole(res.data?.role);
          setRoleLoading(false);
        })
        .catch(() => {
          setRole(null);
          setRoleLoading(false);
        });
    }
  }, [user?.email, axios]);

  return [role, roleLoading];
};

export default useUserRole;
