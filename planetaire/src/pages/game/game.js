import React, { useState, useEffect} from 'react';
import './game.css';
import backcard from '../../assets/cards/bkcard.png'
import { useTranslation } from 'react-i18next';
import Card from "../../components/card/card"
import Header from '../../components/header/header';
import cardData from '../../components/card/card-data.json';

function Game() {
    const { t } = useTranslation();
    const [playerDeck, setPlayerDeck] = useState([]);
    const [opponentDeck, setOpponentDeck] = useState([]);
    const [cardsDistributed, setCardsDistributed] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [revealedCardId, setRevealedCardId] = useState(null);
    const [showButton, setShowButton] = useState(true);
    const [showRules, setShowRules] = useState(false);
    const [selectedAttribute, setSelectedAttribute] = useState(null);
    const [enemyCardId, setEnemyCardId] = useState(null);
    const [enemyCard, setEnemyCard] = useState(null);
    const [isCardSelectionLocked, setIsCardSelectionLocked] = useState(false);
    const [isOpponentCardRevealed, setIsOpponentCardRevealed] = useState(false);

    useEffect(() => {
        if (selectedAttribute !== null) {
            compareAttribute(selectedAttribute);
        }
    }, [selectedAttribute]);

    //distribui as cartas
    const distributeCards = () => {
        if (!cardsDistributed) {
            const { playerDeck, opponentDeck } = generateRandomCardIds();
            setPlayerDeck(playerDeck);
            setOpponentDeck(opponentDeck);
            setCardsDistributed(true);
            setShowButton(false);
        }
    };
    //Gera ids aleatorios
    const generateRandomCardIds = () => {
        const allCardIds = Array.from({ length: cardData.planets.length }, (_, index) => index + 1);
        const shuffledCardIds = shuffleArray(allCardIds); // Implemente a função shuffleArray se necessário
        const playerDeck = shuffledCardIds.slice(0, 5); // Deck do jogador
        const opponentDeck = shuffledCardIds.slice(5, 10); // Deck do oponente
        return { playerDeck, opponentDeck };
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de posição
        }
        return array;
    };

    const handleCardClick = (index) => {
        if (!isCardSelectionLocked) {
            setRevealedCardId(playerDeck[index]);
            setSelectedCardIndex(index);
        }
    };

    const handleSelectCard = () => {
        setIsCardSelectionLocked(true);
        const randomEnemyCardId = chooseRandomOpponentCard();
        setEnemyCardId(randomEnemyCardId); // Armazena o ID da carta do oponente no estado
    };

    const chooseRandomOpponentCard = () => {
        const randomIndex = Math.floor(Math.random() * opponentDeck.length);
        const randomCardId = opponentDeck[randomIndex];
        setEnemyCard(cardData.planets[randomCardId - 1]); // Armazena a carta do oponente no estado
        return randomCardId; // Retorna o ID da carta do oponente
    };
    //envia qual é o atributo
    const handleAttributeSelect = (attribute) => {
        setSelectedAttribute(attribute);
        setIsOpponentCardRevealed(true);

    };
    //compara os atributos
    const compareAttribute = (attribute) => {
        if (selectedCardIndex === null || selectedCardIndex < 0 || selectedCardIndex >= playerDeck.length) {
            console.log("Invalid selected card index.");
            return;
        }

        const playerCardId = playerDeck[selectedCardIndex];
        const playerCard = cardData.planets.find(card => card.id === playerCardId);

        if (!playerCard) {
            console.log(`Player card with ID ${playerCardId} not found.`);
            return;
        }

        if (!playerCard.hasOwnProperty(attribute)) {
            console.log(`Attribute "${attribute}" not found in player card.`);
            return;
        }

        if (enemyCardId === null) {
            console.log("Enemy card ID is null. Make sure it's properly initialized.");
            return;
        }

        const enemyCard = cardData.planets.find(card => card.id === enemyCardId);

        if (!enemyCard) {
            console.log(`Enemy card with ID ${enemyCardId} not found.`);
            return;
        }

        if (!enemyCard.hasOwnProperty(attribute)) {
            console.log(`Attribute "${attribute}" not found in enemy card.`);
            return;
        }

        const valorCartaJogador = playerCard[attribute];
        const valorCartaOponente = enemyCard[attribute];

        if (valorCartaJogador === valorCartaOponente) {
            return alert("Empate!" +
            ` Valor Carta Jogador: ${valorCartaJogador}` +
            ` Valor Carta Oponente: ${valorCartaOponente}`);
        } else if (valorCartaJogador > valorCartaOponente) {
            return alert("Jogador Venceu!" +
            ` Valor Carta Jogador: ${valorCartaJogador}` +
            ` Valor Carta Oponente: ${valorCartaOponente}`);
        } else {
            return alert("Oponente Venceu!" +
            ` Valor Carta Jogador: ${valorCartaJogador}` +
            ` Valor Carta Oponente: ${valorCartaOponente}`);
        }
    };

    const Deck = () => (
        <div className='decks-container'>
            <div className="container-card-deck">
                {playerDeck.map((cardId, index) => (
                    <div key={index} className={`card ${selectedCardIndex === index ? 'selected-card' : ''}`}
                        onClick={() => handleCardClick(index)}>
                        <div className="container-card">
                            <div className="revealed-cards-container">
                                {revealedCardId === cardId && (
                                    <div className="selected-card-attributes-container">
                                        <div className="card-flip"> {/* Aplica a classe para a animação de virada */}
                                            <Card cardData={cardData.planets[cardId - 1]} />
                                            <button onClick={handleSelectCard} className={`${isCardSelectionLocked ? 'selected-button-hidden' : 'selected-button'}`}>
                                                Selecionar Carta
                                            </button>
                                        </div>
                                        {selectedCardIndex !== null && selectedAttribute === null && enemyCard !== null && (
                                            <div className="attribute-options">
                                                {Object.keys(cardData.planets[selectedCardIndex])
                                                    .filter(attribute => attribute !== 'id' && attribute !== 'Name' && attribute !== 'img')
                                                    .map((attribute) => (
                                                        <button
                                                            key={attribute}
                                                            className="box-attribute-list"
                                                            onClick={() => handleAttributeSelect(attribute)}>{t(attribute)}

                                                        </button>
                                                    ))}
                                            </div>
                                        )}

                                    </div>
                                )}
                            </div>
                            <img
                                className={`card-backwards ${revealedCardId === cardId ? 'hidden' : ''}`}
                                src={backcard} alt="Card Back" />
                        </div>
                    </div>
                ))}

            </div><div className="container-card-deck">
                {opponentDeck.map((cardId, index) => (
                    <div key={index} className='card'>
                        <div className="container-card-opponent">
                            <div className="revealed-cards-opponent-container">
                                {isOpponentCardRevealed && enemyCardId === cardId && (
                                    <div className="card-flip">
                                        <Card cardData={cardData.planets[cardId - 1]} />
                                    </div>
                                )}
                            </div>
                            <img
                                className={`card-backwards-opponent ${revealedCardId === cardId ? 'hidden' : ''}`}
                                src={backcard} alt="Card Back" />
                        </div>
                    </div>
                ))}
            </div>
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