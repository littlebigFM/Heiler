import { useApp } from "../../../Context/AppContext";
import { FiChevronLeft } from "react-icons/fi";

interface HeaderProps {
  variant?: "home" | "page";
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  showAvatar?: boolean;
  rightContent?: React.ReactNode;
  className?: string;
  label?: string;
  date?: string;
}

const Header = ({
  variant = "home",
  title,
  subtitle,
  onBack,
  showAvatar = true,
  rightContent,
  className,
  label,
  date,
}: HeaderProps) => {
  const { user } = useApp();

  // ───────────────── HOME HEADER ─────────────────
  if (variant === "home") {
    return (
      <div
        className={`
          h-28
          bg-white
          border-b border-[#00000010]
          flex items-center justify-between
          px-6
          sticky top-0 z-40
         ${className}
        `}
      >
        {/* LEFT */}
        <div>
          <p className="text-xs text-gray-400">{date}</p>
          <h1 className="text-xl font-bold text-[#1B2922]">
            {/* Hi, {user?.firstName} */}
            {label}
          </h1>
        </div>
        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {rightContent}

          {showAvatar && (
            <div className="flex items-center gap-2">
              <img
                src={user?.avatar || "https://via.placeholder.com/40"}
                className="w-10 h-10 rounded-full object-cover"
              />

              <p className="hidden md:block text-xl font-bold text-[#1B2922]">
                {user?.fullName}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ───────────────── PAGE HEADER ─────────────────
  return (
    <div
      className="
        h-17.5
        bg-white
        border-b border-[#00000010]
        flex items-center justify-between
        px-5
        fixed
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        {onBack && (
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FiChevronLeft size={20} />
          </button>
        )}

        <div>
          <h1 className="text-lg font-bold text-[#1B2922]">{title}</h1>

          {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {rightContent}

        {showAvatar && (
          <div>
            <img
              src={user?.avatar || "https://via.placeholder.com/40"}
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="text-xs text-gray-400">{user?.fullName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
