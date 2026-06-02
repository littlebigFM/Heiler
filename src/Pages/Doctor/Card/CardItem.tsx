import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { BankCard } from "./card.types";
// import type { BankCard } from "../types/card.types";

interface Props {
  card: BankCard;
}

const CardItem = ({ card }: Props) => {
  return (
    <div
      className="
        w-full
        min-[768px]:w-[48%]
        min-[1200px]:w-[31%]
        h-42.5
        rounded-2xl
        bg-[#5A6572]
        p-6
        text-white
        flex
        flex-col
        justify-between
      "
    >
      {/* TOP */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] opacity-70">Virtual Card</p>

          <h3 className="font-semibold text-sm mt-1">{card.holderName}</h3>
        </div>

        {card.cardType === "visa" ? (
          <FaCcVisa className="text-[38px]" />
        ) : (
          <FaCcMastercard className="text-[38px]" />
        )}
      </div>

      {/* CARD NUMBER */}
      <div className="flex gap-4 text-lg tracking-[3px]">
        <span>****</span>
        <span>****</span>
        <span>****</span>
        <span>{card.cardNumber}</span>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-between text-sm">
        <div>
          <p className="opacity-70 text-[10px]">Expiry</p>
          <p>{card.expiry}</p>
        </div>

        <div>
          <p className="opacity-70 text-[10px]">CVV</p>
          <p>123</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
