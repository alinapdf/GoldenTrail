import { useState } from "react";
import FavBusket from "../../components/FavBusket/FavBusket";
import SelectedItem from "../../components/ObjectToBusket/SelectedItem";
import PersonalAccount from "../../components/PersonalAccount/PersonalAccount";
import SoMayLike from "../../components/SoMayLikePage/SoMayLike";
import PersonalData from "../../components/PersonalData/PersonalData";
import OrderItem from "../../components/myOrders/myOrders";

function Busket() {
  const [activeSection, setActiveSection] = useState("cart");

  return (
    <>
      <PersonalAccount
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />

      {activeSection === "cart" && <SelectedItem />}
      {activeSection === "favorites" && <FavBusket />}
      {activeSection === "personal" && <PersonalData />}
      {activeSection === "order" && <OrderItem />}

      <SoMayLike />
    </>
  );
}

export default Busket;
