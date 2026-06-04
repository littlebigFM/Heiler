import { Check } from "lucide-react";

interface FeaturePart {
  text: string;
  color: string;
}

interface Feature {
  parts: FeaturePart[];
}

interface SubscriptionCardProps {
  name: string;
  price: string;
  features: Feature[];
}

// interface SubscriptionCardProps {
//   name: string;
//   price: string;
//   features: string[];
// }

const SubscriptionCard = ({ name, price, features }: SubscriptionCardProps) => {
  return (
    <div>
      {/* Mobile */}
      <div
        className="
        bg-[white]
        rounded-[20px]
        border-2
        border-[#EAEAEA]
        p-6
         min-[768px]:hidden
      "
      >
        <h3
          className="
          text-center
          text-primary
          font-semibold
        "
        >
          {name}
        </h3>

        <h2
          className="
          text-center
          text-3xl
          font-bold
          mt-3
          text-[#4D4D4D]
        "
        >
          NGN {price}
          <span
            className="
            text-sm
            font-normal
            text-gray-400
          "
          >
            / Month
          </span>
        </h2>

        <div className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
        flex
        items-center
        gap-3
      "
            >
              <div
                className="
          w-5
          h-5
          rounded-full
          bg-[#008F45]
          flex
          items-center
          justify-center
          shrink-0
        "
              >
                <Check size={12} className="text-white" />
              </div>

              <p className="text-[13px]">
                {feature.parts.map((part, partIndex) => (
                  <span
                    key={partIndex}
                    className={
                      part.color === "gray"
                        ? "text-[#AEAEAE]"
                        : "text-[#4D4D4D]"
                    }
                  >
                    {part.text}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}

      <div
        className="
        bg-[#F5F5F5]
        rounded-[20px]
        p-6
        hidden min-[768px]:block
      "
      >
        <h3
          className="
          text-center
          text-primary
          font-semibold
        "
        >
          {name}
        </h3>

        <h2
          className="
          text-center
          text-3xl
          font-bold
          mt-3
          text-[#4D4D4D]
        "
        >
          NGN {price}
          <span
            className="
            text-sm
            font-normal
            text-gray-400
          "
          >
            / Month
          </span>
        </h2>

        <div className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
        flex
        items-center
        gap-3
      "
            >
              <div
                className="
          w-5
          h-5
          rounded-full
          bg-[#008F45]
          flex
          items-center
          justify-center
          shrink-0
        "
              >
                <Check size={12} className="text-white" />
              </div>

              <p className="text-[13px]">
                {feature.parts.map((part, partIndex) => (
                  <span
                    key={partIndex}
                    className={
                      part.color === "gray"
                        ? "text-[#AEAEAE]"
                        : "text-[#4D4D4D]"
                    }
                  >
                    {part.text}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
