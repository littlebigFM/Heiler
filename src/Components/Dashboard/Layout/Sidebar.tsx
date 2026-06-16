// import { NavLink } from "react-router-dom";
// import img from "../../../assets/logo/logo.png";
// import {
//   doctorSidebarLinks,
//   patientSidebarLinks,
//   SidebarLink,
// } from "../../../Data/sidebarLinks";
// import { useApp } from "../../../Context/AppContext";

// const Sidebar = () => {
//   const { role } = useApp();

//   const links = role === "patient" ? patientSidebarLinks : doctorSidebarLinks;

//   const base =
//     "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-bold text-[16px] transition";

//   const getClass = (isActive: boolean) =>
//     `${base} ${isActive ? "text-[#008847] font-medium" : "text-gray-500"}`;

//   // const icon = "w-[24px] h-[24px]";

//   return (
//     <div className="fixed w-60 flex flex-col gap-10 h-screen bg-white border-r-2 border-[#a8a4a440] p-4">
//       <div>
//         <img src={img} alt="" />
//       </div>

//       <div className="flex flex-col gap-10">
//         {links.map((link: SidebarLink) => {
//           const Icon = link.icon;

//           return (
//             <NavLink
//               key={link.path}
//               to={link.path}
//               className={({ isActive }) => getClass(isActive)}
//             >
//               <Icon size={25} />
//               {link.label}
//             </NavLink>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { NavLink } from "react-router-dom";
import img from "../../../assets/logo/logo.png";
import {
  doctorSidebarLinks,
  patientSidebarLinks,
  SidebarLink,
} from "../../../Data/sidebarLinks";
import { useApp } from "../../../Context/AppContext";

const Sidebar = () => {
  const { role } = useApp();

  const links = role === "patient" ? patientSidebarLinks : doctorSidebarLinks;

  const base =
    "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-bold text-[16px] transition";

  const getClass = (isActive: boolean) =>
    `${base} ${isActive ? "text-[#008847] font-medium" : "text-gray-500"}`;

  // const icon = "w-[24px] h-[24px]";

  return (
    <div className="fixed w-60 flex flex-col gap-10 h-screen bg-white border-r-2 border-[#a8a4a440] p-4">
      <div>
        <img src={img} alt="" />
      </div>

      <div className="flex flex-col gap-10">
        {links.map((link: SidebarLink) => {
          const Icon = link.icon;

          // Logic check: determine if the link is a root dashboard page
          const isOverviewRoute =
            link.path === "/patient/home" || link.path === "/doctor/home";

          return (
            <NavLink
              key={link.path}
              to={link.path}
              // Prevent active state bleeding into sub-routes
              end={isOverviewRoute}
              className={({ isActive }) => getClass(isActive)}
            >
              <Icon size={25} />
              {link.label}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
