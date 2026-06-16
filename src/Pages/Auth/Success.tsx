// src/Pages/Auth/Success.tsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../Components/Props";
import PageWrapper from "../../Components/Common/PageWrapper";
import { useApp } from "../../Context/AppContext";
import img from "../../assets/Images/img5.png";
import success from "../../assets/Images/Success.png";

const Success = () => {
  const navigate = useNavigate();
  const { role } = useApp();

  const handleOkay = () => {
    navigate(role === "doctor" ? "/doctor/home" : "/patient/home");
  };

  const CardContent = () => (
    <motion.div
      className="flex flex-col items-center text-center gap-10"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <img src={success} alt="Success" className="w-100.5 h-68" />
      </motion.div>

      <div className="flex flex-col gap-10 px-2">
        <h2 className="font-poppins text-xl font-bold text-[#1B1B1B] leading-snug">
          You have successfully created your account.
        </h2>
        <p className="text-sm text-[#A7ADBE] font-inter leading-relaxed">
          You can now have access to your dashboard to find and chat a doctor of
          your choice.
        </p>
      </div>

      <div className="flex items-center justify-center w-full pt-2">
        <Button
          width={200}
          variant="primary"
          label="Okay"
          onClick={handleOkay}
        />
      </div>
    </motion.div>
  );

  return (
    <PageWrapper>
      {/* ── MOBILE ── */}
      <div className="max-w-219 w-full mx-auto flex flex-col min-h-screen bg-white items-center justify-center px-6 md:hidden">
        <CardContent />
      </div>

      {/* ── DESKTOP ── */}
      <div
        className="hidden px-10 md:flex min-h-screen items-center justify-center relative"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          className=" w-219 h-160 relative z-10 bg-white rounded-2xl shadow-2xl px-8 py-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <CardContent />
        </motion.div>

        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs font-inter whitespace-nowrap">
          © 2024 Heiler &nbsp;·&nbsp; Developed by FireSwitch Technologies
        </p>
      </div>
    </PageWrapper>
  );
};

export default Success;
