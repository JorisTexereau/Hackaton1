import { useState } from "react";
import recolte from "@assets/recolte.jpeg";

export default function Event3() {
  const [noSubscribe, setSubscribe] = useState(true);

  function onClick() {
    setSubscribe(!noSubscribe);
  }

  return (
    <div>
      <div>
        <img src={recolte} alt="ramassage" />
        <h1> Recolte de fruits bio </h1>
      </div>

      <p>Adresse de l'évenement: rue de la cité</p>

      <button
        className={noSubscribe ? "greenBtn" : "redBtn"}
        onClick={onClick}
        type="button"
      >
        {" "}
        {noSubscribe ? "S'inscrire" : "Se désinscrire"}
      </button>
      <p> Nombre de personnes déjà inscrites : 22</p>
      <p> GreenWards: 38 </p>
    </div>
  );
}
