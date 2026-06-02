// src/Pages/Auth/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useApp } from "../../Context/AppContext";
import { Button, Input } from "../../Components/Props";
import AuthHeader from "../../Components/Common/AuthHeader";
import PageWrapper from "../../Components/Common/PageWrapper";
import { mockPatient, mockDoctor } from "../../Data/mockData";
import type { LoginForm } from "../../types";
import img from "../../assets/Images/img5.png";

/* =========================
   FormBody (OUTSIDE COMPONENT)
========================= */
type FormBodyProps = {
  form: LoginForm;
  errors: Partial<LoginForm>;
  loading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
  navigate: ReturnType<typeof useNavigate>;
};

const FormBody = ({
  form,
  errors,
  loading,
  handleChange,
  handleLogin,
  navigate,
}: FormBodyProps) => (
  <motion.div
    className="flex flex-col gap-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <Input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      placeholder="Email Address"
      error={errors.email}
      // inputClassName="bg-[#F2FFF9]"
      className="bg-[#F2FFF9]"
    />

    <Input
      type="password"
      name="password"
      value={form.password}
      onChange={handleChange}
      placeholder="Enter your password"
      error={errors.password}
      // inputClassName="bg-[#F2FFF9]"
      className="bg-[#F2FFF9]"
    />

    <div className="flex items-center justify-end">
      <button
        type="button"
        onClick={() => navigate("/forgot-password")}
        className="text-sm font-semibold text-primary cursor-pointer"
      >
        Forgot Password?
      </button>
    </div>

    <div className="flex-1" />

    <Button
      variant="primary"
      label="Login"
      loading={loading}
      onClick={handleLogin}
    />

    <p className="text-center text-sm text-[#A7ADBE] font-inter">
      Don't have an account?{" "}
      <span
        onClick={() => navigate("/role-select")}
        className="text-primary font-semibold cursor-pointer"
      >
        Register
      </span>
    </p>
  </motion.div>
);

/* =========================
   MAIN COMPONENT
========================= */
const Login = () => {
  const navigate = useNavigate();
  const { login, role } = useApp();

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<LoginForm>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof LoginForm]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): Partial<LoginForm> => {
    const errs: Partial<LoginForm> = {};

    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Enter a valid email.";

    if (!form.password) errs.password = "Password is required.";
    else if (form.password.length < 6)
      errs.password = "Password must be at least 6 characters.";

    return errs;
  };

  const handleLogin = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const mockUser = role === "doctor" ? mockDoctor : mockPatient;

      login(mockUser);
      navigate(role === "doctor" ? "/doctor/home" : "/patient/home");

      setLoading(false);
    }, 1000);
  };

  return (
    <PageWrapper>
      {/* ── MOBILE ── */}
      <div className="max-w-107 mx-auto flex flex-col min-h-screen bg-white md:hidden">
        <AuthHeader
          title="Welcome Back"
          subtitle="Log in to continue to your Dashboard."
          showLogo={true}
        />

        <div className="flex flex-col flex-1 px-6 pt-6 pb-10">
          <FormBody
            form={form}
            errors={errors}
            loading={loading}
            handleChange={handleChange}
            handleLogin={handleLogin}
            navigate={navigate}
          />
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div
        className="hidden md:flex min-h-screen items-center justify-center relative"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 px-8 pt-8 pb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <AuthHeader
            title="Welcome Back"
            subtitle="Log in to continue to your Dashboard."
            showLogo={true}
          />

          <FormBody
            form={form}
            errors={errors}
            loading={loading}
            handleChange={handleChange}
            handleLogin={handleLogin}
            navigate={navigate}
          />
        </motion.div>

        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs font-inter whitespace-nowrap">
          © 2024 Heiler &nbsp;·&nbsp; Developed by FireSwitch Technologies
        </p>
      </div>
    </PageWrapper>
  );
};

export default Login;
