import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Variants } from "framer-motion";
import { useApp } from "../../Context/AppContext";

import BottomNav from "../../Components/Dashboard/Layout/BottomNav";
import DashboardLayout from "../../Components/Dashboard/Layout/DashboardLayout";
import LogoutModal from "../../Components/Common/LogoutModal";
import { MoreLinks } from "./Data/MoreLinks";

// Parent Container Animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

// Child Link Animation
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
} as const;

const More = () => {
  const { logout } = useApp(); // 👈 Pull standard security lifecycle controller
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  return (
    <div>
      {/* ── MOBILE SCREEN VIEWPORT ── */}
      <div className="min-[768px]:hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="pt-14 px-4 flex flex-col gap-4"
        >
          {MoreLinks.map((link) => {
            const IconComponent = link.icon;

            // 🚀 INTERCEPT MOBILE LOGOUT DICTIONARY TOKEN
            if (link.id === "logout") {
              return (
                <motion.div
                  variants={itemVariants}
                  key={link.label}
                  className="w-full"
                >
                  <button
                    type="button"
                    onClick={() => setShowLogoutConfirm(true)}
                    className="w-full flex items-center justify-between py-4 px-4 rounded-xl text-[16px] font-semibold bg-white border border-[#ECECEC]/30 transition-colors duration-200 hover:bg-secondary text-left cursor-pointer"
                  >
                    <span>{link.label}</span>
                    {IconComponent && (
                      <span className="flex items-center justify-center">
                        <IconComponent size={23} className="" />
                      </span>
                    )}
                  </button>
                </motion.div>
              );
            }

            // Standard Nav link mapping flow segment
            return (
              <motion.div
                variants={itemVariants}
                key={link.label}
                className="w-full"
              >
                <NavLink
                  className="flex items-center justify-between py-4 px-4 rounded-xl text-[#192720] text-[16px] font-semibold bg-white border border-[#ECECEC]/30 transition-colors duration-200 hover:bg-secondary hover:text-primary"
                  to={link.path}
                >
                  <span>{link.label}</span>
                  {IconComponent && (
                    <span className="flex items-center justify-center">
                      <IconComponent size={23} />
                    </span>
                  )}
                </NavLink>
              </motion.div>
            );
          })}

          <div className="min-[768px]:hidden">
            <BottomNav />
          </div>
        </motion.div>
      </div>

      {/* ── DESKTOP SCREEN VIEWPORT ── */}
      <div className="hidden min-[768px]:block">
        <DashboardLayout className="">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="pt-2 px-4 flex flex-col gap-3"
          >
            {MoreLinks.map((link) => {
              const IconComponent = link.icon;

              // 🚀 INTERCEPT DESKTOP LOGOUT DICTIONARY TOKEN
              if (link.id === "logout") {
                return (
                  <motion.div
                    variants={itemVariants}
                    key={link.label}
                    className="w-full"
                  >
                    <button
                      type="button"
                      onClick={() => setShowLogoutConfirm(true)}
                      className="w-full flex items-center justify-between py-4 px-4 rounded-xl text-[16px] font-semibold bg-white border border-[#ECECEC]/30 transition-colors duration-200 hover:bg-red-50 text-left cursor-pointer"
                    >
                      <span>{link.label}</span>
                      {IconComponent && (
                        <span className="flex items-center justify-center">
                          <IconComponent size={23} className="text-red-500" />
                        </span>
                      )}
                    </button>
                  </motion.div>
                );
              }

              // Standard Nav link mapping flow segment
              return (
                <motion.div
                  variants={itemVariants}
                  key={link.label}
                  className="w-full"
                >
                  <NavLink
                    className="flex items-center justify-between py-4 px-4 rounded-xl text-[#192720] text-[16px] font-semibold bg-white border border-[#ECECEC]/30 transition-colors duration-200 hover:bg-secondary hover:text-primary"
                    to={link.path}
                  >
                    <span>{link.label}</span>
                    {IconComponent && (
                      <span className="flex items-center justify-center">
                        <IconComponent size={23} />
                      </span>
                    )}
                  </NavLink>
                </motion.div>
              );
            })}
          </motion.div>
        </DashboardLayout>
      </div>

      {/* ── CENTRALIZED MODAL DISPATCH PORTAL ── */}
      <LogoutModal
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={logout}
      />
    </div>
  );
};

export default More;
