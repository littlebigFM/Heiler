import { IconBase } from "react-icons";
import { BsShare } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuShield } from "react-icons/lu";
import { PiSealCheck } from "react-icons/pi";
import { TbLockCheck } from "react-icons/tb";

export const MoreLinks = [
  { label: "Profile", path: "/doctor/profile" },
  {
    label: "Change password",
    path: "/doctor/changepassword",
    icon: TbLockCheck,
  },

  {
    label: "Identification",
    path: "/doctor/identification",
    icon: PiSealCheck,
  },

  { label: "Subscription", path: "/doctor/subscription", icon: LuShield },

  {
    label: "Notifications",
    path: "/doctor/notifications",
    icon: IoMdNotificationsOutline,
  },

  { label: "Cards", path: "/doctor/cards", icon: FaCreditCard },

  { label: "Refer a friend", path: "/doctor/referral", icon: BsShare },

  { label: "Log out", path: "/doctor/settings", icon: GrLogout },
];
