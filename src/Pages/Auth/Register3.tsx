// src/Pages/Auth/Register3.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Select } from "../../Components/Props";
import AuthHeader from "../../Components/Common/AuthHeader";
import PageWrapper from "../../Components/Common/PageWrapper";
import type { RegisterStep3Form, SelectOption } from "../../types";
import img from "../../assets/Images/img5.png";

const specialtyOptions: SelectOption[] = [
  { value: "cardiology", label: "Cardiology" },
  { value: "dentistry", label: "Dentistry" },
  { value: "paediatrics", label: "Paediatrics" },
  { value: "physiotherapy", label: "Physiotherapy" },
  { value: "ent", label: "Ear, Nose & Throat" },
  { value: "dermatology", label: "Dermatology / Skin" },
  { value: "general", label: "General Medicine" },
  { value: "obstetrics", label: "Obstetrics & Gynecology" },
  { value: "physician", label: "Physician" },
];

const experienceOptions: SelectOption[] = [
  { value: "1", label: "1 year" },
  { value: "2", label: "2 years" },
  { value: "3", label: "3 years" },
  { value: "5", label: "5 years" },
  { value: "7", label: "7 years" },
  { value: "10", label: "10 years" },
  { value: "15", label: "15+ years" },
  { value: "20", label: "20+ years" },
];

const countryOptions: SelectOption[] = [
  { value: "nigeria", label: "Nigeria" },
  { value: "ghana", label: "Ghana" },
  { value: "kenya", label: "Kenya" },
  { value: "south_africa", label: "South Africa" },
  { value: "united_kingdom", label: "United Kingdom" },
  { value: "united_states", label: "United States" },
  { value: "other", label: "Other" },
];

// ✅ MOVED OUT
// interface StepDotsProps {
//   totalSteps: number;
//   currentStep: number;
// }

// const StepDots = ({ totalSteps, currentStep }: StepDotsProps) => (
//   <div className="flex gap-1.5 items-center mb-5">
//     {Array.from({ length: totalSteps }).map((_, i) => (
//       <div
//         key={i}
//         className={`h-2 rounded-full transition-all duration-300 ${
//           i === currentStep - 1 ? "w-6 bg-[#008847]" : "w-2 bg-gray-300"
//         }`}
//       />
//     ))}
//   </div>
// );

// ✅ MOVED OUT
interface FormBodyProps {
  form: RegisterStep3Form;
  errors: Partial<Record<keyof RegisterStep3Form, string>>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleContinue: () => void;
  navigate: (path: string) => void;
}

const FormBody = ({
  form,
  errors,
  handleChange,
  handleContinue,
  navigate,
}: FormBodyProps) => (
  <motion.div
    className="flex flex-col gap-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <Select
      name="specialty"
      value={form.specialty}
      onChange={handleChange}
      options={specialtyOptions}
      placeholder="Select Specialty"
      error={errors.specialty}
      className="bg-[#F2FFF9]"
    />

    <Select
      name="yearsOfExperience"
      value={form.yearsOfExperience}
      onChange={handleChange}
      options={experienceOptions}
      placeholder="Years of practice"
      error={errors.yearsOfExperience}
      className="bg-[#F2FFF9]"
    />

    <Select
      name="countryOfPractice"
      value={form.countryOfPractice}
      onChange={handleChange}
      options={countryOptions}
      placeholder="Address / Place / Country of Practice"
      error={errors.countryOfPractice}
      className="bg-[#F2FFF9]"
    />

    <div className="pt-2">
      <Button variant="primary" label="Continue" onClick={handleContinue} />
    </div>

    <p className="text-center text-sm text-[#A7ADBE] font-inter">
      Already have an account?{" "}
      <span
        onClick={() => navigate("/login")}
        className="text-[#008847] font-semibold cursor-pointer"
      >
        Log in
      </span>
    </p>
  </motion.div>
);

// ================= MAIN =================

const Register3 = () => {
  const navigate = useNavigate();

  const totalSteps = 4;
  const currentStep = 3;

  const [form, setForm] = useState<RegisterStep3Form>({
    specialty: "",
    yearsOfExperience: "",
    countryOfPractice: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterStep3Form, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof RegisterStep3Form]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errs: Partial<Record<keyof RegisterStep3Form, string>> = {};

    if (!form.specialty) errs.specialty = "Please select a specialty.";
    if (!form.yearsOfExperience)
      errs.yearsOfExperience = "Years of experience is required.";
    if (!form.countryOfPractice)
      errs.countryOfPractice = "Country of practice is required.";

    return errs;
  };

  const handleContinue = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    sessionStorage.setItem("heiler_reg_step3", JSON.stringify(form));
    navigate("/register/set-password");
  };

  return (
    <PageWrapper>
      <div className="max-w-[428px] mx-auto flex flex-col min-h-screen bg-white md:hidden">
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
            handleContinue={handleContinue}
            navigate={navigate}
          />
        </div>
      </div>

      <div
        className="hidden md:flex min-h-screen items-center justify-center relative"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <motion.div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 px-8 pt-8 pb-10">
          <AuthHeader
            title="Create an Account"
            subtitle="Register to have access to the Dashboard."
            showLogo={true}
          />

          <FormBody
            form={form}
            errors={errors}
            handleChange={handleChange}
            handleContinue={handleContinue}
            navigate={navigate}
          />
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Register3;
