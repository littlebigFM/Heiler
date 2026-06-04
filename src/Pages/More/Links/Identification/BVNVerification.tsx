import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BVNForm from "./BVNForm";

// import BVNForm from "../components/BVNForm";

const BVNVerification = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <button
        onClick={() => navigate("/doctor/more/identification")}
        className="
          flex
          items-center
          gap-2
          mb-6
        "
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <h2 className="font-semibold text-lg mb-4">BVN</h2>

      <BVNForm />
    </div>
  );
};

export default BVNVerification;
