import React, { useState, useEffect } from 'react';
import './game.css';
import backcard from '../../assets/cards/back-card.png'
import dialog from '../../assets/support_material/dialog.png'
import icon from '../../assets/support_material/temporary-icon.png'
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
    const [winner, setWinner] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [scorePlayer, setScorePlayer] = useState(0);
    const [scoreOpponent, setScoreOpponent] = useState(0);

    useEffect(() => {
        if (selectedAttribute !== null) {
            const vencedor = compareAttribute(selectedAttribute);
            setTimeout(() => {
                setWinner(vencedor);
                if (vencedor === "opponent") {
                    setScoreOpponent(scoreOpponent + 1)
                    removeCardFromPlayerDeck(selectedCardIndex);
                } else {
                    setScorePlayer(scorePlayer + 1)
                    removeCardFromOpponentDeck(enemyCardId);
                }
                setIsCardSelectionLocked(false);

            }, 2800);
        }
    }, [selectedAttribute]);

    const removeCardFromPlayerDeck = (index) => {
        const updatedPlayerDeck = [...playerDeck];
        updatedPlayerDeck.splice(index, 1);
        setPlayerDeck(updatedPlayerDeck);


    };

    const removeCardFromOpponentDeck = (cardId) => {
        if (cardId === null) {
            console.log("Card ID is null.");
            return;
        }
        if (opponentDeck.includes(cardId)) {
            console.log(`Removing card with ID: ${cardId}`);
            const updatedOpponentDeck = opponentDeck.filter(card => card !== cardId);
            setOpponentDeck(updatedOpponentDeck);
        } else {
            console.log(`Card with ID ${cardId} not found in opponent's deck.`);
        }


    };

    const distributeCards = () => {
        if (!cardsDistributed) {
            const { playerDeck, opponentDeck } = generateRandomCardIds();
            setPlayerDeck(playerDeck);
            setOpponentDeck(opponentDeck);
            setCardsDistributed(true);
            setShowButton(false);
        }
    };

    const generateRandomCardIds = () => {
        const allCardIds = Array.from({ length: cardData.planets.length }, (_, index) => index + 1);
        const shuffledCardIds = shuffleArray(allCardIds);
        const playerDeck = shuffledCardIds.slice(0, 5);
        const opponentDeck = shuffledCardIds.slice(5, 10);
        return { playerDeck, opponentDeck };
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleCardClick = (index) => {
        setWinner(null);
        if (!isCardSelectionLocked) {
            setRevealedCardId(playerDeck[index]);
            setSelectedCardIndex(index);
            setIsOpponentCardRevealed(false);

        }

    };

    const handleSelectCard = () => {
        setIsCardSelectionLocked(true);
        const randomEnemyCardId = chooseRandomOpponentCard();
        setEnemyCardId(randomEnemyCardId);
        setSelectedAttribute(null);
        setIsOpponentCardRevealed(false);
        setWinner(null);
    };

    const chooseRandomOpponentCard = () => {
        if (opponentDeck.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * opponentDeck.length);
        const randomCardId = opponentDeck[randomIndex];
        setEnemyCard(cardData.planets[randomCardId - 1]);
        return randomCardId;
    };

    const handleAttributeSelect = (attribute) => {
        setSelectedAttribute(attribute);
        setTimeout(() => {
            setIsOpponentCardRevealed(true);
        }, 1000);
    };

    const compareAttribute = (attribute) => {
        if (selectedCardIndex === null || selectedCardIndex < 0 || selectedCardIndex >= playerDeck.length) {
            console.log("Invalid selected card index.");
            return;
        }
        const playerCardId = playerDeck[selectedCardIndex];
        const playerCard = cardData.planets.find(card => card.id === playerCardId);
        const valuePlayerCard = playerCard[attribute];
        const valueOpponentCard = enemyCard[attribute];
        if (valuePlayerCard > valueOpponentCard) {
            return "player"
        } else {
            return "opponent"
        }
    };

    if (!gameOver && cardsDistributed) {
        if (playerDeck.length === 0 || opponentDeck.length === 0) {
            setIsCardSelectionLocked(true)
            setGameOver(true);
        }
    }


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
                                        <div className="card-flip">
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
                                                            onClick={() => handleAttributeSelect(attribute)}><span className='space-attribute'></span>{t(attribute)}
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
            </div>
            <div className="winner-announcement">
                <div className={`${winner !== null ? 'winner-matches-info' : 'winner-announcement-hidden'}`} >
                    <div className=''>
                        <p>{t('winner')}</p>
                        <h3>{t(winner)}</h3>
                        <p>{t('selected')}</p>
                        <h3>{t(selectedAttribute)}</h3>
                    </div>
                </div>
                <div className='score'>
                    {gameOver && (
                         <div className='modal-planets-background'>
                        <div className="">
                            <p>fim de jogo</p>
                        </div>
                        </div>
                    )}
                    <h3 className='score-text'>score <br />{scorePlayer} x {scoreOpponent} </h3>
                </div>
            </div>
            <div className="container-card-deck">
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
        <div className='container-options'>
            <div className='box-rules'>
                <h3>Super Trunfo</h3>
                <p>O Super Trunfo é um jogo de cartas onde dois jogadores recebem um baralho de 5 cartas. Cada carta possui seus atributos, atributos esses que são escolhidos por um dos jogadores para compará-lo com a carta de seu oponente, o vencedor é aquele que tem o atributo mais alto.
                    O perdedor é aquele que não ter mais nenhuma carta no baralho.
                    <br />
                    Passo a Passo
                    <br />
                    <strong>1-</strong> Escolha uma carta
                    <br />
                    <strong>2-</strong> O oponente escolhe uma carta
                    <br />
                    <strong>3-</strong> Escolha um atributo
                    <br />
                    <strong>4-</strong> Você e o oponente revelam suas cartas
                    <br />
                    <strong>5-</strong> Vence quem tiver o maior número do atributo escolhido
                </p>
                <div className='box-back'>
                    <button onClick={() => setShowRules(false)} className="back-option">{t("Back")}</button>
                </div>
            </div>
            <img className="dialog-options" src={dialog} alt="Card Back" />
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
                        <div className='container-options'>
                            <div className='box-options'>
                                <img className="" src={icon} alt="Card Back" />
                                <button className="button-options" onClick={distributeCards} disabled={cardsDistributed}>
                                    {t("want-to-play")}
                                </button>
                                <button className="button-options" onClick={() => setShowRules(true)} disabled={cardsDistributed}>
                                    {t("rules")}
                                </button>
                            </div>
                            <img className="dialog-options" src={dialog} alt="Card Back" />
                        </div>
                    ) : (
                        <Deck />
                    )
                )}
            </div>
        </>
    );
}
export default Game;