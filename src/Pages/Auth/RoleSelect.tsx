import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useApp } from "../../Context/AppContext";
import { Button } from "../../Components/Props";

type Role = "doctor" | "patient";

interface RoleSelectProps {}

interface SelectHandler {
  (selectedRole: Role): void;
}

const RoleSelect: FC<RoleSelectProps> = () => {
  const navigate = useNavigate();
  const { setRole } = useApp();

  const handleSelect: SelectHandler = (selectedRole) => {
    setRole(selectedRole);
    navigate("/register");
  };

  return (
    // <PageWrapper>
    <div
      className="
    max-w-4xl m-auto 
    flex flex-col
    items-center justify-center 
    min-h-screen
    px-10 pt-20 pb-15
    min-[350px]:px-8
    gap-8
    "
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="hidden min-[500px]:flex font-Roboto text-[32px] font-semibold text-[#1B1B1B] text-center mt-8">
          Who are you?
        </h2>
      </motion.div>

      <motion.div
        className="flex flex-col justify-center items-center gap-8 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Button
          // width={440}
          variant="outline"
          label="Doctor"
          onClick={() => handleSelect("doctor")}
          className="min-[500px]:w-110 w-full"
        />
        <Button
          // width={440}
          variant="primary"
          label="Patient"
          onClick={() => handleSelect("patient")}
          className="min-[500px]:w-110 w-full"
        />
      </motion.div>
    </div>
    // </PageWrapper>
  );
};

export default RoleSelect;
