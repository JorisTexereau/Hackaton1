import Event from "@components/EventPlantation";
import Event2 from "@components/EventRamassage";
import Event3 from "@components/EventRecolte";
import Header from "@components/Header";
import  logo from "@assets/Green-Coin.png";
import { Link } from "react-router-dom";

import "./event.css";

export default function Events() {
  return (
    <>
      <div className="hpB">
        <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
        <p>Green Life </p>
      </div>
      <div className="EventList">
        <div>
          <Event2 />
        </div>
      </div>
    </>
  );
}
