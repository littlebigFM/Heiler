import BackButton from "../../../../Components/Common/BackButton";
import DashboardLayout from "../../../../Components/Dashboard/Layout/DashboardLayout";
import SubscriptionCard from "./SubscriptionCard";
import { subscriptionPlans } from "./subscriptionPlans";

const Subscription = () => {
  return (
    <DashboardLayout label="Subscription">
      <div className="p-6">
        <BackButton />

        <div
          className="
            grid
            grid-cols-1
            min-[850px]:grid-cols-2
            min-[1250px]:grid-cols-3
            gap-6
          "
        >
          {subscriptionPlans.map((plan) => (
            <SubscriptionCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Subscription;
