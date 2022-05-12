import React from "react";
import "./Bordeaux.css";
import Card from "@components/Card";
import SearchPage from "@components/SearchPage";
import map from "@assets/map.jpg";

export default function Bordeaux() {
  return (
    <>
      <div className="home">
        <div className="header-bordeaux">
          <SearchPage />
        </div>
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
      </div>
    </>
  );
}
