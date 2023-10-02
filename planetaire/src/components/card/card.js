import React, { useState, useEffect, useTransition } from 'react';
import './card.css';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import sunImage from "../../assets/cards/sun.png";
import moonImage from "../../assets/cards/moon.png";
import earthImage from "../../assets/cards/earth.png";
import venusImage from "../../assets/cards/venus.png";
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import cardData from './card-data.json';

function Card({ cardData }) {
    const { t } = useTranslation();
    let imagePath;

    switch (cardData.name) {
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
            imagePath = venusImage;
            break;
        default:
            imagePath = "";
    }
    return (
        <div className='card-container'>
            <div className='card-info-container'>
                <h5 className='card-name'>{t(cardData.name)}</h5>
                <div className='card-content-container '>
                    <div className='card-content'>
                        <p className='card-temp'><strong>{t("Tmp")}</strong>: {cardData.medTemp}</p>
                        <p className='card-mass'><strong>{t("Mss")}</strong>: {cardData.mass}</p>
                    </div>
                    <div className='card-content'>
                        <p className='card-press'><strong>{t("Prs")}</strong>: {cardData.pression}</p>
                        <p className='card-grav'><strong>{t("Grv")}</strong>: {cardData.gravity}</p>
                    </div>
                </div>
            </div>
            <img className='card-image' src={imagePath} alt={t(cardData.name)} />
        </div>

    );
};

export default Card;