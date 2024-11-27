import { useEffect, useState } from 'react';
import { Game } from './services/game';
import './App.css';
import Words from './components/words';

const possibleWords: string[] = ['hola', 'chau', 'fera'];

function App() {
  const [game, setGame] = useState<Game>(new Game(possibleWords[1]));
  const [value, setValue] = useState('');

  const handleSubmit = (letter: string) => {
    try {
      game.takeGuess(letter);
      const sameGame = { ...game };
      setGame(sameGame);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>hangamn with tdd</h1>
      <p>Vidas restantes: {game.lives}</p>

      <input
        role="letter-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={1}
      ></input>

      <button onClick={handleSubmit} role="try-button">
        Probar
      </button>
    </>
  );
}

export default App;
