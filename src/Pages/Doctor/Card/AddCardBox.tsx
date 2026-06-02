import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface Props {
  onClick: () => void;
}

const AddCardBox = ({ onClick }: Props) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={onClick}
      className="
        w-full
        min-[768px]:w-[48%]
        min-[1200px]:w-[31%]
        h-42.5
        rounded-2xl
        border border-[#E9E9E9]
        flex
        flex-col
        items-center
        justify-center
        gap-3
      "
    >
      <div
        className="
          w-10
          h-10
          rounded-full
          bg-[#F4FBF7]
          flex
          items-center
          justify-center
        "
      >
        <FiPlus className="text-primary" />
      </div>

      <p
        onClick={() => navigate("/doctor/cards/add")}
        className="font-medium text-primary"
      >
        Add New Card
      </p>
    </button>
  );
};

export default AddCardBox;
