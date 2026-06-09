// src/Pages/Auth/Register.tsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useApp } from "../../Context/AppContext";

import { Button, Input } from "../../Components/Props";
import AuthHeader from "../../Components/Common/AuthHeader";
import PageWrapper from "../../Components/Common/PageWrapper";
import DateInput from "../../Components/Props/DateInput";

import type { RegisterStep1Form } from "../../types";
import img from "../../assets/Images/img5.png";

// 1. Safe Literal Framer Motion Variants Definition
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
} as const;

interface FormBodyProps {
  form: RegisterStep1Form;
  errors: Partial<RegisterStep1Form>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setForm: React.Dispatch<React.SetStateAction<RegisterStep1Form>>;
  handleNext: () => void;
  navigate: (path: string) => void;
  setErrors: React.Dispatch<React.SetStateAction<Partial<RegisterStep1Form>>>;
}

const FormBody = ({
  form,
  errors,
  setErrors,
  handleChange,
  setForm,
  handleNext,
  navigate,
}: FormBodyProps) => {
  return (
    <div className="flex flex-col gap-8">
      <Input
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="First name"
        error={errors.firstName}
        className="bg-[#F2FFF9]"
      />

      <Input
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Last name"
        error={errors.lastName}
        className="bg-[#F2FFF9]"
      />

      <Input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email address"
        error={errors.email}
        className="bg-[#F2FFF9]"
      />

      <DateInput
        value={form.dateOfBirth}
        onChange={(value) => {
          setForm((prev) => ({
            ...prev,
            dateOfBirth: value,
          }));
          // Cleanly strip out the error key on date changes
          if (errors.dateOfBirth) {
            setErrors((prev) => {
              const updated = { ...prev };
              delete updated.dateOfBirth;
              return updated;
            });
          }
        }}
        error={errors.dateOfBirth}
      />

      <div className="pt-2">
        <Button variant="primary" label="Next" onClick={handleNext} />
      </div>

      <p className="text-center text-sm text-[#A7ADBE] font-inter">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-primary font-semibold cursor-pointer hover:underline"
        >
          Log in
        </span>
      </p>
    </div>
  );
};

const Register = () => {
  const navigate = useNavigate();
  // const { role } = useApp();
  // const isDoctor = role === "doctor";

  // Pre-populate state values if a step back is initiated by a user
  const [form, setForm] = useState<RegisterStep1Form>(() => {
    const cached = sessionStorage.getItem("heiler_reg_step1");
    return cached
      ? JSON.parse(cached)
      : { firstName: "", lastName: "", email: "", dateOfBirth: "" };
  });

  const [errors, setErrors] = useState<Partial<RegisterStep1Form>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    // Cleanly delete key targets from the validation error tracking dictionary completely
    if (errors[name as keyof RegisterStep1Form]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name as keyof RegisterStep1Form];
        return updated;
      });
    }
  };

  const validate = (): Partial<RegisterStep1Form> => {
    const errs: Partial<RegisterStep1Form> = {};

    if (!form.firstName.trim()) errs.firstName = "First name is required.";
    if (!form.lastName.trim()) errs.lastName = "Last name is required.";

    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Enter a valid email.";

    if (!form.dateOfBirth) errs.dateOfBirth = "Date of birth is required.";

    return errs;
  };

  const handleNext = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    sessionStorage.setItem("heiler_reg_step1", JSON.stringify(form));
    navigate("/register/step2");
  };

  return (
    <PageWrapper>
      {/* ── MOBILE SCREEN VIEW ── */}
      <div className="max-w-107 mx-auto flex flex-col min-h-screen bg-white md:hidden">
        <AuthHeader
          title="Create an Account"
          subtitle="Register to have access to the Dashboard."
          showLogo={true}
        />

        <div className="flex flex-col flex-1 px-6 pt-4 pb-10">
          <FormBody
            form={form}
            errors={errors}
            handleChange={handleChange}
            handleNext={handleNext}
            setErrors={setErrors}
            navigate={navigate}
            setForm={setForm}
          />
        </div>
      </div>

      {/* ── DESKTOP SCREEN VIEW ── */}
      <div
        className="hidden md:flex min-h-screen items-center justify-center relative"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Screen Backdrop Overlay filter masks */}
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 px-8 pb-10 pt-4"
          variants={cardVariants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <AuthHeader
            title="Create an Account"
            subtitle="Register to have access to the Dashboard."
            showLogo={true}
          />

          <FormBody
            form={form}
            errors={errors}
            handleChange={handleChange}
            setForm={setForm}
            handleNext={handleNext}
            navigate={navigate}
            setErrors={setErrors}
          />
        </motion.div>

        {/* Cleaned layout footer position tracking element wrapper */}
        <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs font-inter tracking-wide whitespace-nowrap z-10">
          © 2024 Heiler &nbsp;·&nbsp; Developed by FireSwitch Technologies
        </footer>
      </div>
    </PageWrapper>
  );
};

export default Register;
