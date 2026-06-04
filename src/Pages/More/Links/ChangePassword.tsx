import { useState } from "react";

import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";
// import Input from "../../../Components/Inputs/Input";
// import Button from "../../../Components/Buttons/Button";

// import { Eye, EyeOff } from "lucide-react";
import { Button, Input } from "../../../Components/Props";
import BackButton from "../../../Components/Common/BackButton";

const ChangePassword = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <DashboardLayout label="Password">
      <div className="p-4 md:p-8">
        <div className="mb-6">
          <BackButton />
        </div>

        {/* Mobile */}
        <form
          onSubmit={handleSubmit}
          className="
            md:hidden
            w-full
            md:max-w-130
            mx-auto
            rounded-2xl
            bg-white
          "
        >
          <div className="space-y-6">
            {/* OLD PASSWORD */}
            <div className="relative">
              <Input
                type="password"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                placeholder="Old Password"
                className="border-none bg-secondary"
                inputClassName="w-full"
              />
            </div>

            {/* NEW PASSWORD */}
            <div className="relative">
              <Input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                className="border-none bg-secondary"
                inputClassName="w-full"
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative">
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm New Password"
                className="border-none bg-secondary"
                inputClassName="w-full"
              />
            </div>

            <Button type="submit" label="Save" className="w-full mt-4" />
          </div>
        </form>

        {/* Desktop */}

        <form
          onSubmit={handleSubmit}
          className="
            hidden md:block
            w-full
            md:max-w-130
            mx-auto
            border
            border-[#EAEAEA]
            rounded-2xl
            px-6
            py-4
            bg-white
          "
        >
          <div className="space-y-4">
            {/* OLD PASSWORD */}
            <div className="relative">
              <Input
                type="password"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                placeholder="Old Password"
                className="border-none bg-secondary"
                inputClassName="w-full"
              />
            </div>

            {/* NEW PASSWORD */}
            <div className="relative">
              <Input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                className="border-none bg-secondary"
                inputClassName="w-full"
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative">
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm New Password"
                className="border-none bg-secondary"
                inputClassName="w-full"
              />
            </div>

            <Button type="submit" label="Save" className="w-full mt-4" />
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default ChangePassword;
