const theme = {
  colors: {
    primary: "#008847",
    primaryLight: "#E8F5EE",
    primaryDark: "#006635",
    accent: "#F5A623",
    white: "#FFFFFF",
    black: "#000000",
    text: {
      primary: "#000000",
      secondary: "#6B7280",
      muted: "#9CA3AF",
      inverse: "#FFFFFF",
    },
    border: "#E5E7EB",
    borderFocus: "#008847",
    background: "#FFFFFF",
    backgroundAlt: "#F9FAFB",
    error: "#EF4444",
    errorLight: "#FEE2E2",
    success: "#008847",
    successLight: "#E8F5EE",
    shadow: "rgba(0, 0, 0, 0.05)",
  },

  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },

  fontSizes: {
    xs: "12px",
    sm: "13px",
    base: "14px",
    md: "15px",
    lg: "16px",
    xl: "18px",
    "2xl": "20px",
    "3xl": "24px",
    "4xl": "28px",
    "5xl": "32px",
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  radii: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "20px",
    full: "9999px",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
    "3xl": "48px",
  },

  shadows: {
    sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
    md: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },

  // Button variants
  button: {
    primary: {
      background: "#008847",
      color: "#FFFFFF",
      border: "none",
      height: "56px",
      borderRadius: "4px",
      fontSize: "16px",
      fontWeight: 700,
      fontFamily: "'Inter', sans-serif",
    },
    outline: {
      background: "transparent",
      color: "#008847",
      border: "1px solid #008847",
      height: "56px",
      borderRadius: "4px",
      fontSize: "16px",
      fontWeight: 700,
      fontFamily: "'Inter', sans-serif",
    },
    ghost: {
      background: "transparent",
      color: "#008847",
      border: "none",
      height: "auto",
      fontSize: "14px",
      fontWeight: 600,
      fontFamily: "'Inter', sans-serif",
    },
    small: {
      background: "#008847",
      color: "#FFFFFF",
      border: "none",
      height: "42px",
      borderRadius: "4px",
      fontSize: "14px",
      fontWeight: 700,
      fontFamily: "'Inter', sans-serif",
    },
  },

  // Input variants
  input: {
    height: "56px",
    borderRadius: "4px",
    border: "1px solid #E5E7EB",
    borderFocus: "1px solid #008847",
    background: "#FFFFFF",
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    padding: "16px",
    labelFontSize: "12px",
    labelColor: "#6B7280",
  },

  // Bottom nav
  nav: {
    height: "90px",
    background: "#FFFFFF",
    borderTop: "1px solid #E5E7EB",
    activeColor: "#008847",
    inactiveColor: "#9CA3AF",
  },

  // Max width for web (centered layout)
  maxWidth: "428px",
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export default theme;
