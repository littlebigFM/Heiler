import { FiSearch } from "react-icons/fi";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const SearchInput = ({
  placeholder = "Search...",
  value,
  onChange,
  className = "",
}: SearchInputProps) => {
  return (
    <div
      className={`
        h-13
        bg-white
        border border-[#EAEAEA]
        rounded-xl
        px-4
        flex items-center gap-3
        ${className}
       shadow-sm
]
      `}
    >
      <FiSearch className="text-[#A0A0A0]" size={18} />

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="
          flex-1
          bg-transparent
          outline-none
          text-sm
          placeholder:text-[#B8B8B8]
        "
      />
    </div>
  );
};

export default SearchInput;
