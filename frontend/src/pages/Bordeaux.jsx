import "./Bordeaux.css";
import Card from "@components/Card";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Area from "@components/Area";
import logo from "@assets/Green-Coin.png";
import { Link } from "react-router-dom";


export default function Bordeaux() {
  const [areaSize, setAreaSize] = useState(false);
  const [limitChoice, setLimitChoice] = useState(true);
  const [limitChoice2, setLimitChoice2] = useState(false);

  const action1 = () => {
    setLimitChoice(!limitChoice);
    setLimitChoice2(!limitChoice2);
  };

  return (
    <>
      <div className="hpB">
        <Link to="/">
          {" "}
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <p>Green Life </p>
      </div>
      <div className="home">
        <div className="header-bordeaux">
          <div className="searchPage">
            <div className="searchPage__info">
              <h1>It's time to act !</h1>
              <h2>What's happening nearby</h2>
              <Button
                variant="outlined"
                onClick={() => {
                  setAreaSize(!areaSize);
                }}
              >
                Area flexibility
              </Button>
              <Button variant="outlined">Type of event</Button>
              <Button variant="outlined">Reward</Button>
              <Button variant="outlined">More filters</Button>
            </div>
            {areaSize && (
              <>
                <div className="AreaBordeaux">
                  <Area />
                  <button className="buttonBordeaux" onClick={action1}>
                    Adjust area
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        {limitChoice && (
          <>
            <div className="home__section">
              <Card
                src="./src/assets/ramassage.jpeg"
                title="Ramassage de déchets"
                localisation="Cenon"
                reward={130}
              />
              <Card
                src="./src/assets/plantation.jpeg"
                title="Plantation d'arbres"
                localisation="Mérignac"
                reward={70}
              />
              <Card
                src="./src/assets/Réparer-vélo.jpg"
                title="Réparation de vélo"
                localisation="Bordeaux"
                reward={300}
              />
            </div>
            <div className="home__section">
              <Card
                src="./src/assets/recolte.jpeg"
                title="Récolte de fruits"
                localisation="Cestas"
                reward={180}
              />
              <Card
                src="./src/assets/excursion.jpg"
                title="Excursion en forêt pour sensibilisation"
                localisation="Bois de Boulogne"
                reward={40}
              />
              <Card
                src="./src/assets/plantation.jpeg"
                title="Ramassage de déchets en bord de mer "
                localisation="Arcachon"
                reward={120}
              />
            </div>
          </>
        )}
        {limitChoice2 && (
          <>
            <div className="home__section">
              <Card
                src="./src/assets/ramassage.jpeg"
                title="Ramassage de déchets"
                localisation="Cenon"
                reward={130}
              />
              <Card
                src="./src/assets/Réparer-vélo.jpg"
                title="Réparation de vélo"
                localisation="Bordeaux"
                reward={300}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
