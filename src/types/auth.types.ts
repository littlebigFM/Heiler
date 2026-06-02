import { Role } from "./user.types";

export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterStep1Form {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
}

export interface RegisterStep2Form {
  phone: string;
  gender: "male" | "female" | "";
  nationality: string;
  occupation: string;
  homeAddress: string;
  countryCode: string;
}

export interface RegisterStep3Form {
  specialty?: string;
  yearsOfExperience?: string;
  countryOfPractice?: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SetPasswordForm {
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  phone: string;
}

export interface ForgotPasswordForm {
  email: string;
  confirmPassword: string;
  acceptTerms: boolean;
  phone: string;
}

export interface AppContextType {
  role: Role | null;
  setRole: (role: Role | null) => void;
  user: import("./user.types").AppUser | null;
  setUser: (user: import("./user.types").AppUser | null) => void;
  isAuthenticated: boolean;
  login: (user: import("./user.types").AppUser) => void;
  register: (user: import("./user.types").AppUser) => void;
  logout: () => void;
}
