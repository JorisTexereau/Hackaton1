import "./Bordeaux.css";
import Card from "@components/Card";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Area from "@components/Area";

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
                    Test
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
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Ramassage de déchets"
                localisation="Cenon"
                reward={130}
              />
              <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                localisation="Bordeaux"
                reward={130}
              />
              <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                localisation="Mérignac"
                reward={130}
              />
            </div>
            <div className="home__section">
              <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                localisation="Cestas"
                reward={130}
              />
              <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                localisation="Léognan"
                reward={130}
              />
              <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                localisation="Arcachon"
                reward={130}
              />
            </div>
          </>
        )}
        {limitChoice2 && (
          <>
            <div className="home__section">
              <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Ramassage de déchets"
                localisation="Cenon"
                reward={130}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
