import img from "../../../assets/Images/img7.png";

const WelcomeBanner = () => {
  return (
    <div
      className="
        bg-[#EEFFF7]
        rounded-2xl
        p-6
        flex items-center justify-between
        overflow-hidden
        mb-6
        w-full
        h-full
      "
    >
      {/* LEFT */}
      <div className="max-w-[260px]">
        <h2 className="text-[16px] font-bold text-primary mb-3 min-[768px]:text-[24px]">
          Early Protection
          <br />
          for your family health
        </h2>

        <p className="font-regular text-[12px] text-[#3F3F3F] leading-6 min-[768px]:text-[14px]">
          Have a regular check up to prevent any complications in your body.
        </p>
      </div>

      {/* RIGHT */}
      <img
        src={img}
        alt="doctor"
        className="
          w-[109px]
          object-contain
        "
      />
    </div>
  );
};

export default WelcomeBanner;
