// import { createContext, useContext, useState, useEffect } from "react";

// // Create the context
// const AppContext = createContext(null);

// // Provider wraps the entire app (see main.jsx / App.jsx)
// export const AppProvider = ({ children }) => {
//   const [role, setRole] = useState(
//     () => localStorage.getItem("heiler_role") || null,
//   );
//   const [user, setUser] = useState(() => {
//     const saved = localStorage.getItem("heiler_user");
//     return saved ? JSON.parse(saved) : null;
//   });
//   const [isAuthenticated, setIsAuthenticated] = useState(() => {
//     return !!localStorage.getItem("heiler_user");
//   });

//   // Whenever role changes, save it to localStorage
//   useEffect(() => {
//     if (role) localStorage.setItem("heiler_role", role);
//     else localStorage.removeItem("heiler_role");
//   }, [role]);

//   // Whenever user changes, save it to localStorage
//   useEffect(() => {
//     if (user) {
//       localStorage.setItem("heiler_user", JSON.stringify(user));
//       setIsAuthenticated(true);
//     } else {
//       localStorage.removeItem("heiler_user");
//       setIsAuthenticated(false);
//     }
//   }, [user]);

//   // Call this on Login success — pass the user object from API
//   // 🔌 BACKEND: replace mock login with POST /api/auth/login
//   const login = (userData) => {
//     setUser(userData);
//   };

//   // Call this when user registers successfully
//   // 🔌 BACKEND: replace with POST /api/auth/register
//   const register = (userData) => {
//     setUser(userData);
//   };

//   // Clears everything — called on logout
//   const logout = () => {
//     setUser(null);
//     setRole(null);
//     localStorage.clear();
//   };

//   // This is what every component gets access to
//   const value = {
//     role, // 'doctor' | 'patient' | null
//     setRole, // call on RoleSelect screen
//     user, // full user object
//     setUser,
//     isAuthenticated,
//     login,
//     register,
//     logout,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// // Custom hook — import this in any component instead of useContext directly
// // Usage: const { role, user, login, logout } = useApp()
// export const useApp = () => {
//   const context = useContext(AppContext);
//   if (!context) throw new Error("useApp must be used inside AppProvider");
//   return context;
// };

// export default AppContext;

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Types //

export type Role = "doctor" | "patient";

export interface User {
  id: string;
  role: Role;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  avatar?: string | null;
}

interface AppContextType {
  role: Role | null;
  setRole: (role: Role | null) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  register: (userData: User) => void;
  logout: () => void;
}

// Context //

const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider //

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role | null>(() => {
    const saved = localStorage.getItem("heiler_role");
    return saved ? (saved as Role) : null;
  });

  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("heiler_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem("heiler_user");
  });

  // Effects //

  useEffect(() => {
    if (role) {
      localStorage.setItem("heiler_role", role);
    } else {
      localStorage.removeItem("heiler_role");
    }
  }, [role]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("heiler_user", JSON.stringify(user));
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("heiler_user");
      setIsAuthenticated(false);
    }
  }, [user]);

  // Actions //

  const setAuthUser = (userData: User) => {
    setUser(userData);
  };

  const login = (userData: User) => setAuthUser(userData);
  const register = (userData: User) => setAuthUser(userData);

  const logout = () => {
    sessionStorage.clear();
    localStorage.removeItem("heiler_user");
    localStorage.removeItem("heiler_role");
    setUser(null);
    setRole(null);
    window.location.href = "/login";
  };

  //  Provider Value //

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        user,
        setUser,
        isAuthenticated,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook //

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }
  return context;
};

export default AppContext;
