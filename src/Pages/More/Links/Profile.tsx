import { useState } from "react";

import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";
// import Input from "../../../Components/Inputs/Input";
// import Button from "../../../Components/Buttons/Button";

import { Camera, CalendarDays } from "lucide-react";
import { Button, Input } from "../../../Components/Props";
import BackButton from "../../../Components/Common/BackButton";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    countryCode: "+234",
    phone: "",
    role: "Doctor",
    specialty: "",
    address: "",
    email: "",
    dob: "",
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
    <DashboardLayout>
      <div className="px-6 pt-4 md:py-6">
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
          {/* BACK */}

          {/* IMAGE */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                // src="https://i.pravatar.cc/150?img=12"
                alt="profile"
                className="
                  w-18
                  h-18
                  rounded-full
                  object-cover
                "
              />

              <button
                type="button"
                className="
                  absolute
                  bottom-0
                  right-0
                  w-6
                  h-6
                  rounded-full
                  bg-[#16A34A]
                  flex
                  items-center
                  justify-center
                "
              >
                <Camera className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="border-none bg-secondary"
              inputClassName="w-full"
            />

            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="border-none bg-secondary"
              inputClassName="w-full"
            />

            {/* GENDER */}
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />
                Male
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>

            {/* PHONE */}
            <div className="flex gap-3">
              <div className="w-[30%]">
                <Input
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="border-none bg-secondary"
                  inputClassName="w-full"
                />
              </div>

              <div className="w-[70%]">
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="8023456789"
                  className="border-none bg-secondary"
                  inputClassName="w-full"
                />
              </div>
            </div>

            <Input
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Doctor"
              className="border-none bg-secondary"
              inputClassName="w-full"
            />

            <Input
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              placeholder="Specialty"
              className="border-none bg-secondary"
              inputClassName="w-full"
            />

            <Input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Home Address"
              className="border-none bg-secondary"
              inputClassName="w-full"
            />

            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border-none bg-secondary"
              inputClassName="w-full"
            />

            {/* DATE */}
            <div className="relative">
              <Input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="border-none bg-secondary"
                inputClassName="w-full"
              />

              <CalendarDays
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  w-4
                  h-4
                  text-[#9CA3AF]
                  pointer-events-none
                "
              />
            </div>

            <Button type="submit" label="Save" className="w-full mt-2" />
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
          {/* BACK */}

          {/* IMAGE */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                // src="https://i.pravatar.cc/150?img=12"
                alt="profile"
                className="
                  w-18
                  h-18
                  rounded-full
                  object-cover
                "
              />

              <button
                type="button"
                className="
                  absolute
                  bottom-0
                  right-0
                  w-6
                  h-6
                  rounded-full
                  bg-[#16A34A]
                  flex
                  items-center
                  justify-center
                "
              >
                <Camera className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="border-none bg-secondary"
            />

            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="border-none bg-secondary"
            />

            {/* GENDER */}
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />
                Male
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>

            {/* PHONE */}
            <div className="flex gap-3">
              <div className="w-[30%]">
                <Input
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="border-none bg-secondary"
                />
              </div>

              <div className="w-[70%]">
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="8023456789"
                  className="border-none bg-secondary"
                />
              </div>
            </div>

            <Input
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Doctor"
              className="border-none bg-secondary"
            />

            <Input
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              placeholder="Specialty"
              className="border-none bg-secondary"
            />

            <Input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Home Address"
              className="border-none bg-secondary"
            />

            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border-none bg-secondary"
            />

            {/* DATE */}
            <div className="relative">
              <Input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="border-none bg-secondary"
              />

              <CalendarDays
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  w-4
                  h-4
                  text-[#9CA3AF]
                  pointer-events-none
                "
              />
            </div>

            <Button type="submit" label="Save" className="w-full mt-2" />
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
