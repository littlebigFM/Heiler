import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
}

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  trailingIcon,
  leadingIcon,
  disabled = false,
  className = "",
  inputClassName = "",
  ...rest
}: InputProps) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const borderClass = error
    ? "border-red-500"
    : focused
      ? "border-[#008847]"
      : "border-[#C2C8D099]";
  const labelColor = error
    ? "text-red-500"
    : focused
      ? "text-[#008847]"
      : "text-gray-500";

  return (
    <div className={`flex flex-col gap-1.5 w-full`}>
      {label && (
        <label
          className={`text-xs font-medium transition-colors ${labelColor}`}
        >
          {label}
        </label>
      )}
      <div
        className={`flex items-center h-14 border ${borderClass} rounded px-4 gap-2 transition-colors ${className}`}
      >
        {leadingIcon && (
          <span className="text-gray-400 shrink-0">{leadingIcon}</span>
        )}
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`flex-1 border-none outline-none bg-transparent text-sm text-gray-900 placeholder-gray-400 disabled:cursor-not-allowed ${inputClassName}`}
          {...rest}
        />
        {isPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 shrink-0 focus:outline-none"
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        ) : (
          trailingIcon && (
            <span className="text-gray-400 shrink-0">{trailingIcon}</span>
          )
        )}
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
