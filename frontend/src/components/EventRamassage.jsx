import { useState } from "react";
import ramassage from "@assets/ramassage.jpeg";

export default function Event2() {
  const [noSubscribe, setSubscribe] = useState(true);

  function onClick() {
    setSubscribe(!noSubscribe);
    alert("Votre code de participation vous a été envoyé par mail")
  }

  return (
    <div className="collecte">
      <img className="background" src={ramassage} alt="background" />
      <div>
        <h1> Collecte de déchets</h1>
      </div>
      <p> Venez nous aider à nettoyer la superbe fôret communale de Cenon l'objectif de la journée est de ramasser 1 tonne de déchets</p>
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
