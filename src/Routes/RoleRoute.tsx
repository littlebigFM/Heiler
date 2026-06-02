import { Navigate } from "react-router-dom";
import { useApp } from "../Context/AppContext";
import type { ReactNode } from "react";
import type { Role } from "../types";

interface Props {
  children: ReactNode;
  requiredRole: Role;
}

const RoleRoute = ({ children, requiredRole }: Props) => {
  const { isAuthenticated, role } = useApp();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (role !== requiredRole) {
    return (
      <Navigate
        to={role === "doctor" ? "/doctor/home" : "/patient/home"}
        replace
      />
    );
  }

  return children;
};

export default RoleRoute;
