import dolls from "@assets/Green-Coin.png"
import React from 'react';
import './Card.css'
import { Link } from "react-router-dom";


function Card({ src, title, localisation, reward }) {
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{localisation}</h4>
                <div className="dolls"><h3>{reward}</h3><img src={dolls} alt=""/> </div>
                <Link to="/events"><h5><button>En savoir plus</button></h5></Link>
            </div>
        </div>
    )
}

export default Card;