const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: { icon: 28, text: "text-lg" },
    md: { icon: 36, text: "text-2xl" },
    lg: { icon: 52, text: "text-4xl" },
  } as const;

  const current = sizes[size] ?? sizes.md;

  const StethoscopeIcon = () => (
    <svg
      width={current.icon}
      height={current.icon}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="36"
        cy="36"
        r="7"
        stroke="#F5A623"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="36" cy="36" r="3" fill="#F5A623" />
      <path
        d="M15 10 C15 10 10 10 10 18 C10 26 10 30 18 30 C26 30 26 38 26 38 C26 43 30 43 36 43"
        stroke="#008847"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="10"
        x2="22"
        y2="10"
        stroke="#008847"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="10" cy="10" r="3" fill="#008847" />
      <circle cx="22" cy="10" r="3" fill="#008847" />
    </svg>
  );

  return (
    <div className="flex items-center gap-2">
      <StethoscopeIcon />
      <span
        className={`${current.text} font-bold font-poppins text-[#008847] tracking-tight`}
      >
        heiler<span className="text-[#F5A623]">.</span>
      </span>
    </div>
  );
};

export default Logo;
