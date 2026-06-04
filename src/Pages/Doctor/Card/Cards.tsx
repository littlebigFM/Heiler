import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";
import { cardsData } from "./cardsData";
import CardItem from "./CardItem";
import AddCardBox from "./AddCardBox";
import BackButton from "../../../Components/Common/BackButton";

const Cards = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout label="Cards">
      <div className="p-6">
        {/* TITLE */}
        <BackButton />

        {/* CARDS */}
        <div className="flex flex-wrap gap-6">
          {cardsData.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}

          <AddCardBox onClick={() => navigate("/doctor/cards/add")} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Cards;
