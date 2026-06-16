// src/Pages/Auth/ForgotPassword.tsx
import { useState, useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Button, Input } from "../../Components/Props";
import AuthHeader from "../../Components/Common/AuthHeader";
import PageWrapper from "../../Components/Common/PageWrapper";
import type { ForgotPasswordForm } from "../../types";
import img from "../../assets/Images/img5.png";
import img2 from "../../assets/Images/amico.png";

const initialForm: ForgotPasswordForm = {
  email: "",
  confirmPassword: "",
  acceptTerms: false,
  phone: "",
};

const FormBody = memo(
  ({
    sent,
    form,
    errors,
    loading,
    handleChange,
    handleSubmit,
    navigate,
    setSent,
    setForm,
  }: {
    sent: boolean;
    form: ForgotPasswordForm;
    errors: Partial<ForgotPasswordForm>;
    loading: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
    navigate: ReturnType<typeof useNavigate>;
    setSent: (v: boolean) => void;
    setForm: (v: ForgotPasswordForm) => void;
  }) => {
    return (
      <motion.div
        className="flex flex-col gap-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {!sent ? (
          <>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              error={errors.email}
              className="bg-[#F2FFF9]"
            />

            <div className="pt-2">
              <Button
                variant="primary"
                label="Submit"
                loading={loading}
                onClick={handleSubmit}
              />
            </div>
          </>
        ) : (
          <motion.div
            className="flex flex-col items-center gap-4 py-4 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#E8F5EE] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M4 8C4 6.9 4.9 6 6 6H26C27.1 6 28 6.9 28 8V24C28 25.1 27.1 26 26 26H6C4.9 26 4 25.1 4 24V8Z"
                  stroke="#008847"
                  strokeWidth="2"
                />
                <path
                  d="M4 8L16 17L28 8"
                  stroke="#008847"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-poppins text-lg font-bold text-[#1B1B1B]">
                Check your email
              </h3>
              <p className="text-sm text-[#A7ADBE] font-inter">
                We sent a reset link to{" "}
                <span className="text-primary font-semibold">{form.email}</span>
              </p>
            </div>

            <div className="w-full pt-2">
              <Button
                variant="primary"
                label="Back to Login"
                onClick={() => navigate("/login")}
              />
            </div>

            <button
              type="button"
              onClick={() => {
                setSent(false);
                setForm(initialForm);
              }}
              className="text-sm text-[#A7ADBE] hover:text-primary transition-colors"
            >
              Didn't receive it? Try again
            </button>
          </motion.div>
        )}
      </motion.div>
    );
  },
);

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<ForgotPasswordForm>(initialForm);
  const [errors, setErrors] = useState<Partial<ForgotPasswordForm>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // ✅ FIX: stable handler
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => {
      if (prev[name as keyof ForgotPasswordForm] === value) return prev;
      return { ...prev, [name]: value };
    });

    setErrors((prev) => {
      if (!prev[name as keyof ForgotPasswordForm]) return prev;
      return { ...prev, [name]: "" };
    });
  }, []);

  const validate = (): Partial<ForgotPasswordForm> => {
    const errs: Partial<ForgotPasswordForm> = {};

    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }

    return errs;
  };

  const handleSubmit = useCallback(() => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast("Kindly check your mail and click on the link to reset your password", {
        autoClose: 4000,
        hideProgressBar: true,
        style: {
          backgroundColor: "#ffffff",
          color: "#000000",
          border: "1px solid #E5E7EB",
        },
      });
    }, 1000);
  }, [form]);

  return (
    <PageWrapper>
      {/* MOBILE */}
      <div className="max-w-107 mx-auto flex flex-col min-h-screen bg-white md:hidden">
        <AuthHeader
          title="Forgot Password?"
          subtitle="Provide the email address used for registration"
          showLogo={true}
          imgSrc2={img2}
        />

        <div className="flex flex-col flex-1 px-6 pt-6 pb-10">
          <FormBody
            sent={sent}
            form={form}
            errors={errors}
            loading={loading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            navigate={navigate}
            setSent={setSent}
            setForm={setForm}
          />
        </div>
      </div>

      {/* DESKTOP */}
      <div
        className="hidden md:flex min-h-screen items-center justify-center relative"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <motion.div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md px-8 pt-8 pb-10">
          <AuthHeader
            title="Forgot Password?"
            subtitle="Provide the email address used for registration"
            showLogo={true}
            imgSrc2={img2}
          />

          <FormBody
            sent={sent}
            form={form}
            errors={errors}
            loading={loading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            navigate={navigate}
            setSent={setSent}
            setForm={setForm}
          />
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default ForgotPassword;
