import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "outline" | "ordinary" | "ghost" | "small";
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  className?: string;
  width?: string | number;
}

const variantClasses = {
  primary:
    "bg-[#008847] text-white border-transparent hover:bg-[#006635] disabled:bg-gray-300 disabled:text-gray-400",
  outline:
    "bg-transparent text-[#008847] border border-[#008847] hover:bg-[#E8F5EE] disabled:border-gray-300 disabled:text-gray-400",

  ordinary:
    "bg-transparent text-[#4D4D4D] disabled:border-gray-300 disabled:text-gray-400",

  ghost:
    "bg-transparent text-[#008847] border-transparent hover:underline disabled:text-gray-400",
  small:
    "bg-[#008847] text-white border-transparent hover:bg-[#006635] disabled:bg-gray-300",
};

const sizeClasses = {
  primary: "h-14 px-6 text-base font-bold rounded",
  outline: "h-14 px-6 text-base font-bold rounded",
  ordinary: "h-12 px-4 text-sm font-medium rounded",
  ghost: "h-auto px-0 text-sm font-semibold",
  small: "h-[42px] px-5 text-sm font-bold rounded",
};

const Button = ({
  variant = "primary",
  label,
  children,
  onClick,
  disabled = false,
  loading = false,
  type = "button",
  icon,
  className = "",
  width,
}: ButtonProps) => {
  const base =
    "flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 shadow-s focus:outline-none select-none";
  const widthClass = width ? "" : "w-full";
  const widthStyle = width ? { width } : {};

  return (
    <motion.button
      type={type || "button"}
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
      className={`${base} ${variantClasses[variant]} ${sizeClasses[variant]} ${widthClass} ${className}`}
      style={widthStyle}
    >
      {loading ? (
        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <>
          {icon && <span className="flex items-center">{icon}</span>}
          {label || children}
        </>
      )}
    </motion.button>
  );
};

export default Button;
