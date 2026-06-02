// const variantClasses = {
//   success: "bg-[#E8F5EE] text-[#008847]",
//   error: "bg-red-100 text-red-500",
//   warning: "bg-yellow-100 text-yellow-600",
//   info: "bg-blue-100 text-blue-600",
//   neutral: "bg-gray-100 text-gray-500",
// };

// const Badge = ({ label, variant = "neutral", size = "sm", className = "" }) => {
//   return (
//     <span
//       className={`inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap ${
//         size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm"
//       } ${variantClasses[variant] || variantClasses.neutral} ${className}`}
//     >
//       {label}
//     </span>
//   );
// };

// export default Badge;

interface BadgeProps {
  label: string;
  variant?: "success" | "error" | "warning" | "info" | "neutral";
  size?: "sm" | "md";
  className?: string;
}

const variantClasses = {
  success: "bg-[#E8F5EE] text-[#008847]",
  error: "bg-red-100 text-red-500",
  warning: "bg-yellow-100 text-yellow-600",
  info: "bg-blue-100 text-blue-600",
  neutral: "bg-gray-100 text-gray-500",
};

const Badge = ({
  label,
  variant = "neutral",
  size = "sm",
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap ${
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm"
      } ${variantClasses[variant]} ${className}`}
    >
      {label}
    </span>
  );
};

export default Badge;
