export interface VerificationItem {
  id: string;
  title: string;
  status: "verified" | "pending";
  description: string;
}
