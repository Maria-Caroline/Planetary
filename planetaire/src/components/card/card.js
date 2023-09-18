import React, { useState, useEffect, useTransition } from 'react';
import './card.css';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import sunImage from "../../assets/cards/sun.png";
import moonImage from "../../assets/cards/moon.png";
import earthImage from "../../assets/cards/earth.png";
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
        default:
            imagePath = "";
    }
    return (
        <div className='card-container'>
        <h1>{cardData.name}</h1>
        <p>{t("Temperature")}: {cardData.medTemp}</p>
        <p>{t("Mass")}: {cardData.mass}</p>
        <p>{t("Pressure")}: {cardData.pressure}</p>
        <p>{t("Gravity")}: {cardData.gravity}</p>
        <p>{t("TemperatureType")}: {cardData.tempType}</p>
        <img src={imagePath} alt={cardData.name} />
      </div>
    );
};

export default Card;