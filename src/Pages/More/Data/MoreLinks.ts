import { IconBase } from "react-icons";
import { BsShare } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuShield } from "react-icons/lu";
import { PiSealCheck } from "react-icons/pi";
import { TbLockCheck } from "react-icons/tb";

export const MoreLinks = [
  { id: "profile", label: "Profile", path: "/doctor/profile" },
  {
    id: "changepassword",
    label: "Change password",
    path: "/doctor/changepassword",
    icon: TbLockCheck,
  },

  {
    id: "identification",
    label: "Identification",
    path: "/doctor/identification",
    icon: PiSealCheck,
  },

  {
    id: "subscription",
    label: "Subscription",
    path: "/doctor/subscription",
    icon: LuShield,
  },

  {
    id: "notifications",
    label: "Notifications",
    path: "/doctor/notifications",
    icon: IoMdNotificationsOutline,
  },

  { id: "cards", label: "Cards", path: "/doctor/cards", icon: FaCreditCard },

  {
    id: "referral",
    label: "Refer a friend",
    path: "/doctor/referral",
    icon: BsShare,
  },

  { id: "logout", label: "Log out", path: "#", icon: GrLogout, isLogout: true },
];
