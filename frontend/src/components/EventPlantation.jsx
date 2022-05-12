import { useState } from "react";
import plantation from "@assets/plantation.jpeg";

export default function Event() {
  const [noSubscribe, setSubscribe] = useState(true);

  function onClick() {
    setSubscribe(!noSubscribe);
  }

  return (
    <div>
      <div className="event">
        <img src={plantation} alt="plantation" />
      </div>
      <h1> Plantations d'arbres </h1>
      <button
        className={noSubscribe ? "greenBtn" : "redBtn"}
        onClick={onClick}
        type="button"
      >
        {" "}
        {noSubscribe ? "S'inscrire" : "Se désinscrire"}{" "}
      </button>
      <p> Nombre de personnes déjà inscrites : 22</p>
      <p> GreeWards: 25 </p>
    </div>
  );
}
