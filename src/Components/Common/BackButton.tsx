import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

interface BackButtonProps {
  onClick?: () => void;
  label?: string;
}

const BackButton = ({ onClick, label = "Back" }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    else navigate(-1);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer py-2 text-base font-medium text-[#1B1B1B]"
    >
      <FiChevronLeft size={18} className="text-[#1B1B1B]" />
      {label && <span>{label}</span>}
    </button>
  );
};

export default BackButton;
