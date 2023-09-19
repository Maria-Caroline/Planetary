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
            <div className='card-info-container'>
                <h5 className='card-name'>{cardData.name}</h5>
                <div className='card-content-container '>
                    <div className='card-content'>
                        <p className='card-temp'>{t("Tmp")}: {cardData.medTemp}</p>
                        <p className='card-mass'>{t("Mss")}: {cardData.mass}</p>
                    </div>
                    <div className='card-content'>
                        <p className='card-press'>{t("Prs")}: {cardData.pression}</p>
                        <p className='card-grav'>{t("Grv")}: {cardData.gravity}</p>
                    </div>
                </div>
            </div>
            <img className='card-image' src={imagePath} alt={cardData.name} />
        </div>

    );
};

export default Card;