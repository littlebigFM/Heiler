import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";
import { cardsData } from "./cardsData";
import CardItem from "./CardItem";
import AddCardBox from "./AddCardBox";

// import CardItem from "./components/CardItem";
// import AddCardBox from "./components/AddCardBox";

// import { cards } from "./data/cards";

const Cards = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* TITLE */}
        <h1
          className="
            text-[28px]
            font-bold
            text-[#1B2922]
            mb-8
          "
        >
          Cards
        </h1>

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
