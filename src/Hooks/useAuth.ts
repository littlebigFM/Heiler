import { useApp } from "../Context/AppContext";

const useAuth = () => {
  const { user, role, isAuthenticated, login, register, logout, setRole } =
    useApp();
  return { user, role, isAuthenticated, login, register, logout, setRole };
};

export default useAuth;
