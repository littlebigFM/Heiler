export interface BankCard {
  id: string;
  cardType: "visa" | "mastercard";
  holderName: string;
  cardNumber: string;
  expiry: string;
}
