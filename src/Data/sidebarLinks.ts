import { BsChatTextFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import {
  FiMessageCircle,
  FiCreditCard,
  FiSettings,
  FiSearch,
} from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { IoCardSharp, IoWallet } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import { RiHome5Fill } from "react-icons/ri";

export interface SidebarLink {
  label: string;
  path: string;
  icon: React.ComponentType<{ size?: number }>;
}

export const doctorSidebarLinks: SidebarLink[] = [
  { label: "Home", path: "/doctor/home", icon: RiHome5Fill },
  { label: "Patients", path: "/doctor/patients", icon: FaUser },
  { label: "Chat", path: "/doctor/chat", icon: BsChatTextFill },
  { label: "Wallet", path: "/doctor/wallet", icon: IoWallet },
  {
    label: "Notifications",
    path: "/doctor/notifications",
    icon: IoIosNotifications,
  },
  { label: "Cards", path: "/doctor/cards", icon: IoCardSharp },
  // { label: "Settings", path: "/doctor/settings", icon: FiSettings },
  { label: "More", icon: PiDotsNineBold, path: "/doctor/more" },
];

export const patientSidebarLinks: SidebarLink[] = [
  { label: "Home", path: "/patient/home", icon: RiHome5Fill },
  { label: "Find Doctor", path: "/patient/find-doctor", icon: FiSearch },
  { label: "Chat", path: "/patient/chat", icon: FiMessageCircle },
  { label: "Wallet", path: "/patient/wallet", icon: IoWallet }, // Reusing IoWallet for consistency across panels
  { label: "Settings", path: "/patient/settings", icon: FiSettings },
];
