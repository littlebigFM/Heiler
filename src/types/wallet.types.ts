export interface Transaction {
  id: string;
  type: "credit" | "debit";
  amount: number;
  status: "success" | "pending" | "failed";
  date: string;
  title: string;
  description: string;
  currency: string;
}
