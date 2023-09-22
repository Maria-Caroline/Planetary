import React, { useState, useEffect, useTransition } from 'react';
import './game.css';
import { useRef } from 'react';
import { Link } from "react-router-dom";
// import lilysmall from '../../assets/lily.webp'
import backcard from '../../assets/cards/temporary-back-card.png'
import placeholder from '../../assets/cards/temporary-placeholder.png'
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import Card from "../../components/card/card"
import Header from '../../components/header/header';
import cardData from '../../components/card/card-data.json';


function Game() {
    const [deck, setDeck] = useState([]);
    const [cardsDistributed, setCardsDistributed] = useState(false);

    const distributeCards = () => {
        if (!cardsDistributed) {
            const randomCardIds = generateRandomCardIds(); // Função para gerar IDs aleatórios
            setDeck(randomCardIds);
            setCardsDistributed(true);
        }
    };

    const generateRandomCardIds = () => {
        const randomIds = [];
        while (randomIds.length < 5) {
            const randomId = Math.floor(Math.random() * cardData.planets.length) + 1;
            if (!randomIds.includes(randomId)) {
                randomIds.push(randomId);
            }
        }
        return randomIds;
    };

    const [revealedCardId, setRevealedCardId] = useState(null);

    const handleCardClick = (index) => {
        // Quando uma carta virada para baixo é clicada, revelamos a carta correspondente
        setRevealedCardId(deck[index]);
    };

    return (
        <div>
            <Header />
            <div className="game-area">
                <button onClick={distributeCards} disabled={cardsDistributed}>
                    Distribuir Cartas
                </button>
                {cardsDistributed ? (
                    <div className="container-card-deck">
                        {deck.map((cardId, index) => (
                            <div key={index} className="card" onClick={() => handleCardClick(index)}>
                                {revealedCardId === cardId ? (
                                    <div className="container-card">
                                        <div className="revealed-cards-container">
                                            <Card cardData={cardData.planets[cardId - 1]} />
                                        </div>
                                    </div>
                                ) : (
                                    <img className="card-backwards" src={backcard} alt="Card Back" />
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="container-card-deck">
                        {Array.from({ length: 5 }, (_, index) => (
                            <div key={index} className="card-deck">
                                <img className="card-backwards" src={backcard} alt="Card Back" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Game;