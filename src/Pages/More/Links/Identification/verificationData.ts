// import { VerificationItem } from "../types/verification.types";

import { VerificationItem } from "./verification.types";

export const verificationItems: VerificationItem[] = [
  {
    id: "bvn",
    title: "BVN",
    description: "Not verified",
    status: "pending",
  },

  {
    id: "id-document",
    title: "ID document",
    description: "Verified",
    status: "verified",
  },

  {
    id: "home-address",
    title: "Home address",
    description: "Not verified",
    status: "pending",
  },
];
