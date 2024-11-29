import { useEffect, useState } from 'react';
import { Game } from './services/game';
import './App.css';
import Words from './components/words';
import Incorrect from './components/incorrect';
import Figure from './components/figure';

const possibleWords: string[] = ['holaw', 'chau', 'ferazz'];
function getRandomInteger() {
  return Math.floor(Math.random() * possibleWords.length);
}

function App() {
  const [key, setKey] = useState(0);

  const [game, setGame] = useState<Game>(
    new Game(possibleWords[getRandomInteger()])
  );
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    try {
      console.log(value);
      game.takeGuess(value);
    } catch (error) {
      console.log(error);
    }
    setKey(key + 1);
  };

  const handleRestartGame = () => {
    setGame(new Game(possibleWords[getRandomInteger()]));
  };

  return (
    <>
      <h1>Ahorcado con TDD!</h1>
      <Figure lives={game.lives} />
      <p>Vidas restantes: {game.lives}</p>

      <Incorrect guesses={game.guesses} />
      <Words correctWord={game.hangman.word} guesses={game.guesses} />

      <div className="input-letter-container">
        <input
          role="letter-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={1}
          placeholder="Intenta una letra"
        ></input>
        <button key={key} onClick={handleSubmit} role="try-button">
          Probar
        </button>
      </div>

      <button
        className="try-again-button"
        onClick={handleRestartGame}
        role="new-game-button"
      >
        Volver a intentar
      </button>
    </>
  );
}

export default App;
