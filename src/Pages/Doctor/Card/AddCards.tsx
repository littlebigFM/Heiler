import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";
import { Button, Input } from "../../../Components/Props";
import BackButton from "../../../Components/Common/BackButton";

const AddCards = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    saveCard: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);

    navigate("/doctor/cards");
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        {/* BACK */}
        {/* <button
          onClick={() => navigate(-1)}
          className="
            flex
            items-center
            gap-2
            text-sm
            text-[#1B2922]
            mb-8
          "
        >
          <FiArrowLeft />
          Back
        </button> */}
        <BackButton onClick={() => navigate(-1)} />

        {/* CARD */}

        {/* mobile */}

        <div className="min-[650px]:hidden flex flex-col gap-8">
          <h1 className="text-primary text-[16px] font-bold">Add New Card</h1>
          <div className="flex flex-col gap-4">
            <div>
              <Input
                label="Credit Card Number"
                type="text"
                name="cardNumber"
                placeholder="1234 1234 1234 1234"
                value={formData.cardNumber}
                onChange={handleChange}
                className="bg-secondary border-none"
              />
            </div>

            <div className="flex gap-2 w-full">
              <Input
                label="Exp Date"
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                className="bg-secondary border-none"
                inputClassName="w-full"
              />
              <Input
                label="CVV"
                type="password"
                name="cvv"
                placeholder="***"
                value={formData.cvv}
                onChange={handleChange}
                className="bg-secondary border-none"
                inputClassName="w-full"
              />
            </div>
          </div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="saveCard"
              checked={formData.saveCard}
              onChange={handleChange}
              className="accent-primary"
            />

            <span className="text-sm text-[#1B2922]">Save card</span>
          </label>
          <Button
            label="Add"
            onClick={handleSubmit}
            className="rounded-[10px]"
          />{" "}
        </div>

        {/* desktop */}
        <div
          className="
        hidden min-[650px]:flex
        w-full
        max-w-107.5
        mx-auto
        border border-[#ECECEC]
        rounded-2xl
        p-10
      bg-white
       flex-col gap-8
      "
        >
          <h1 className="font-bold text-[17px] text-[#192720] text-center">
            Add New Card
          </h1>

          <div className="flex flex-col gap-4">
            <div>
              <Input
                label="Credit Card Number"
                type="text"
                name="cardNumber"
                placeholder="1234 1234 1234 1234"
                value={formData.cardNumber}
                onChange={handleChange}
                className="bg-secondary border-none"
              />
            </div>

            <div className="flex gap-2 w-full">
              <Input
                label="Exp Date"
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                className="bg-secondary border-none"
                inputClassName="w-full"
              />
              <Input
                label="CVV"
                type="password"
                name="cvv"
                placeholder="***"
                value={formData.cvv}
                onChange={handleChange}
                className="bg-secondary border-none"
                inputClassName="w-full"
              />
            </div>
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="saveCard"
              checked={formData.saveCard}
              onChange={handleChange}
              className="accent-primary"
            />

            <span className="text-sm text-[#1B2922]">Save card</span>
          </label>

          <Button
            label="Add"
            onClick={handleSubmit}
            className="rounded-[10px]"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddCards;
