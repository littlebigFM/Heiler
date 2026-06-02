import { useParams } from "react-router-dom";
import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";
import { mockPatients } from "../../../Data/mockData";

const MedicalRecord = () => {
  const { id } = useParams();

  const patient = mockPatients.find((p) => p.id === id);

  if (!patient) {
    return <div>Patient not found</div>;
  }

  return (
    <DashboardLayout>
      <div className="w-full">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={patient.image || "https://via.placeholder.com/70"}
            alt={patient.fullName}
            className="w-[70px] h-[70px] rounded-full object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold text-[#1B2922]">
              {patient.fullName}
            </h2>

            <p className="text-gray-500">
              {patient.gender} • {patient.phone}
            </p>
          </div>
        </div>

        {/* RECORD CARD */}
        <div
          className="
            bg-white
            border
            border-[#E7E7E7]
            rounded-2xl
            p-6
            min-h-[500px]
          "
        >
          <h3 className="text-xl font-bold mb-6">Medical Record</h3>

          <div className="space-y-4">
            <div className="bg-[#F9F6EE] p-4 rounded-xl">
              <p>Patient complains about chest pain and fatigue.</p>

              <span className="text-sm text-gray-400">10:12 PM</span>
            </div>

            <div className="bg-[#F9F6EE] p-4 rounded-xl">
              <p>Blood pressure check recommended.</p>

              <span className="text-sm text-gray-400">11:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MedicalRecord;
