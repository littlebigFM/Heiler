import React from "react";
import { Check, X } from "lucide-react";
import {
  getStrengthLabel,
  validatePassword,
} from "../../utils/passwordValidator";

interface PasswordStrengthProps {
  password?: string;
}

const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  if (!password) return null;

  const { rules, strength } = validatePassword(password);
  const { label, color } = getStrengthLabel(strength);

  return (
    <div className="flex flex-col gap-3 mt-2">
      {/* Strength bar */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-black/50">Password strength</span>
          <span className="text-[12px] font-semibold" style={{ color }}>
            {label}
          </span>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className="flex-1 h-1 rounded-full transition-all duration-300"
              style={{
                backgroundColor: level <= strength ? color : "#E5E7EB",
              }}
            />
          ))}
        </div>
      </div>

      {/* Rules checklist */}
      <div className="flex flex-col gap-1.5">
        {rules.map((rule) => (
          <div key={rule.id} className="flex items-center gap-2">
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                rule.passed ? "bg-[#00C853]" : "bg-black/10"
              }`}
            >
              {rule.passed ? (
                <Check size={10} className="text-white" strokeWidth={3} />
              ) : (
                <X size={10} className="text-black/30" strokeWidth={3} />
              )}
            </div>
            <span
              className={`text-[12px] transition-colors ${
                rule.passed ? "text-[#00C853]" : "text-black/40"
              }`}
            >
              {rule.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordStrength;
