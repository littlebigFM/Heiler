import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: SelectOption[];
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
}

const Select = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  error,
  disabled = false,
  className = "",
  inputClassName = "",
}: SelectProps) => {
  const [focused, setFocused] = useState(false);
  const borderClass = error
    ? "border-red-500"
    : focused
      ? "border-[#008847]"
      : "border-gray-200";
  const labelColor = error
    ? "text-red-500"
    : focused
      ? "text-[#008847]"
      : "text-gray-500";

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          className={`text-xs font-medium transition-colors ${labelColor}`}
        >
          {label}
        </label>
      )}
      <div
        className={`flex items-center h-14 border ${borderClass} ${className} rounded px-4 gap-2 transition-colors`}
      >
        <select
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`flex-1 border-none outline-none bg-transparent text-sm text-[#858585] appearance-none cursor-pointer disabled:cursor-not-allowed ${inputClassName}`}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <FiChevronDown
          size={18}
          className="text-gray-400 flex-shrink-0 pointer-events-none"
        />
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Select;
