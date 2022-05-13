import { useState } from "react";
import "./Event.css";
import ramassage from "@assets/ramassage.jpeg";

export default function Event2() {
  const [noSubscribe, setSubscribe] = useState(true);

  function onClick() {
    setSubscribe(!noSubscribe);
  }

  return (
    <div className="collecte">
      <img className="background" src={ramassage} alt="background" />
      <div>
        <h1> Collecte de déchets</h1>
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
