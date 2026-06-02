import { CheckCircle2, XCircle, CreditCard, Wallet } from "lucide-react";

export const notification = [
  {
    id: 1,
    title: "Subscription Successful",
    message: "You have successfully subscribed",
    icon: CheckCircle2,
    iconColor: "text-[#16A34A]",
  },

  {
    id: 2,
    title: "Payment failed",
    message:
      "We were unable to process payment for your recurring subscription",
    icon: XCircle,
    iconColor: "text-[#EF4444]",
  },

  {
    id: 3,
    title: "Card successfully saved",
    message: "VISA 1234 has been added to your account.",
    icon: CreditCard,
    iconColor: "text-[#16A34A]",
  },

  {
    id: 4,
    title: "Wallet Top-up",
    message: "Ten thousand has been credited to your wallet",
    icon: Wallet,
    iconColor: "text-[#16A34A]",
  },

  {
    id: 5,
    title: "Wallet Top-up",
    message: "Ten thousand has been credited to your wallet",
    icon: Wallet,
    iconColor: "text-[#16A34A]",
  },
];
