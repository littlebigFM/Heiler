import TransactionCard from "../Cards/TransactionCards";

interface Transaction {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: "credit" | "debit";
}

interface Props {
  transactions: Transaction[];
  text?: string;
}

const TransactionHistory = ({ transactions, text }: Props) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border border-[#F1F1F1]
        p-5
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[16px] font-bold text-[#1B2922]">
          Transaction History
        </h3>

        <button className="text-primary text-sm font-semibold">{text}</button>
      </div>

      {/* LIST */}
      <div>
        {transactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            title={transaction.title}
            date={transaction.date}
            amount={transaction.amount}
            type={transaction.type}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
