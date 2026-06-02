import { useState } from "react";
import BackButton from "../../../Components/Common/BackButton";
import { useNavigate } from "react-router-dom";
import { Button, Input, Modal } from "../../../Components/Props";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FiPlus, FiX } from "react-icons/fi";
import { paymentMethods } from "./Data/paymentMethod";

const AddMoneyDesktop = () => {
  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState(1);
  const [amount, setAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- LOGIC: NUMBER TO WORDS CONVERSION ---
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
    <div className="px-4 md:px-6 py-4">
      <BackButton onClick={() => navigate(-1)} />

      {/* CARD */}
      <div
        className="
            w-full
            max-w-130
            mx-auto
            bg-white
            border border-[#ECECEC]
            rounded-3xl
            p-5 md:p-8
          "
      >
        {/* TITLE */}
        <h2
          className="
              text-[28px]
              font-semibold
              text-center
              text-[#2B3932]
              mb-8
            "
        >
          Add money to wallet
        </h2>

        {/* AMOUNT */}
        <div className="mb-6">
          <div
            className="
                bg-secondary
                rounded-[10px]
                px-4
                flex
                items-center
              "
          >
            <span className="text-[#1B2922]">₦</span>

            <Input
              className="border-none"
              placeholder="Enter a specific amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
            />
          </div>
        </div>

        {/* PAYMENT METHOD */}
        <div className="mb-6">
          <div
            className="
                flex
                items-center
                justify-between
                mb-6
              "
          >
            <p
              className="
                  text-[14px]
                  min-[780px]:text-[16px]
                  font-bold
                  text-primary
                "
            >
              Choose payment method
            </p>
          </div>

          <div className="mb-10 flex flex-col gap-3 min-[768px]:gap-10">
            {paymentMethods.map((card) => (
              <button
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className={`
                    w-full
                    rounded-[10px]
                    py-2
                    px-6
                    flex
                    items-center
                    justify-between
                    transition-all
                    cursor-pointer

                    ${
                      selectedCard === card.id
                        ? "border-primary bg-secondary"
                        : "border-[#ECECEC]"
                    }
                  `}
              >
                <div className="flex items-center gap-10">
                  <img src={card.logo} alt={card.bank} />

                  <div>
                    <h3
                      className="
                        text-sm
                        font-semibold
                        text-[#1B2922]
                        text-left
                      "
                    >
                      {card.bank}
                    </h3>

                    <p
                      className="
                        text-xs
                        text-[#A3B1AA]
                        mt-1
                        text-left
                      "
                    >
                      {card.number}
                    </p>
                  </div>
                </div>

                {selectedCard === card.id && (
                  <div>
                    <IoIosCheckmarkCircle size={50} className="text-primary" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* DEPOSIT */}
        <Button
          label="Deposit"
          className="mb-6"
          onClick={() => setIsModalOpen(true)}
          disabled={!amount || Number(amount) <= 0} // Blocks empty deposits safely
        />

        {/* NEW CARD */}
        <button
          className="
              flex
              items-center
              justify-center
              gap-2
              w-full
              text-primary
              text-sm
              font-medium
              cursor-pointer
            "
        >
          <FiPlus />
          New Card
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div
          className="
      bg-white
      rounded-[28px]
      px-6
      py-8
      relative
    "
        >
          {/* CLOSE */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="
        absolute
        top-5
        right-5
        cursor-pointer
      "
          >
            <FiX size={22} />
          </button>

          {/* CONTENT */}
          <div className="pt-8 pb-4 text-center">
            <p
              className="
          text-[#1B2922]
          text-[18px]
          leading-7.5
          mb-8
        "
            >
              A sum of{" "}
              <span className="text-primary font-semibold capitalize">
                {convertAmountToWords(amount)}
              </span>{" "}
              will be debited from your account.
            </p>

            {/* BUTTON */}
            <Button label="Proceed" className="mb-5 rounded-[15px]" />

            {/* CANCEL */}
            <Button
              onClick={() => setIsModalOpen(false)}
              variant="ordinary"
              label="Cancel"
              className=" mb-5 rounded-[15px]"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddMoneyDesktop;
