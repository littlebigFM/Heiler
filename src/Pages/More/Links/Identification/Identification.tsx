import { useState } from "react";
import DashboardLayout from "../../../../Components/Dashboard/Layout/DashboardLayout";
import VerificationList from "./VerificationList";
import { verificationItems } from "./verificationData";
import BVNForm from "./BVNForm";
import IDDocumentForm from "./IDDocumentForm";
import HomeAddressForm from "./HomeAddressForm";

// import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";

// import VerificationList from "./components/VerificationList";

// import BVNForm from "./components/BVNForm";
// import IDDocumentForm from "./components/IDDocumentForm";
// import HomeAddressForm from "./components/HomeAddressForm";

const Identification = () => {
  const [activeTab, setActiveTab] = useState(verificationItems[0].id);

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>

        <div className="grid grid-cols-2 gap-6">
          <VerificationList activeTab={activeTab} onChange={setActiveTab} />

          {activeTab === "bvn" && <BVNForm />}

          {activeTab === "id-document" && <IDDocumentForm />}

          {activeTab === "home-address" && <HomeAddressForm />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Identification;
