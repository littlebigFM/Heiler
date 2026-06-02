import { ReactNode } from "react";

interface CheckboxProps {
  // label?: string;
  label?: ReactNode;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
}

const Checkbox = ({
  label,
  checked,
  onChange,
  name,
  disabled = false,
  className = "",
}: CheckboxProps) => {
  return (
    <label
      className={`flex items-start gap-2.5 cursor-pointer ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`}
    >
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="hidden"
      />
      <div
        className={`w-[22px] h-[22px] min-w-[22px] rounded flex items-center justify-center mt-0.5 transition-all border-2 ${
          checked ? "bg-[#008847] border-[#008847]" : "bg-white border-gray-300"
        }`}
      >
        {checked && (
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path
              d="M1 4L4.5 7.5L11 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {label && (
        <span className="text-sm text-gray-800 leading-relaxed select-none">
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
