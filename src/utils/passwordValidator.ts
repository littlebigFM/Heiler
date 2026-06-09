// src/utils/passwordValidator.ts

export interface PasswordRule {
  id: string;
  label: string;
  passed: boolean; // Cleanly isolated from the execution test function
}

export interface ValidationResult {
  rules: PasswordRule[];
  isValid: boolean; // Added here to match your function return
  strength: number; // Score from 0 to 5
}

export interface StrengthMeta {
  label: string;
  color: string;
  textClass: string;
  bgClass: string;
}

/**
 * Validates a raw password string against complex character patterns
 */
export const validatePassword = (password: string): ValidationResult => {
  const rules = [
    {
      id: "length",
      label: "At least 8 characters",
      test: (p: string) => p.length >= 8,
    },
    {
      id: "uppercase",
      label: "At least one uppercase letter",
      test: (p: string) => /[A-Z]/.test(p),
    },
    {
      id: "lowercase",
      label: "At least one lowercase letter",
      test: (p: string) => /[a-z]/.test(p),
    },
    {
      id: "number",
      label: "At least one number",
      test: (p: string) => /[0-9]/.test(p),
    },
    {
      id: "special",
      label: "At least one special character (!@#$%^&*)",
      test: (p: string) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(p),
    },
  ];

  // Map rules to match the strict PasswordRule interface by stripping out the test method
  const results: PasswordRule[] = rules.map((rule) => ({
    id: rule.id,
    label: rule.label,
    passed: rule.test(password),
  }));

  const isValid = results.every((rule) => rule.passed);
  const strength = results.filter((rule) => rule.passed).length;

  return { rules: results, isValid, strength };
};

/**
 * Maps strength scores directly to clean UI design tokens
 */
export const getStrengthLabel = (strength: number): StrengthMeta => {
  if (strength <= 1) {
    return {
      label: "Very Weak",
      color: "#DB4444",
      textClass: "text-[#DB4444]",
      bgClass: "bg-[#DB4444]",
    };
  }
  if (strength === 2) {
    return {
      label: "Weak",
      color: "#FF8C00",
      textClass: "text-[#FF8C00]",
      bgClass: "bg-[#FF8C00]",
    };
  }
  if (strength === 3) {
    return {
      label: "Fair",
      color: "#FFD700",
      textClass: "text-[#FFD700]",
      bgClass: "bg-[#FFD700]",
    };
  }
  if (strength === 4) {
    return {
      label: "Strong",
      color: "#90EE90",
      textClass: "text-[#90EE90]",
      bgClass: "bg-[#90EE90]",
    };
  }
  if (strength === 5) {
    return {
      label: "Very Strong",
      color: "#00C853",
      textClass: "text-[#00C853]",
      bgClass: "bg-[#00C853]",
    };
  }
  return {
    label: "",
    color: "",
    textClass: "text-gray-300",
    bgClass: "bg-gray-200",
  };
};
