import { useEffect, useState } from 'react';
import { Game } from './services/game';
import './App.css';
import Words from './components/words';
import Incorrect from './components/incorrect';

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
      <h1>Ahorcado con tdd</h1>
      <p>Vidas restantes: {game.lives}</p>

      <Words correctWord={game.hangman.word} guesses={game.guesses} />
      <Incorrect guesses={game.guesses} />

      <input
        role="letter-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={1}
      ></input>

      <button key={key} onClick={handleSubmit} role="try-button">
        Probar
      </button>

      <button onClick={handleRestartGame} role="new-game-button">
        Reiniciar juego
      </button>
    </>
  );
}

export default App;
