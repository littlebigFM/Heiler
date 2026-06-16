import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { Button, Input, Modal } from "../../../Components/Props";
import { paymentMethods } from "./Data/paymentMethod";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CgChevronLeft } from "react-icons/cg";
import { PiPlus } from "react-icons/pi";

const AddMoneyMobile = () => {
  const [amount, setAmount] = useState("");
  const [selectedCard, setSelectedCard] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const formatAmount = (value: string) => {
    const parsed = Number(value);
    if (!parsed || isNaN(parsed)) return "0";
    return parsed.toLocaleString("en-NG");
  };

  const handleConfirmDeposit = () => {
    toast(`₦${formatAmount(amount)} has been credited to your wallet.`, {
      autoClose: 4000,
      hideProgressBar: true,
      style: {
        backgroundColor: "var(--color-primary)",
        color: "#ffffff",
      },
    });
    setIsModalOpen(false);
    setAmount("");
    setSelectedCard(0);
    setStep(1);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const convertAmountToWords = (numString: string): string => {
    const num = Number(numString);
    if (!num || isNaN(num) || num <= 0) return "zero naira";

    const ones = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    const teens = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    const scales = ["", "thousand", "million", "billion"];

    let words: string[] = [];

    const convertLessThanOneThousand = (n: number) => {
      let currentWords: string[] = [];
      if (n >= 100) {
        currentWords.push(ones[Math.floor(n / 100)] + " hundred");
        n %= 100;
      }
      if (n >= 10 && n <= 19) {
        currentWords.push(teens[n - 10]);
      } else if (n >= 20) {
        let tenPart = tens[Math.floor(n / 10)];
        let onePart = ones[n % 10];
        currentWords.push(onePart ? `${tenPart} ${onePart}` : tenPart);
      } else if (n > 0) {
        currentWords.push(ones[n]);
      }
      return currentWords.join(" ");
    };

    let tempNum = num;
    let scaleIndex = 0;

    while (tempNum > 0) {
      let chunk = tempNum % 1000;
      if (chunk > 0) {
        let chunkText = convertLessThanOneThousand(chunk);
        let scaleText = scales[scaleIndex];
        words.unshift(scaleText ? `${chunkText} ${scaleText}` : chunkText);
      }
      tempNum = Math.floor(tempNum / 1000);
      scaleIndex++;
    }

    return words.join(" ") + " naira";
  };

  return (
    <div className="px-5 py-4 bg-white flex flex-col">
      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <div className="py-4 flex items-center justify-between pl-4">
            <h1 className="text-[16px] font-bold text-[#192720]">
              Add money to wallet
            </h1>
            <button onClick={() => navigate(-1)}>
              <IoCloseOutline className="text-[28px] cursor-pointer" />
            </button>
          </div>

          <div className="bg-secondary rounded-[10px] px-4 py-2 flex items-center mb-6">
            <span className="text-[#1B2922]">₦</span>
            <Input
              className="border-none"
              placeholder="Enter a specific amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
            />
          </div>

          <Button
            onClick={nextStep}
            label="Continue"
            className="rounded-[10px]"
            disabled={!amount || Number(amount) <= 0}
          />
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="mb-6">
          <div className="flex items-center gap-10 mb-6">
            <CgChevronLeft
              className="cursor-pointer"
              size={25}
              onClick={prevStep}
            />
            <p className="text-[16px] font-bold text-primary">
              Choose a payment method
            </p>
          </div>

          <div className="mb-10 flex flex-col gap-8 min-[768px]:gap-10">
            {paymentMethods.map((card) => (
              <button
                key={card.id}
                onClick={() => {
                  setSelectedCard(card.id);
                  setIsModalOpen(true);
                }}
                className={`w-full rounded-[10px] py-2 px-6 flex items-center justify-between transition-all cursor-pointer ${
                  selectedCard === card.id
                    ? "border-primary bg-secondary"
                    : "border-[#ECECEC]"
                }`}
              >
                <div className="flex items-center gap-10">
                  <img src={card.logo} alt={card.bank} />
                  <div>
                    <h3 className="text-sm font-semibold text-[#1B2922] text-left">
                      {card.bank}
                    </h3>
                    <p className="text-xs text-[#A3B1AA] mt-1 text-left">
                      {card.number}
                    </p>
                  </div>
                </div>

                {selectedCard === card.id && (
                  <div>
                    <IoIosCheckmarkCircle size={35} className="text-primary" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <button className="flex items-center justify-center gap-4 w-full py-4 bg-secondary cursor-pointer rounded-[5px]">
            <PiPlus size={20} color="#000000" fontWeight={900} />
            <p
              className="cursor-pointer text-[#192720] font-bold"
              onClick={() => navigate("/doctor/cards")}
            >
              New Card
            </p>
          </button>
        </div>
      )}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-white rounded-[28px] px-6 py-8 relative">
          {/* CLOSE */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <FiX size={22} />
          </button>

          {/* CONTENT */}
          <div className="pt-8 pb-4 text-center">
            <p className="text-[#1B2922] text-[18px] leading-7.5 mb-8">
              A sum of{" "}
              <span className="text-primary font-semibold capitalize">
                {convertAmountToWords(amount)}
              </span>{" "}
              will be debited from your account.
            </p>

            {/* BUTTONS */}
            <Button
              label="Proceed"
              className="mb-5 rounded-[15px]"
              onClick={handleConfirmDeposit}
            />

            <Button
              onClick={() => setIsModalOpen(false)}
              variant="ordinary"
              label="Cancel"
              className="mb-5 rounded-[15px]"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddMoneyMobile;
