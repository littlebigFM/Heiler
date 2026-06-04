import { useNavigate } from "react-router-dom";
import WalletCard from "../../../Components/Dashboard/Cards/WalletCard";
import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";
import TransactionHistory from "../../../Components/Dashboard/Sections/TransactionHistory";
import { mockTransactions } from "../../../Data/mockData";

const Wallet = () => {
  const navigate = useNavigate();

  return (
    <div>
      <DashboardLayout label="Wallet">
        <div className="mb-10 flex flex-col md:flex-row p-6 gap-6">
          <div className="w-full">
            <WalletCard
              balance={100000}
              onAddMoney={() => navigate("/doctor/wallet/add-money")}
            />
          </div>

          <div className="w-full ">
            <TransactionHistory transactions={mockTransactions} />
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Wallet;
