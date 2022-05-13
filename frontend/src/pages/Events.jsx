import Event from "@components/EventPlantation";
import Event2 from "@components/EventRamassage";
import Event3 from "@components/EventRecolte";
import Header from "@components/Header";

import "./event.css"

export default function Events() {
  return (
    <>
    
    <div className="EventList">
    <div>
      <Header />
    </div>
      <div>
        <Event2 />
      </div>

      </div>
    </>
  );
}
