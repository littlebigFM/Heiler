import { FiTruck, FiUser, FiUserPlus } from "react-icons/fi";
import WalletCard from "../../../Components/Dashboard/Cards/WalletCard";
import WelcomeBanner from "../../../Components/Dashboard/Cards/WelcomeBanner";
import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";
import { Button } from "../../../Components/Props";
import { FaUser } from "react-icons/fa";
import NotificationList from "../../../Components/Dashboard/Sections/NotificationList";
import TransactionHistory from "../../../Components/Dashboard/Sections/TransactionHistory";
import { mockNotifications, mockTransactions } from "../../../Data/mockData";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../../Context/AppContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useApp();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  return (
    <DashboardLayout label={`Hi, ${user?.firstName}!`} date={today}>
      <div className="p-6 grid grid-cols-1 min-[930px]:grid-cols-2 gap-6">
        <div>
          {" "}
          <WelcomeBanner />
        </div>

        <div className="hidden min-[930px]:block">
          <WalletCard balance={100000} />
        </div>

        <div className="min-[930px]:mt-6">
          <div className="min-[930px]:mb-12 grid grid-cols-1 min-[450px]:grid-cols-2 min-[768px]:grid-cols-1 gap-6">
            <Button
              className="w-full"
              width="full"
              onClick={() => navigate("/doctor/patients")}
            >
              <div className="flex justify-center items-center rounded-[79px] bg-[#FFFFFF] text-primary w-10 h-10">
                <FaUser />
              </div>
              <p>Patient</p>
            </Button>

            <Button className="w-full" variant="outline">
              <div className="flex justify-center items-center rounded-[79px] bg-[#D3EEE1] text-primary w-10 h-10">
                <FiTruck />
              </div>
              <p>Ambulance</p>
            </Button>
          </div>

          <div className="hidden min-[930px]:block shadow-[0px_8px_30px_0px_#6B696926] w-full">
            <NotificationList notifications={mockNotifications} />
          </div>
        </div>

        <div className="min-[930px]:mt-6 shadow-[0px_8px_30px_0px_#6B696926]">
          <TransactionHistory transactions={mockTransactions} text="see all" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
