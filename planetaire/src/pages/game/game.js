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
    const [showButton, setShowButton] = useState(true);
    const [showRules, setShowRules] = useState(false);
    const [selectedAttribute, setSelectedAttribute] = useState(null);
    const [enemyCardId, setEnemyCardId] = useState(null);
    const [enemyCard, setEnemyCard] = useState(null);
    const [isCardSelectionLocked, setIsCardSelectionLocked] = useState(false);

    const distributeCards = () => {
        if (!cardsDistributed) {
            const randomCardIds = generateRandomCardIds();
            setDeck(randomCardIds);
            setCardsDistributed(true);
            setShowButton(false);

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

    const handleCardClick = (index) => {
        if (!isCardSelectionLocked) {
            setRevealedCardId(deck[index]);
            setSelectedCardIndex(index);
        }
    };

    const handleSelectCard = () => {
        const randomEnemyCardId = generateRandomEnemyCardId(selectedCardIndex);
        setEnemyCard(cardData.planets[randomEnemyCardId - 1]);
        setIsCardSelectionLocked(true);
    };

    const handleAttributeSelect = (attribute) => {
        setSelectedAttribute(attribute);

        // Realize a comparação de atributos aqui
        // cardData.planets[selectedCardIndex] é a carta do usuário
        // cardData.planets[enemyCardId - 1] é a carta "inimiga"
        const userCard = cardData.planets[selectedCardIndex];
        const enemyCard = cardData.planets[enemyCardId - 1];

        // Faça a comparação dos atributos aqui e determine o vencedor
        // Você pode atualizar o estado do jogo com o resultado.

        // Por exemplo, se o atributo do usuário for maior que o atributo "inimigo", o usuário venceu.

        // Reinicie os estados necessários para a próxima rodada.

        // Dica: Você pode usar um setTimeout para simular a escolha do "inimigo" após um pequeno atraso.
    };

    const generateRandomEnemyCardId = (userCardIndex) => {
        let randomEnemyCardId;
        do {
            randomEnemyCardId = Math.floor(Math.random() * cardData.planets.length) + 1;
        } while (randomEnemyCardId === userCardIndex + 1); // Certifique-se de que o ID seja diferente do selecionado pelo usuário
        return randomEnemyCardId;
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
                                    <button onClick={handleSelectCard} className={`${isCardSelectionLocked ? 'selected-button' : ''}`}>
                                        Selecionar Carta
                                    </button>

                                </div>
                            )}
                        </div>
                        <img
                            className={`card-backwards ${revealedCardId === cardId ? 'hidden' : ''}`}
                            src={backcard} alt="Card Back" />
                    </div>
                </div>
            ))}
            {selectedCardIndex !== null && selectedAttribute === null && enemyCard !== null && (
                <div className="attribute-options">
                    {Object.keys(cardData.planets[selectedCardIndex]).map((attribute) => (
                        <button
                            key={attribute}
                            className="teste"
                            onClick={() => handleAttributeSelect(attribute)}
                        >
                            {attribute}
                        </button>
                    ))}
                </div>
            )}
            {selectedCardIndex !== null && selectedAttribute === null && enemyCard !== null && (
                <div className="attribute-options">
                    {Object.keys(cardData.planets[selectedCardIndex]).map((attribute) => (
                        <button
                            key={attribute}
                            className="teste"
                            onClick={() => handleAttributeSelect(attribute)}
                        >
                            {attribute}
                        </button>
                    ))}
                </div>
            )}
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
                        <Deck />
                    )
                )}
            </div>
        </>
    );
}

export default Game;