import mastercard from "../../../../assets/logo/mastercard.png";
import visa from "../../../../assets/logo/visa.png";

export const paymentMethods = [
  {
    id: 1,
    bank: "First Bank Nigeria",
    number: "****_****_**** 9876",
    active: true,
    logo: mastercard,
  },
  {
    id: 2,
    bank: "Access Bank",
    number: "****_****_**** 7896",
    active: false,
    logo: visa,
  },
  {
    id: 3,
    bank: "First Bank Nigeria",
    number: "****_****_**** 1234",
    active: false,
    logo: mastercard,
  },
];
