// src/Pages/Auth/SetPassword.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useApp } from "../../Context/AppContext";
import { Button, Input, Checkbox } from "../../Components/Props";
import PageWrapper from "../../Components/Common/PageWrapper";
import AuthHeader from "../../Components/Common/AuthHeader";

// import PasswordStrength from "../../Components/Common/PasswordStrength";
import { validatePassword } from "../../utils/passwordValidator";

import type {
  SetPasswordForm,
  RegisterStep1Form,
  RegisterStep2Form,
  RegisterStep3Form,
  AppUser,
} from "../../types";
import img from "../../assets/Images/img6.png";
import img2 from "../../assets/Images/img5.png";
import PasswordStrength from "../../Components/Props/PasswordStrength";

interface FormBodyProps {
  form: SetPasswordForm;
  errors: Partial<Record<keyof SetPasswordForm, string>>;
  loading: boolean;
  isPasswordValid: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCreateAccount: () => void;
  setForm: React.Dispatch<React.SetStateAction<SetPasswordForm>>;
}

const FormBody = ({
  form,
  errors,
  loading,
  isPasswordValid,
  handleChange,
  handleCreateAccount,
  setForm,
}: FormBodyProps) => (
  <motion.div
    className="flex flex-col gap-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <div>
      <Input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        error={errors.password}
        className="bg-[#F2FFF9]"
      />
      {/* 🚀 REAL-TIME STRENGTH CHECKER */}
      <PasswordStrength password={form.password} />
    </div>

    <Input
      type="password"
      name="confirmPassword"
      value={form.confirmPassword}
      onChange={handleChange}
      placeholder="Confirm Password"
      error={errors.confirmPassword}
      className="bg-[#F2FFF9]"
    />

    <div className="flex flex-col gap-1">
      <Checkbox
        name="acceptTerms"
        checked={form.acceptTerms}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm((prev) => ({ ...prev, acceptTerms: e.target.checked }))
        }
        label={
          <span className="text-sm text-gray-600">
            I hereby accept the{" "}
            <span className="text-[#1E1E1E] font-extrabold cursor-pointer">
              terms and conditions
            </span>{" "}
            of Healing Place
          </span>
        }
      />
      {errors.acceptTerms && (
        <span className="text-xs text-red-500 pl-7">{errors.acceptTerms}</span>
      )}
    </div>

    <div className="pt-2">
      {/* 🔒 AUTO-DISABLE UNTIL PASSWORD MATRIX AND TERMS ARE CHECKED */}
      <Button
        variant="primary"
        label="Create Account"
        loading={loading}
        disabled={
          !isPasswordValid || !form.confirmPassword || !form.acceptTerms
        }
        onClick={handleCreateAccount}
      />
    </div>
  </motion.div>
);

// ================= MAIN =================

const SetPassword = () => {
  const navigate = useNavigate();
  const { role, register } = useApp();
  const isDoctor = role === "doctor";

  const [form, setForm] = useState<SetPasswordForm>({
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    phone: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof SetPasswordForm, string>>
  >({});
  const [loading, setLoading] = useState(false);

  // DYNAMICALLY CHECK VALIDATION RULES ON TYPING
  const { isValid: isPasswordValid } = validatePassword(form.password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof SetPasswordForm]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errs: Partial<Record<keyof SetPasswordForm, string>> = {};

    if (!form.password) errs.password = "Password is required.";
    else if (!isPasswordValid)
      errs.password = "Password does not meet validation criteria rules.";

    if (!form.confirmPassword)
      errs.confirmPassword = "Please confirm your password.";
    else if (form.password !== form.confirmPassword)
      errs.confirmPassword = "Passwords do not match.";

    if (!form.acceptTerms)
      errs.acceptTerms = "You must accept the terms and conditions.";

    return errs;
  };

  const handleCreateAccount = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // RESTORED: Pull previous steps out of temporary session memory
    const step1 = JSON.parse(
      sessionStorage.getItem("heiler_reg_step1") ?? "{}",
    ) as RegisterStep1Form;
    const step2 = JSON.parse(
      sessionStorage.getItem("heiler_reg_step2") ?? "{}",
    ) as RegisterStep2Form;
    const step3 = isDoctor
      ? (JSON.parse(
          sessionStorage.getItem("heiler_reg_step3") ?? "{}",
        ) as RegisterStep3Form)
      : null;

    const mockUser: AppUser = isDoctor
      ? {
          id: `d_${Date.now()}`,
          role: "doctor",
          firstName: step1.firstName,
          lastName: step1.lastName,
          fullName: `Dr. ${step1.firstName} ${step1.lastName}`,
          email: step1.email,
          phone: `${step2.countryCode}${step2.phone}`,
          gender: step2.gender as "male" | "female",
          dob: step1.dateOfBirth,
          avatar: null,
          specialty: step3?.specialty ?? "",
          qualification: "",
          mdcnRegNo: "",
          experience: parseInt(step3?.yearsOfExperience ?? "0"),
          rating: 0,
          patientsServed: 0,
          hospital: "",
          bio: "",
          online: true,
          wallet: { balance: 0, currency: "NGN" },
        }
      : {
          id: `p_${Date.now()}`,
          role: "patient",
          firstName: step1.firstName,
          lastName: step1.lastName,
          fullName: `${step1.firstName} ${step1.lastName}`,
          email: step1.email,
          phone: `${step2.countryCode}${step2.phone}`,
          gender: step2.gender as "male" | "female",
          dob: step1.dateOfBirth,
          avatar: null,
          wallet: { balance: 0, currency: "NGN" },
        };

    setTimeout(() => {
      sessionStorage.removeItem("heiler_reg_step1");
      sessionStorage.removeItem("heiler_reg_step2");
      sessionStorage.removeItem("heiler_reg_step3");

      register(mockUser);
      setLoading(false);
      navigate("/register/success");
    }, 1000);
  };

  return (
    <PageWrapper>
      {/* ── MOBILE SCREEN VIEW ── */}
      <div className="max-w-107 mx-auto flex flex-col min-h-screen bg-white md:hidden">
        <AuthHeader title="Set up your password." imgSrc={img} />

        <div className="flex flex-col flex-1 px-6 pt-4 pb-10">
          <FormBody
            form={form}
            errors={errors}
            loading={loading}
            isPasswordValid={isPasswordValid}
            handleChange={handleChange}
            handleCreateAccount={handleCreateAccount}
            setForm={setForm}
          />
        </div>
      </div>

      {/* ── DESKTOP SCREEN VIEW ── */}
      <div
        className="hidden md:flex min-h-screen items-center justify-center relative"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <motion.div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 px-8 pt-8 pb-10">
          <AuthHeader title="Set up your password." imgSrc={img} />
          <FormBody
            form={form}
            errors={errors}
            loading={loading}
            isPasswordValid={isPasswordValid}
            handleChange={handleChange}
            handleCreateAccount={handleCreateAccount}
            setForm={setForm}
          />
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default SetPassword;
