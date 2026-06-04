import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../Components/Dashboard/Layout/DashboardLayout";
// import Header from "../../Components/Dashboard/Layout/Header";

import Button from "../../Components/Props/Button";

import { mockPatients } from "../../Data/mockData";
import { Avatar } from "../../Components/Props";
import SearchInput from "../../Components/Common/SearchInput";
import BackButton from "../../Components/Common/BackButton";
import { useState } from "react";

const FindPatient = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredPatients = mockPatients.filter((patient) =>
    patient.fullName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <DashboardLayout label="Patient">
      <div className="p-6 flex flex-col gap-6 max-[768px]:pb-12">
        <div className="flex flex-col min-[450px]:flex-row justify-between items-start min-[450px]:items-center ">
          <BackButton />

          <div className="max-w-105">
            <SearchInput
              placeholder="Search anything..."
              value={search}
              onChange={setSearch}
            />
          </div>
        </div>

        {/* Patients Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
        >
          {filteredPatients.map((patient) => (
            <div
              key={patient.id}
              className="
                bg-white
                border border-[#E9E9E9]
                rounded-2xl
                p-5
                flex flex-col gap-5
              "
            >
              {/* Top */}
              <div className="flex items-center gap-3">
                <Avatar
                  src={patient.image}
                  name={patient.fullName}
                  size={48}
                  status={patient.online ? "online" : "offline"}
                />

                <div>
                  <h3 className="font-semibold text-[#1B2922]">
                    {patient.fullName}
                  </h3>

                  <p className="text-sm text-[#8E8E93]">{patient.gender}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  label="View Medical Record"
                  onClick={() => navigate(`/doctor/patients/${patient.id}`)}
                />

                <Button
                  variant="outline"
                  label="Send a message"
                  onClick={() => navigate(`/doctor/patients/${patient.id}`)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FindPatient;
