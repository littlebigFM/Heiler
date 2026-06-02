import { motion } from "framer-motion";
import BottomNav from "../../Components/Dashboard/Layout/BottomNav";
import { MoreLinks } from "./Data/MoreLinks";
import { NavLink } from "react-router-dom";
import { Variants } from "framer-motion";
import DashboardLayout from "../../Components/Dashboard/Layout/DashboardLayout";

//Parent Container Animation
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
  return (
    <div>
      <div className="min-[768px]:hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className=" pt-14 px-4 flex flex-col gap-4"
        >
          {MoreLinks.map((link) => {
            const IconComponent = link.icon;

            return (
              <motion.div
                variants={itemVariants}
                key={link.label}
                className="w-full"
              >
                <NavLink
                  className="
                flex items-center justify-between
                py-4 px-4
                rounded-xl
                text-[#192720] text-[16px] font-semibold
                bg-white border border-[#ECECEC]/30

                transition-colors duration-200
                hover:bg-secondary hover:text-primary
              "
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

      <div className="hidden min-[768px]:block">
        <DashboardLayout className="">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className=" pt-2 px-4  flex flex-col gap-3"
          >
            {MoreLinks.map((link) => {
              const IconComponent = link.icon;

              return (
                <motion.div
                  variants={itemVariants}
                  key={link.label}
                  className="w-full"
                >
                  <NavLink
                    className="
                flex items-center justify-between
                py-4 px-4
                rounded-xl
                text-[#192720] text-[16px] font-semibold
                bg-white border border-[#ECECEC]/30

                transition-colors duration-200
                hover:bg-secondary hover:text-primary
              "
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

            {/* <div className="min-[768px]:hidden">
              <BottomNav />
            </div> */}
          </motion.div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default More;

// import { useSearchParams } from "react-router-dom";
// // import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";
// // import MoreMenuPanel from "./components/MoreMenuPanel";
// // import IdentificationSubMenu from "./components/IdentificationSubMenu";
// // import FormDisplayWorkspace from "./components/FormDisplayWorkspace";
// // import MobileMoreFlow from "./components/MobileMoreFlow";
// import DashboardLayout from "../../Components/Dashboard/Layout/DashboardLayout";
// import MoreMenuPanel from "./MoreMenuPanel";
// import IdentificationSubMenu from "./IdentificationSubmenu";
// import FormDisplayWorkspace from "./FormDisplayWorkspace";
// import MobileMoreFlow from "./MobileMoreFlow";

// const More = () => {
//   const [searchParams] = useSearchParams();

//   // Read parameters from URL. If none are preset, default them for Desktop view.
//   const currentTab = searchParams.get("tab") || "identification";
//   const currentSubTab = searchParams.get("sub") || "bvn";

//   return (
//     <DashboardLayout>
//       <div className="h-[calc(100vh-120px)] w-full overflow-hidden flex bg-[#FAFAFA]">
//         {/* ========================================== */}
//         {/* 💻 DESKTOP VIEWPORTS (3 Columns)           */}
//         {/* ========================================== */}
//         <div className="hidden min-[1030px]:flex w-full h-full gap-6 p-6">
//           {/* Column 1: The "More" Settings List */}
//           <MoreMenuPanel currentTab={currentTab} />

//           {/* Column 2: Specific Submenu (Renders if Identification tab is active) */}
//           {currentTab === "identification" && (
//             <IdentificationSubMenu currentSubTab={currentSubTab} />
//           )}

//           {/* Column 3: The Active Form Container Workspace */}
//           <FormDisplayWorkspace
//             currentTab={currentTab}
//             currentSubTab={currentSubTab}
//           />
//         </div>

//         {/* ========================================== */}
//         {/* 📱 MOBILE VIEWPORTS (Stacked Screen Flow)  */}
//         {/* ========================================== */}
//         <div className="min-[1030px]:hidden w-full h-full">
//           <MobileMoreFlow
//             currentTab={currentTab}
//             currentSubTab={currentSubTab}
//           />
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default More;
