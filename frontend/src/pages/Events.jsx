import Event from "@components/EventPlantation";
import Event2 from "@components/EventRamassage";
import Event3 from "@components/EventRecolte";

import ramassage from "@assets/ramassage.jpeg";

import "@components/event.css";

export default function Events() {
  return (
    <>
      <div>
        <Event />
      </div>

      <div>
        <Event2 />
      </div>

      <div>
        <Event3 />
      </div>
    </>
  );
}
