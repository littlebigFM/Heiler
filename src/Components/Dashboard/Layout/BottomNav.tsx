import { useNavigate, useLocation } from "react-router-dom";
import { useApp } from "../../../Context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

import { FiHome, FiMessageSquare, FiSettings } from "react-icons/fi";
import { RiHome5Fill, RiWallet3Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";
import { IoWallet } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";

const patientNav = [
  { label: "Home", icon: FiHome, path: "/patient/home" },
  { label: "Category", icon: FiHome, path: "/patient/find-doctor" },
  { label: "Chat", icon: FiMessageSquare, path: "/patient/chat" },
  { label: "Wallet", icon: RiWallet3Line, path: "/patient/wallet" },
  { label: "Settings", icon: FiSettings, path: "/patient/settings" },
];

const doctorNav = [
  { label: "Home", icon: RiHome5Fill, path: "/doctor/home" },
  { label: "Patients", icon: FaUser, path: "/doctor/patients" },
  { label: "Chat", icon: BsChatTextFill, path: "/doctor/chat" },
  { label: "Wallet", icon: IoWallet, path: "/doctor/wallet" },
  { label: "More", icon: PiDotsNineBold, path: "/doctor/more" },
];

const BottomNav = () => {
  const { role } = useApp();

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = role === "doctor" ? doctorNav : patientNav;

  return (
    <nav
      className="
        fixed bottom-0 left-1/2 -translate-x-1/2
        w-full h-18.75
        bg-white
        border-t border-gray-100
        flex items-center justify-between
        z-50 px-2
      "
    >
      {navItems.map((item) => {
        const isActive =
          location.pathname === item.path ||
          location.pathname.startsWith(`${item.path}/`);

        const Icon = item.icon;

        return (
          <motion.button
            key={item.path}
            onClick={() => navigate(item.path)}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: isActive ? 1.05 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="
              flex flex-col items-center justify-center
              flex-1 py-2
              bg-transparent border-none
              cursor-pointer
            "
          >
            {/* ICON */}
            <motion.div
              animate={{
                y: isActive ? -2 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <Icon
                size={22}
                className={isActive ? "text-primary" : "text-gray-400"}
              />
            </motion.div>

            {/* LABEL ONLY WHEN ACTIVE */}
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.span
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: 4,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 4,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    text-[11px]
                    text-primary
                    font-semibold
                    mt-1
                  "
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
