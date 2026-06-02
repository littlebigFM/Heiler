import { BsArrowLeftRight } from "react-icons/bs";

interface TransactionCardProps {
  title: string;
  date: string;
  amount: number;
  type: "credit" | "debit";
}

const TransactionCard = ({
  title,
  date,
  amount,
  type,
}: TransactionCardProps) => {
  return (
    <div
      className="
        flex items-center justify-between
        py-4 border-b border-[#F1F1F1]
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <div
          className={`
            w-10 h-10 rounded-full
            flex items-center justify-center
            ${
              type === "credit"
                ? "bg-[#EAF8F1] text-[#008847]"
                : "bg-[#FFF1F0] text-[#FF4D4F]"
            }
          `}
        >
          <BsArrowLeftRight />
        </div>

        <div>
          <p className="font-semibold text-[14px] text-[#1B2922]">{title}</p>

          <p className="text-xs text-[#A7ADBE]">{date}</p>
        </div>
      </div>

      {/* RIGHT */}
      <p
        className={`text-[14px] font-bold ${
          type === "credit" ? "text-[#008847]" : "text-[#FF4D4F]"
        }`}
      >
        ₦ {amount.toLocaleString()}
      </p>
    </div>
  );
};

export default TransactionCard;
