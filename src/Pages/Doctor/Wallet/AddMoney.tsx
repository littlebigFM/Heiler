import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";
import AddMoneyDesktop from "./AddMoneyDesktop";
import AddMoneyMobile from "./AddMoneyMobile";

const AddMoney = () => {
  return (
    <DashboardLayout>
      <div className="hidden min-[768px]:block">
        <AddMoneyDesktop />
      </div>

      <div className="block min-[768px]:hidden">
        <AddMoneyMobile />
      </div>
    </DashboardLayout>
  );
};

export default AddMoney;
