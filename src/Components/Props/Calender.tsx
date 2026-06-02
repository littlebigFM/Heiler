import { useState } from "react";

interface CalendarProps {
  onSelect: (date: string) => void;
}

const Calendar = ({ onSelect }: CalendarProps) => {
  const [currentDate] = useState(new Date());

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleSelect = (day: number) => {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );

    const formatted = date.toISOString().split("T")[0]; // YYYY-MM-DD
    onSelect(formatted);
  };

  return (
    <div className="w-[300px] p-4 bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </span>
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => handleSelect(day)}
            className="
              h-8 w-8 rounded-md
              hover:bg-[#008847] hover:text-white
              transition
            "
          >
            {day}
          </button>
        ))}
      </div>

      {/* Footer */}
      <button
        className="
          mt-4 w-full h-[40px]
          bg-[#008847] text-white rounded
        "
        onClick={() => {
          const today = new Date().toISOString().split("T")[0];
          onSelect(today);
        }}
      >
        Choose Date
      </button>
    </div>
  );
};

export default Calendar;
