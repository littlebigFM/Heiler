import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../../Components/Common/PageWrapper";
import logo from "../../assets/logo/logo.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/onboarding"), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <PageWrapper>
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={logo} alt="Heiler Logo" />
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default SplashScreen;
