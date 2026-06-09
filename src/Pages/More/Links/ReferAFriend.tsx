// src/Pages/User/ReferAFriend.tsx

import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi"; // Make sure to npm install react-icons
import referralIllustration from "../../../assets/Images/refer.png"; // Replace with your actual asset path
import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";
import BackButton from "../../../Components/Common/BackButton";

const ReferAFriend = () => {
  // Replace this with your dynamic state logic or context value later
  const referralCode = "eink20er9fghbtd9ndgsfsldcvn";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);

      // Reset the success state checkmark after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text to clipboard: ", err);
    }
  };

  return (
    <DashboardLayout label="Refer a friend">
      <div className="p-6">
        <BackButton />

        <div
          className=" border-2 p-6
        border-[#EAEAEA] max-w-107 mx-auto bg-white flex flex-col justify-between "
        >
          <div className="flex flex-col items-center flex-1 justify-center">
            {/* Central Feature Illustration */}
            <div className="w-full max-w-72 flex justify-center mb-8">
              <img
                src={referralIllustration}
                alt="Refer a friend illustration"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Promo Descriptive Subtext */}
            <p className="text-center text-[#4A5568] text-sm leading-relaxed max-w-xs mb-10">
              Enjoy up to{" "}
              <span className="font-semibold text-[#0D1B2A]">₦1,000</span> with
              your referral code when your people sign up with it.
            </p>

            {/* ── REFERRAL BOX ACTIONS ── */}
            <div
              onClick={handleCopy}
              className="w-full flex items-center justify-between border border-primary rounded-[5px] px-4 py-3.5 bg-white **:cursor-pointer hover:bg-[#F1F5F9] active:scale-[0.99] transition-all duration-200 group"
            >
              {/* Code display field */}
              <span className="text-[#10B981] font-mono font-medium text-sm overflow-x-auto whitespace-nowrap scrollbar-none pr-3">
                {referralCode}
              </span>

              {/* Dynamic interactive action icon */}
              <button
                type="button"
                aria-label="Copy referral code"
                className="text-[#64748B] group-hover:text-[#10B981] transition-colors p-1"
              >
                {copied ? (
                  <FiCheck className="w-5 h-5 text-[#10B981] animate-scaleIn" />
                ) : (
                  <FiCopy className="w-5 h-5 transition-transform group-active:scale-90" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReferAFriend;
