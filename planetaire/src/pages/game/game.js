import React, { useState, useEffect, useTransition } from 'react';
import './game.css';
// import lilysmall from '../../assets/lily.webp'
import backcard from '../../assets/cards/bkcard.png'
import { useTranslation } from 'react-i18next';
import Card from "../../components/card/card"
import Header from '../../components/header/header';
import cardData from '../../components/card/card-data.json';

function Game() {
    const { t } = useTranslation();
    const [deck, setDeck] = useState([]);
    const [cardsDistributed, setCardsDistributed] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [revealedCardId, setRevealedCardId] = useState(null);
    const [showButton, setShowButton] = useState(true); // Novo estado para controlar a exibição do botão
    const [showRules, setShowRules] = useState(false);

    const distributeCards = () => {
        //variavel que controla se as cartas foram distribuidas
        if (!cardsDistributed) {
            //chama a função de gerar ids
            const randomCardIds = generateRandomCardIds();
            //armazena os ids em um deck
            setDeck(randomCardIds);
            //seta as cartas como distribuidas, logo, desabilita o botão
            setCardsDistributed(true);
            setShowButton(false);

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

    const Deck = () => (
        <div className="container-card-deck">
            {deck.map((cardId, index) => (
                <div key={index} className={`card ${selectedCardIndex === index ? 'selected-card' : ''}`}
                    onClick={() => handleCardClick(index)}>
                    <div className="container-card">
                        <div className="revealed-cards-container">
                            {revealedCardId === cardId && (
                                <div className="card-flip"> {/* Aplica a classe para a animação de virada */}
                                    <Card cardData={cardData.planets[cardId - 1]} />
                                </div>
                            )}
                        </div>
                        <img
                            className={`card-backwards ${revealedCardId === cardId ? 'hidden' : ''}`}
                            src={backcard} alt="Card Back" />
                    </div>
                </div>
            ))}
        </div>
    );

    const Rules = () => (
        <div className="container-rules">
            <button onClick={() => setShowRules(false)} className="back-option">{t("Back")}</button>
        </div>

    );

    return (
        <>
            <Header />
            <div className="game-area">
                {showRules ? (
                    <Rules /> // Renderize a tela de regras quando showRules for true
                ) : (
                    showButton && !cardsDistributed ? (
                        <>
                            <div className='box-options'>
                                <button onClick={distributeCards} disabled={cardsDistributed}>
                                    {t("want-to-play")}
                                </button>
                                <button onClick={() => setShowRules(true)} disabled={cardsDistributed}>
                                    {t("rules")}
                                </button>
                                
                            </div>
                        </>
                    ) : (
                        <Deck /> // Exibe a "nova tela" quando showButton for false ou cardsDistributed for true
                    )
                )}
            </div>
        </>
    );
}

export default Game;