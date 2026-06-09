// src/Pages/Auth/Register2.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useApp } from "../../Context/AppContext";
import { Button, Input, Select } from "../../Components/Props";
import AuthHeader from "../../Components/Common/AuthHeader";
import PageWrapper from "../../Components/Common/PageWrapper";

import type { RegisterStep2Form, SelectOption } from "../../types";

import img from "../../assets/Images/img5.png";

const nationalityOptions: SelectOption[] = [
  { value: "nigerian", label: "Nigerian" },
  { value: "ghanaian", label: "Ghanaian" },
  { value: "kenyan", label: "Kenyan" },
  { value: "south_african", label: "South African" },
  { value: "british", label: "British" },
  { value: "american", label: "American" },
  { value: "other", label: "Other" },
];

const OccupationOptions: SelectOption[] = [
  { value: "doctor", label: "Doctor" },
  { value: "nurse", label: "Nurse" },
  { value: "pharmacist", label: "Pharmacist" },
];

// ===================== COMPONENTS (MOVED OUT) =====================

interface PhoneFieldProps {
  form: RegisterStep2Form;
  errors: Partial<Record<keyof RegisterStep2Form, string>>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
}

const PhoneField = ({ form, errors, handleChange }: PhoneFieldProps) => (
  <div className="flex flex-col gap-1.5 w-full">
    <div
      className={`flex items-center gap-2.5 h-14 rounded ${
        errors.phone ? "border border-red-500" : "border-none"
      }`}
    >
      <div className="flex bg-[#F2FFF9] rounded-lg border border-[#C2C8D099] items-center gap-1.5 px-3 h-full">
        <span>🇳🇬</span>
        <select
          name="countryCode"
          value={form.countryCode}
          onChange={handleChange}
          className="bg-transparent outline-none text-sm"
        >
          <option value="+234">+234</option>
          <option value="+233">+233</option>
          <option value="+254">+254</option>
          <option value="+27">+27</option>
          <option value="+44">+44</option>
          <option value="+1">+1</option>
        </select>
      </div>

      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="8023456789"
        className=" rounded-lg border border-[#C2C8D099] flex-1 h-full px-3 bg-[#F2FFF9] outline-none text-sm"
      />
    </div>

    {errors.phone && (
      <span className="text-xs text-red-500">{errors.phone}</span>
    )}
  </div>
);

interface GenderToggleProps {
  form: RegisterStep2Form;
  errors: Partial<Record<keyof RegisterStep2Form, string>>;
  selectGender: (g: "male" | "female") => void;
}

const GenderToggle = ({ form, errors, selectGender }: GenderToggleProps) => (
  <div className="flex flex-col gap-1.5 w-full">
    <div
      className={`flex gap-6 h-14 items-center px-4 ${
        errors.gender ? "border border-red-500" : "border-none"
      }`}
    >
      {(["Male", "Female"] as const).map((g) => {
        const val = g.toLowerCase() as "male" | "female";
        const active = form.gender === val;

        return (
          <button
            key={g}
            type="button"
            onClick={() => selectGender(val)}
            className={`flex items-center gap-2 ${
              active ? "text-primary" : "text-gray-600"
            }`}
          >
            <span className="w-5 h-5 border border-primary rounded flex items-center justify-center">
              {active && (
                <span className="w-2.5 h-2.5 bg-primary rounded-full" />
              )}
            </span>
            {g}

            <span className="font-bold text-[#474747] text-[20px] text-base">
              {" "}
              {g === "Male" ? "♂" : "♀"}{" "}
            </span>
          </button>
        );
      })}
    </div>

    {errors.gender && (
      <span className="text-xs text-red-500">{errors.gender}</span>
    )}
  </div>
);

interface FormBodyProps {
  form: RegisterStep2Form;
  errors: Partial<Record<keyof RegisterStep2Form, string>>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  selectGender: (g: "male" | "female") => void;
  handleNext: () => void;
  navigate: (path: string) => void;
}

const FormBody = ({
  form,
  errors,
  handleChange,
  selectGender,
  handleNext,
  navigate,
}: FormBodyProps) => (
  <motion.div
    className="flex flex-col gap-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <PhoneField form={form} errors={errors} handleChange={handleChange} />

    <GenderToggle form={form} errors={errors} selectGender={selectGender} />

    <Select
      name="occupation"
      value={form.occupation}
      onChange={handleChange}
      options={OccupationOptions}
      placeholder="Occupation"
      error={errors.occupation}
      className="bg-[#F2FFF9]"
    />

    <Select
      name="nationality"
      value={form.nationality}
      onChange={handleChange}
      options={nationalityOptions}
      placeholder="Nationality"
      error={errors.nationality}
      className="bg-[#F2FFF9]"
    />

    <Input
      name="homeAddress"
      value={form.homeAddress}
      onChange={handleChange}
      placeholder="Home address"
      error={errors.homeAddress}
      className="bg-[#F2FFF9]"
    />

    <Button variant="primary" label="Next" onClick={handleNext} />

    <p className="text-center text-sm text-[#A7ADBE]">
      Already have an account?{" "}
      <span
        onClick={() => navigate("/login")}
        className="text-primary font-semibold cursor-pointer"
      >
        Log in
      </span>
    </p>
  </motion.div>
);

// ===================== MAIN COMPONENT =====================

const Register2 = () => {
  const navigate = useNavigate();
  const { role } = useApp();

  const isDoctor = role === "doctor";

  const [form, setForm] = useState<RegisterStep2Form>({
    countryCode: "+234",
    phone: "",
    gender: "",
    occupation: "",
    nationality: "",
    homeAddress: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterStep2Form, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof RegisterStep2Form]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const selectGender = (g: "male" | "female") => {
    setForm((prev) => ({ ...prev, gender: g }));

    if (errors.gender) {
      setErrors((prev) => ({ ...prev, gender: "" }));
    }
  };

  const validate = () => {
    const errs: Partial<Record<keyof RegisterStep2Form, string>> = {};

    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    if (!form.gender) errs.gender = "Please select a gender.";
    if (!form.nationality) errs.nationality = "Nationality is required.";
    if (!form.homeAddress.trim())
      errs.homeAddress = "Home address is required.";

    return errs;
  };

  const handleNext = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    sessionStorage.setItem("heiler_reg_step2", JSON.stringify(form));

    navigate(isDoctor ? "/register/step3" : "/register/set-password");
  };

  return (
    <PageWrapper>
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
            selectGender={selectGender}
            handleNext={handleNext}
            navigate={navigate}
          />
        </div>
      </div>

      <div
        className="hidden md:flex min-h-screen items-center justify-center relative"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <motion.div className="relative z-10 bg-white rounded-2xl w-full max-w-md px-8 py-10">
          <AuthHeader
            title="Create an Account"
            subtitle="Register to have access to the Dashboard."
            showLogo={true}
          />

          <FormBody
            form={form}
            errors={errors}
            handleChange={handleChange}
            selectGender={selectGender}
            handleNext={handleNext}
            navigate={navigate}
          />
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Register2;
