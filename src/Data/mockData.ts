import { image } from "framer-motion/client";
import type {
  CaseNote,
  Chat,
  Doctor,
  Message,
  Patient,
  Transaction,
} from "../types";
import { Notification } from "../types/notification.types";

// 🔌 BACKEND: replace with GET /api/auth/me
export const mockPatient: Patient = {
  id: "p001",
  role: "patient",
  firstName: "Riley",
  lastName: "Cooper",
  fullName: "Riley Cooper",
  email: "riley.cooper@email.com",
  phone: "+234 801 234 5678",
  gender: "female",
  dob: "1995-06-14",
  avatar: null,
  wallet: {
    balance: 4562.52,
    currency: "NGN",
  },
};

// 🔌 BACKEND: replace with GET /api/auth/me
export const mockDoctor: Doctor = {
  id: "d001",
  role: "doctor",
  firstName: "Oluwafemi",
  lastName: "Edward",
  fullName: "Dr. Oluwafemi Edward",
  email: "oluwafemi.edward@heiler.com",
  phone: "+234 802 345 6789",
  gender: "male",
  dob: "1980-03-22",
  avatar: null,

  specialty: "Cardiology",
  experience: 14,

  qualification: "MBBS, MD, FMCS",
  mdcnRegNo: "MDCN/2010/0045",
  rating: 5.0,
  patientsServed: 1221,
  hospital: "Adetoun Hospital",
  bio: "Dr. Edward is one of the best doctors...",
  online: true,

  wallet: {
    balance: 20000,
    currency: "NGN",
  },
};

// ─────────────────────────────────────────────
// DOCTORS LIST (seen by patients)
// ─────────────────────────────────────────────

// 🔌 BACKEND: replace with GET /api/doctors
export const mockDoctors = [
  {
    id: "d001",
    fullName: "Dr. Doris Jones",
    qualification: "MBBS, MD, FMCS(Dentistry)",
    specialty: "Dentistry",
    rating: 4.8,
    patientsServed: 980,
    experience: 8,
    online: true,
    avatar: null,
    hospital: "Lagos General Hospital",
  },
  {
    id: "d002",
    fullName: "Dr. Benson Louis",
    qualification: "MBBS, MD, FMCS(Paediatrics)",
    specialty: "Paediatrics",
    rating: 4.9,
    patientsServed: 1200,
    experience: 12,
    online: false,
    avatar: null,
    hospital: "Adetoun Hospital",
  },
  {
    id: "d003",
    fullName: "Dr. Joseph Patel",
    qualification: "MBBS, MD, FMCS(Dentistry)",
    specialty: "Dentistry",
    rating: 4.7,
    patientsServed: 760,
    experience: 6,
    online: true,
    avatar: null,
    hospital: "St. Nicholas Hospital",
  },
  {
    id: "d004",
    fullName: "Dr. Joseph Doyin",
    qualification: "MBBS, MD, FMCS(Dentistry)",
    specialty: "Dentistry",
    rating: 4.6,
    patientsServed: 540,
    experience: 5,
    online: true,
    avatar: null,
    hospital: "Eko Hospital",
  },
  {
    id: "d005",
    fullName: "Dr. Adesanya John",
    qualification: "MBBS, MD, FMCS(Cardiology)",
    specialty: "Cardiology",
    rating: 5.0,
    patientsServed: 1500,
    experience: 16,
    online: true,
    avatar: null,
    hospital: "University of Lagos Teaching Hospital",
  },
];

// Patient LIST (seen by Doctors)

export const mockPatients = [
  {
    id: "p001",
    fullName: "Joseph Doyin",
    gender: "Male",
    avatar: null,
    online: true,
    image: "/Images/img2.png",
    phone: " +234 801 234 5678",
  },

  {
    id: "p002",
    fullName: "Sarah Johnson",
    gender: "Female",
    avatar: null,
    online: true,
    image: "/Images/img2.png",
    phone: " +234 801 234 5678",
  },

  {
    id: "p003",
    fullName: "Michael James",
    gender: "Male",
    avatar: null,
    online: false,
    image: "/Images/img2.png",
    phone: " +234 801 234 5678",
  },

  {
    id: "p004",
    fullName: "Amaka Grace",
    gender: "Female",
    avatar: null,
    online: true,
    image: "/Images/img2.png",
    phone: " +234 801 234 5678",
  },

  {
    id: "p005",
    fullName: "Joseph Doyin",
    gender: "Male",
    avatar: null,
    online: true,
    image: "/Images/img2.png",
    phone: " +234 801 234 5678",
  },

  {
    id: "p006",
    fullName: "Sarah Johnson",
    gender: "Female",
    avatar: null,
    online: true,
    image: "/Images/img2.png",
    phone: " +234 801 234 5678",
  },

  {
    id: "p007",
    fullName: "Michael James",
    gender: "Male",
    avatar: null,
    online: false,
    image: "/Images/img2.png",
    phone: " +234 801 234 5678",
  },

  {
    id: "p008",
    fullName: "Amaka Grace",
    gender: "Female",
    avatar: null,
    online: true,
    image: "/Images/img2.png",
    phone: " +234 801 234 5678",
  },
];

// ─────────────────────────────────────────────
// SPECIALTIES / CATEGORIES
// ─────────────────────────────────────────────

// 🔌 BACKEND: replace with GET /api/specialties
export const mockSpecialties = [
  { id: "s1", name: "Physiotherapy", icon: "🦴" },
  { id: "s2", name: "Ear, Nose, Throat", icon: "👂" },
  { id: "s3", name: "Cardiology", icon: "❤️" },
  { id: "s4", name: "Paediatrics", icon: "👶" },
  { id: "s5", name: "Physician", icon: "🩺" },
  { id: "s6", name: "Skin", icon: "🧴" },
  { id: "s7", name: "Dental", icon: "🦷" },
  { id: "s8", name: "General Medicine", icon: "💊" },
  { id: "s9", name: "Obstetrics & Gynecology", icon: "🌸" },
];

// ─────────────────────────────────────────────
// CHATS
// ─────────────────────────────────────────────

// 🔌 BACKEND: replace with GET /api/chats
// export const mockChats: Chat[] = [
//   {
//     id: "c001",
//     participantId: "d001",
//     participantName: "Dr. Doris Jones",
//     participantRole: "doctor",
//     lastMessage: "Do you know what time the appointment is?",
//     lastMessageTime: "2:45 PM",
//     unread: 2,
//     online: true,
//     avatar: null,
//   },
//   {
//     id: "c002",
//     participantId: "d002",
//     participantName: "Dr. Benson Louis",
//     participantRole: "doctor",
//     lastMessage: "Your prescription is ready.",
//     lastMessageTime: "11:00 AM",
//     unread: 0,
//     online: false,
//     avatar: null,
//   },
//   {
//     id: "c003",
//     participantId: "p001",
//     participantName: "Riley Cooper",
//     participantRole: "patient",
//     lastMessage: "Thank you doctor.",
//     lastMessageTime: "Yesterday",
//     unread: 1,
//     online: true,
//     avatar: null,
//   },
// ];

// 🔌 BACKEND: replace with GET /api/chats/:id/messages
// export const mockMessages: Message[] = [
//   {
//     id: "m001",
//     chatId: "c001",
//     senderId: "p001",
//     text: "Do you know what time the appointment is?",
//     time: "2:30 PM",
//     date: "Fri, 14 March",
//     type: "text",
//     content: "Do you know what time the appointment is?",
//     createdAt: "2023-10-14T14:30:00Z",
//   },
//   {
//     id: "m002",
//     chatId: "c001",
//     senderId: "d001",
//     text: "Yes, it is at 3:00 PM. Please come 10 minutes early.",
//     time: "2:45 PM",
//     date: "Fri, 14 March",
//     type: "text",
//     content: "Yes, it is at 3:00 PM. Please come 10 minutes early.",
//     createdAt: "2023-10-14T14:45:00Z",
//   },
//   {
//     id: "m003",
//     chatId: "c001",
//     senderId: "p001",
//     text: "Thank you, I will be there.",
//     time: "2:46 PM",
//     date: "Fri, 14 March",
//     type: "text",
//     content: "Thank you, I will be there.",
//     createdAt: "2023-10-14T14:46:00Z",
//   },
// ];

// export const mockMessages: Message[] = [
//   {
//     id: "m001",
//     chatId: "c001",
//     senderId: "d001",
//     text: "Please! I will team up with Sasuke kun for the S rank quest.",
//     time: "10:12 PM",
//     date: "Fri, 14 March",
//     type: "text",
//   },
//   {
//     id: "m002",
//     chatId: "c001",
//     senderId: "p001",
//     text: "No I will go with you as I practiced Rasengan with Jiraya sensei last week!",
//     time: "10:12 PM",
//     date: "Fri, 14 March",
//     type: "text",
//   },
//   {
//     id: "m003",
//     chatId: "c001",
//     senderId: "d001",
//     text: "Please! I will team up with Sasuke kun for the S rank quest.",
//     time: "10:12",
//     date: "Mon, 04 April",
//     type: "text",
//   },
//   {
//     id: "m004",
//     chatId: "c001",
//     senderId: "d001",
//     text: "Please! I will team up with Sasuke kun for the S rank quest.",
//     time: "10:12",
//     date: "Mon, 04 April",
//     type: "text",
//   },
//   {
//     id: "m005",
//     chatId: "c001",
//     senderId: "p001",
//     text: "No I will go with you as I practiced Rasengan with Jiraya sensei last week!",
//     time: "10:12 PM",
//     date: "Mon, 04 April",
//     type: "text",
//   },
//   {
//     id: "m006",
//     chatId: "c001",
//     senderId: "p001",
//     text: "",
//     time: "4:20 PM",
//     date: "Mon, 04 April",
//     type: "voice",
//     duration: "0:30",
//   },
//   {
//     id: "m007",
//     chatId: "c001",
//     senderId: "d001",
//     text: "voice call at 1:20 PM",
//     time: "1:20 PM",
//     date: "Mon, 04 April",
//     type: "call",
//   },
// ];

// export const mockCaseNotes: CaseNote[] = [
//   {
//     id: "cn001",
//     chatId: "c001",
//     content:
//       "Patient reports mild chest pain. Advised rest and follow-up in 3 days.",
//     createdAt: "14 March, 10:15 PM",
//   },
// ];

// ─────────────────────────────────────────────
// WALLET / TRANSACTIONS
// ─────────────────────────────────────────────

// 🔌 BACKEND: replace with GET /api/wallet/transactions
export const mockTransactions: Transaction[] = [
  {
    id: "t001",
    type: "credit",
    title: "Wallet Top-up",
    description: "Added via First Bank",
    amount: 5000,
    currency: "NGN",
    date: "14 Aug, 2024",
    status: "success",
  },
  {
    id: "t002",
    type: "debit",
    title: "Consultation Fee",
    description: "Dr. Doris Jones",
    amount: 2000,
    currency: "NGN",
    date: "12 Aug, 2024",
    status: "success",
  },
  {
    id: "t003",
    type: "credit",
    title: "Referral Bonus",
    description: "Friend signup reward",
    amount: 1000,
    currency: "NGN",
    date: "10 Aug, 2024",
    status: "success",
  },
  {
    id: "t004",
    type: "debit",
    title: "Subscription",
    description: "Personal Plan - Monthly",
    amount: 10000,
    currency: "NGN",
    date: "01 Aug, 2024",
    status: "success",
  },
];

// 🔌 BACKEND: replace with GET /api/wallet/cards
export const mockCards = [
  {
    id: "card001",
    type: "visa",
    last4: "3282",
    expiry: "12/23",
    holder: "Riley Cooper",
    bank: "Access Bank",
  },
  {
    id: "card002",
    type: "mastercard",
    last4: "9876",
    expiry: "12/23",
    holder: "Riley Cooper",
    bank: "First Bank Nigeria",
  },
];

// ─────────────────────────────────────────────
// NOTIFICATIONS
// ─────────────────────────────────────────────

// 🔌 BACKEND: replace with GET /api/notifications
export const mockNotifications: Notification[] = [
  {
    id: "n001",
    title: "Card successfully saved",
    message: "VISA 1234 has been added to your account.",
    time: "2 hours ago",
    read: false,
    type: "appointment",
  },
  {
    id: "n002",
    title: "BVN Successfully Verified",
    message: "Your BVN has been verified. You now have full access.",
    time: "1 day ago",
    read: true,
    type: "verification",
  },
  // {
  //   id: "n003",
  //   title: "Wallet Credited",
  //   message: "NGN 2,000 has been credited to your wallet.",
  //   time: "2 days ago",
  //   read: true,
  //   type: "wallet",
  // },
  // {
  //   id: "n004",
  //   title: "New Message",
  //   message: "Dr. Benson Louis sent you a message.",
  //   time: "3 days ago",
  //   read: false,
  //   type: "chat",
  // },
];

// SUBSCRIPTIONS

// 🔌 BACKEND: replace with GET /api/subscriptions/plans
export const mockSubscriptionPlans = [
  {
    id: "plan_personal",
    name: "Personal",
    price: 10000,
    currency: "NGN",
    period: "Month",
    features: [
      "Create personal dashboard",
      "Organize your notes and workflows",
      "5GB of storage",
      "Priority support",
      "Unlimited consultations",
      "Chat with doctors",
    ],
    recommended: false,
  },
  {
    id: "plan_family",
    name: "Family",
    price: 10000,
    currency: "NGN",
    period: "Month",
    features: [
      "Up to 5 family members",
      "Shared dashboard",
      "20GB of storage",
      "Priority support",
      "Unlimited consultations",
      "Emergency ambulance access",
    ],
    recommended: true,
  },
  {
    id: "plan_employers",
    name: "Employers",
    price: 50000,
    currency: "NGN",
    period: "Month",
    features: [
      "Unlimited team members",
      "Admin dashboard",
      "100GB of storage",
      "24/7 dedicated support",
      "Unlimited consultations",
      "On-site doctor visits",
    ],
    recommended: false,
  },
];

// ─────────────────────────────────────────────
// FORM DATA DEFAULTS
// ─────────────────────────────────────────────

// Used as initial state in Register, Login, SetPassword pages
export const defaultRegisterForm = {
  firstName: "",
  lastName: "",
  email: "",
  dob: "",
  phone: "",
  gender: "",
  specialty: "", // doctors only
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

export const defaultLoginForm = {
  email: "",
  password: "",
};

export const defaultForgotForm = {
  email: "",
};
