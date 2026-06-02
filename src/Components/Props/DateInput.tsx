import { useState, useRef, useEffect } from "react";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
}

const DateInput = ({ value, onChange, label, error }: DateInputProps) => {
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tempDate, setTempDate] = useState<Date | null>(null);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const today = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysArray = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  // Handle day click (DO NOT confirm yet)
  const handleDayClick = (day: number) => {
    const date = new Date(year, month, day);

    if (date > today) return;

    setTempDate(date);
  };

  // Confirm selection
  const handleConfirm = () => {
    if (!tempDate) return;

    const iso = tempDate.toISOString().split("T")[0];
    onChange(iso);
    setOpen(false);
  };

  // Month navigation
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Format for input display (DD/MM/YYYY)
  const formatDisplay = (val: string) => {
    const date = new Date(val);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day} / ${month} / ${year}`;
  };

  const borderClass = error ? "border-red-500" : "border-[#E5E7EB]";

  const labelColor = error ? "text-red-500" : "text-[#1B1B1B]";

  return (
    <div className="w-full relative" ref={wrapperRef}>
      {/* Label */}
      {label && (
        <label className={`block text-sm font-medium mb-1 ${labelColor}`}>
          {label}
        </label>
      )}

      {/* Input */}
      <div className="relative">
        <input
          type="text"
          value={value ? formatDisplay(value) : ""}
          readOnly
          placeholder="DD / MM / YYYY"
          onClick={() => setOpen(true)}
          className={`
            w-full h-14
            px-4 pr-12
            border ${borderClass}
            border-[#C2C8D099]
            rounded-md
            bg-[#F2FFF9]
            text-[#1B1B1B]
            placeholder:text-[#A7ADBE]
            focus:outline-none
            focus:border-primary
            cursor-pointer
          `}
        />

        {error && <span className="text-xs text-red-500 mt-1">{error}</span>}

        {/* Icon */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-primary"
        >
          <FiCalendar size={18} />
        </button>
      </div>

      {/* Calendar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="
              absolute z-50
              bottom-full    mb-2 
              w-[320px]
              p-4
              bg-white 
              rounded-2xl 
              shadow-[0px_10px_30px_rgba(0,0,0,0.08)]
              border border-[#F1F1F1]
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <button
                onClick={prevMonth}
                className="p-2 rounded-full hover:bg-[#F5F5F5]"
              >
                <FiChevronLeft />
              </button>

              <span className="text-sm font-semibold">
                {currentDate.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </span>

              <button
                onClick={nextMonth}
                className="p-2 rounded-full hover:bg-[#F5F5F5]"
              >
                <FiChevronRight />
              </button>
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-y-2 text-center text-sm">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                <div key={d} className="text-xs text-gray-400">
                  {d}
                </div>
              ))}

              {daysArray.map((day, index) => {
                if (!day) return <div key={index} />;

                const date = new Date(year, month, day);

                const isFuture = date > today;

                const isSelected =
                  tempDate && date.toDateString() === tempDate.toDateString();

                return (
                  <button
                    key={index}
                    disabled={isFuture}
                    onClick={() => handleDayClick(day)}
                    className={`
                      h-10 w-10 rounded-lg flex items-center justify-center
                      transition text-sm
                      ${
                        isSelected
                          ? "bg-primary text-white"
                          : "hover:bg-[#E8F5EE] bg-[#F5F5F5]"
                      }
                      ${isFuture ? "text-gray-300 cursor-not-allowed" : ""}
                    `}
                  >
                    {String(day).padStart(2, "0")}
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <button
              onClick={handleConfirm}
              disabled={!tempDate}
              className="
                mt-5 w-full h-11
                bg-primary text-white
                rounded-lg font-semibold
                disabled:bg-gray-300
              "
            >
              Choose date
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DateInput;
