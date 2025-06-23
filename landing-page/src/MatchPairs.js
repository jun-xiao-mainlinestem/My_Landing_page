import React, { useState, useEffect } from 'react';

const CARD_PAIRS = [
  { id: 1, emoji: '🐶', matched: false, flipped: false },
  { id: 2, emoji: '🐱', matched: false, flipped: false },
  { id: 3, emoji: '🐭', matched: false, flipped: false },
  { id: 4, emoji: '🐹', matched: false, flipped: false },
  { id: 5, emoji: '🐰', matched: false, flipped: false },
  { id: 6, emoji: '🦊', matched: false, flipped: false },
  { id: 7, emoji: '🐻', matched: false, flipped: false },
  { id: 8, emoji: '🐼', matched: false, flipped: false },
];

function MatchPairs() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  // Initialize game
  useEffect(() => {
    const shuffledCards = [...CARD_PAIRS, ...CARD_PAIRS]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, uniqueId: index }));
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (card) => {
    if (card.flipped || card.matched || flippedCards.length >= 2) return;

    const newCards = cards.map(c => 
      c.uniqueId === card.uniqueId ? { ...c, flipped: true } : c
    );
    setCards(newCards);

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      
      if (newFlippedCards[0].emoji === newFlippedCards[1].emoji) {
        // Match found
        setTimeout(() => {
          setCards(prevCards => 
            prevCards.map(c => 
              c.emoji === newFlippedCards[0].emoji 
                ? { ...c, matched: true, flipped: true }
                : c
            )
          );
          setFlippedCards([]);
          
          // Check if game is won
          const matchedCards = newCards.filter(c => c.emoji === newFlippedCards[0].emoji).length + 2;
          if (matchedCards === cards.length) {
            setGameWon(true);
          }
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setCards(prevCards => 
            prevCards.map(c => 
              newFlippedCards.some(fc => fc.uniqueId === c.uniqueId)
                ? { ...c, flipped: false }
                : c
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    const shuffledCards = [...CARD_PAIRS, ...CARD_PAIRS]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, uniqueId: index }));
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setGameWon(false);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <h2>Match the Pairs</h2>
      <p>Moves: {moves}</p>
      <div className="d-grid gap-2" style={{ gridTemplateColumns: 'repeat(4, 1fr)', maxWidth: '400px' }}>
        {cards.map((card) => (
          <button
            key={card.uniqueId}
            className="btn btn-outline-primary"
            style={{
              width: '80px',
              height: '80px',
              fontSize: '2rem',
              backgroundColor: card.flipped || card.matched ? '#e3f2fd' : '#f8f9fa',
              border: card.matched ? '2px solid #28a745' : '1px solid #dee2e6',
            }}
            onClick={() => handleCardClick(card)}
            disabled={card.flipped || card.matched}
          >
            {card.flipped || card.matched ? card.emoji : '❓'}
          </button>
        ))}
      </div>
      {gameWon && (
        <div className="mt-3">
          <h4>Congratulations! You won!</h4>
          <button className="btn btn-success" onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}
      <button className="btn btn-secondary mt-3" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default MatchPairs; 