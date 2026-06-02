// export type Role = "doctor" | "patient";

// export interface BaseUser {
//   id: string;
//   role: Role;
//   firstName: string;
//   lastName: string;
//   fullName: string;
//   email: string;
//   avatar?: string | null;
// }

// export interface Doctor extends BaseUser {
//   role: "doctor";
//   specialty: string;
//   experience: number;
// }

// export interface Patient extends BaseUser {
//   role: "patient";
// }

// export type AppUser = Doctor | Patient;

export type Role = "doctor" | "patient";

export interface BaseUser {
  id: string;
  role: Role;

  firstName: string;
  lastName: string;
  fullName: string;
  email: string;

  phone: string; // ✅ ADD
  gender: "male" | "female"; // ✅ ADD
  dob: string; // ✅ ADD

  avatar?: string | null;

  wallet: {
    balance: number;
    currency: string;
  }; // ✅ ADD
}

export interface Doctor extends BaseUser {
  role: "doctor";

  specialty: string;
  experience: number;

  // optional extras (since you’re passing them)
  qualification?: string;
  mdcnRegNo?: string;
  rating?: number;
  patientsServed?: number;
  hospital?: string;
  bio?: string;
  online?: boolean;
}

export interface Patient extends BaseUser {
  role: "patient";
}

export type AppUser = Doctor | Patient;
