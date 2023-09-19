import React, { useState, useEffect, useTransition } from 'react';
import './game.css';
import { useRef } from 'react';
import { Link } from "react-router-dom";
// import lilysmall from '../../assets/lily.webp'
// import lilybigger from '../../assets/lily-bigger.webp'
// import lilymedium from '../../assets/lily-medium.webp'
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import Card from "../../components/card/card"
import Header from '../../components/header/header';
import cardData from '../../components/card/card-data.json';

function Game() {
    const { t } = useTranslation();


    return (
        <><Header />

            <div className='container-game'>
                
                {/* {cardData.planets.map(planet => (
                    <Card key={planet.id} cardData={planet} />
                ))} */}
            </div>

        </>
    );
};

export default Game;