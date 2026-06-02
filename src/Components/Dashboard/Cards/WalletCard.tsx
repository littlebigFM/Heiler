import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "../../Props";
// import { useNavigate } from "react-router-dom";

interface WalletCardProps {
  balance: number;
  currency?: string;
  onAddMoney?: () => void;
}

const WalletCard = ({
  balance,
  onAddMoney,
  currency = "NGN",
}: WalletCardProps) => {
  const [hidden, setHidden] = useState(false);
  // const navigate = useNavigate();

  return (
    <div
      className="
        rounded-2xl
        text-white
        w-full
      "
    >
      {/* TOP */}
      <div className="h-48.25 bg-primary rounded-[22px] flex items-center justify-between mb-6 px-6">
        <div>
          <p className="text-sm text-white/70 mb-4">My Balance</p>

          <h2 className="text-[#FFFFFFCC] text-3xl font-bold">
            {hidden ? "********" : `${currency} ${balance.toLocaleString()}`}
          </h2>
        </div>

        <button onClick={() => setHidden(!hidden)} className="text-white">
          {hidden ? <FiEyeOff size={22} /> : <FiEye size={22} />}
        </button>
      </div>

      {/* ACTIONS */}
      <div className="grid grid-cols-2 gap-4 mt-10">
        <Button label="Add Money" variant="outline" onClick={onAddMoney} />

        <Button label="Send Money" />
      </div>
    </div>
  );
};

export default WalletCard;
