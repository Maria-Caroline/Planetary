import React from 'react';
import './card.css';
import sunImage from "../../assets/cards/sun.png";
import moonImage from "../../assets/cards/moon.png";
import earthImage from "../../assets/cards/earth.png";
import venusImage from "../../assets/cards/venus.png";
import mercuryImage from "../../assets/cards/mercury.png";
import { useTranslation } from 'react-i18next';

function Card({ cardData }) {
    const { t } = useTranslation();
    let imagePath;

    switch (cardData.Name) {
        case "Sun":
            imagePath = sunImage;
            break;
        case "Moon":
            imagePath = moonImage;
            break;
        case "Earth":
            imagePath = earthImage;
            break;
        case "Venus":
            imagePath = venusImage;
            break;
        case "Uranus":
            imagePath = sunImage;
            break;
        case "Saturn":
            imagePath = moonImage;
            break;
        case "Pluto":
            imagePath = earthImage;
            break;
        case "Mars":
            imagePath = venusImage;
            break;
        case "Neptune":
            imagePath = moonImage;
            break;
        case "Jupiter":
            imagePath = earthImage;
            break;
        case "Mercury":
            imagePath = mercuryImage;
            break;
        default:
            imagePath = "";
    }
    return (
        <div className='card-container'>
            <div className='card-info-container'>
                <h5 className='card-name'>{t(cardData.Name)}</h5>
                <div className='card-content-container '>
                    <div className='card-content'>
                        <p className='card-temp'><strong>{t("Tmp")}</strong>: {cardData.Temperature}°C</p>
                        <p className='card-mass'><strong>{t("Mss")}</strong>: {cardData.Mass}x10^20</p>
                    </div>
                    <div className='card-content'>
                        <p className='card-press'><strong>{t("Prs")}</strong>: {cardData.Pression}x10^10</p>
                        <p className='card-grav'><strong>{t("Grv")}</strong>: {cardData.Gravity}m/s²</p>
                    </div>
                </div>
            </div>
            <img className='card-image' src={imagePath} alt={t(cardData.Name)} />
        </div>

    );
};

export default Card;