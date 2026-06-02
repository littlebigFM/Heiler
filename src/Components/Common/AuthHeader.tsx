import Logo from "../../assets/logo/logo.png";

// 1. Define the interface for your props
interface AuthHeaderProps {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
  step?: number; // Added to fix the error
  totalSteps?: number;
  imgSrc?: string;
  imgSrc2?: string;
}

// 2. Apply the interface to the component
const AuthHeader = ({
  title,
  subtitle,
  showLogo = false,
  step,
  totalSteps,
  imgSrc,
  imgSrc2,
}: AuthHeaderProps) => {
  return (
    <div className="px-6 pt-4 pb-6 relative">
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {showLogo && (
          <div className="mb-2">
            <img src={Logo} alt="Heiler Logo" />
          </div>
        )}

        <img src={imgSrc} alt="" />

        <h1 className="font-poppins text-2xl font-bold text-[#1B1B1B] mb-1.5 leading-snug">
          {title}
        </h1>

        {subtitle && (
          <p className="mb-5 text-base text-[#A7ADBE] leading-relaxed">
            {subtitle}
          </p>
        )}

        <img src={imgSrc2} alt="" />

        {/* 3. Optional: Display the step count if it exists */}
        {step && totalSteps && (
          <div className="mt-4 px-3 py-1 bg-[#F2FFF9] rounded-full">
            <p className="text-xs font-semibold text-[#008847]">
              Step {step} of {totalSteps}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthHeader;
