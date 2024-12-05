import { useState } from 'react';
import { Game } from '@src/services/game';
import './App.css';
import Words from '@src/components/words';
import Incorrect from '@src/components/incorrect';
import Figure from '@src/components/figure';
import { getRandomWord } from './utils/generateWords';
import { gameMessages } from './utils/messages';

import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [game, setGame] = useState(() => new Game(getRandomWord()));
  const [value, setValue] = useState('');

  const [key, setKey] = useState(0);

  const handleSubmit = () => {
    try {
      const win = game.takeGuess(value);
      toast.dismiss();
      if (win === gameMessages.win) {
        toast.success(
          `${gameMessages.win} La palabra era: ${game.hangman.word}`,
          {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          }
        );
        setTimeout(() => {
          setGame(new Game(getRandomWord()));
        }, 2500);
      }
    } catch (error) {
      toast.dismiss();

      let errorMessage = error as string;
      if (error === gameMessages.gameOver) {
        errorMessage = `${gameMessages.gameOver} La palabra era: ${game.hangman.word}`;
        setTimeout(() => {
          setGame(new Game(getRandomWord()));
        }, 2500);
      }

      toast.error(errorMessage, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      });
    }
    setKey(key + 1);
    setValue('');
  };

  const handleRestartGame = () => {
    setGame(new Game(getRandomWord()));
  };

  return (
    <>
      <h1 data-cy="game-title">Ahorcado con TDD!</h1>
      <Incorrect guesses={game.guesses} />
      <p data-cy="lives">Vidas restantes: {game.lives}</p>
      <Figure lives={game.lives} />

      <p data-cy="correct-word" id="correct">
        {game.hangman.word}
      </p>

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
