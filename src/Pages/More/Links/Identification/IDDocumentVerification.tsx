import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import IDDocumentForm from "./IDDocumentForm";

// import IDDocumentForm from "../components/IDDocumentForm";

const IDDocumentVerification = () => {
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

      <h2 className="font-semibold text-lg mb-4">ID Document</h2>

      <IDDocumentForm />
    </div>
  );
};

export default IDDocumentVerification;
