import React, { useState, useEffect, useTransition } from 'react';
import './game.css';
import { useRef } from 'react';
import { Link } from "react-router-dom";
// import lilysmall from '../../assets/lily.webp'
import backcard from '../../assets/cards/bkcard.png'
import placeholder from '../../assets/cards/temporary-placeholder.png'
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import Card from "../../components/card/card"
import Header from '../../components/header/header';
import cardData from '../../components/card/card-data.json';


function Game() {
    const [deck, setDeck] = useState([]);
    const [cardsDistributed, setCardsDistributed] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [revealedCardId, setRevealedCardId] = useState(null);

    const distributeCards = () => {
        //variavel que controla se as cartas foram distribuidas
        if (!cardsDistributed) {
            //chama a função de gerar ids
            const randomCardIds = generateRandomCardIds();
            //armazena os ids em um deck
            setDeck(randomCardIds);
            //seta as cartas como distribuidas, logo, desabilita o botão
            setCardsDistributed(true);
        }
    };

    const generateRandomCardIds = () => {
        //array de ids de cartas
        const randomIds = [];
        //realiza a função enquanto os ids forem menor que 5 (o zero é contabilizado tbm)
        //0 < 5 = 4
        while (randomIds.length < 5) {
            const randomId = Math.floor(Math.random() * cardData.planets.length) + 1;
            if (!randomIds.includes(randomId)) {
                randomIds.push(randomId);
            }
        }
        return randomIds;
    };


    const handleCardClick = (index) => {
        // Quando uma carta virada para baixo é clicada, revelamos a carta correspondente
        setRevealedCardId(deck[index]);
        // Defina a carta selecionada
        setSelectedCardIndex(index);

    };


    return (
        <div>
            <Header />
            <div className="game-area">
                <button onClick={distributeCards} disabled={cardsDistributed}>
                    Distribuir Cartas
                </button>
                {/* verifica se essa variavel é true */}
                {cardsDistributed ? (
                    
                    <div className="container-card-deck">
                        {/* renderiza as cartas do deck */}
                        {deck.map((cardId, index) => (
                            <div key={index} className={`card ${selectedCardIndex === index ? 'selected-card' : ''}`} onClick={() => handleCardClick(index)}>
                                
                                <div className="container-card">
                                    <div className="revealed-cards-container">
                                        {revealedCardId === cardId && (
                                            <Card cardData={cardData.planets[cardId - 1]} />
                                        )}
                                    </div>
                                    <img className={`card-backwards ${revealedCardId === cardId ? 'hidden' : ''}`} src={backcard} alt="Card Back" />
                                </div>
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