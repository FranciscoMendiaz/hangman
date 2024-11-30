import { useState } from 'react';
import { Game } from '@src/services/game';
import './App.css';
import Words from '@src/components/words';
import Incorrect from '@src/components/incorrect';
import Figure from '@src/components/figure';
import { getRandomWord } from './utils/generateWords';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { gameMessages } from './utils/messages';

function App() {
  const [game, setGame] = useState(new Game(getRandomWord()));
  const [value, setValue] = useState('');

  const [key, setKey] = useState(0);

  const handleSubmit = () => {
    try {
      const win = game.takeGuess(value);

      if (win === gameMessages.win) console.log(win);
    } catch (error) {
      console.error(error);
    }
    setKey(key + 1);
    setValue('');
  };

  const handleRestartGame = () => {
    setGame(new Game(getRandomWord()));
  };

  return (
    <>
      <h1>Ahorcado con TDD!</h1>
      <Incorrect guesses={game.guesses} />
      <p>Vidas restantes: {game.lives}</p>
      <Figure lives={game.lives} />

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

      <ToastContainer />
    </>
  );
}

export default App;
