// import { FiChevronDown } from "react-icons/fi";
// import Avatar from "../Props/Avatar";

// const TopBar = ({ user, onAvatarClick }) => {
//   const today = new Date();
//   const dateStr = today.toLocaleDateString("en-GB", {
//     weekday: "long",
//     day: "numeric",
//     month: "short",
//   });

//   return (
//     <div className="flex items-center justify-between px-6 py-4 bg-white">
//       <div className="flex flex-col gap-0.5">
//         <span className="text-sm text-[#A7ADBE] font-normal">{dateStr}</span>
//         <span className="font-poppins text-2xl font-bold text-[#1B1B1B]">
//           Hi, {user?.firstName || user?.fullName?.split(" ")[0] || "there"} 👋
//         </span>
//       </div>

//       <div
//         className="flex items-center gap-1 cursor-pointer"
//         onClick={onAvatarClick}
//       >
//         <Avatar src={user?.avatar} name={user?.fullName} size={40} />
//         <FiChevronDown size={18} className="text-[#A7ADBE]" />
//       </div>
//     </div>
//   );
// };

// export default TopBar;
