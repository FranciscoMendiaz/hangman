import { Guess } from '@src/services/game';
import styles from './incorrect.module.css';

interface Props {
  guesses: Guess[];
}

function Incorrect({ guesses }: Props) {
  const incorrectGuesses = guesses.filter((g) => g.belongsToWord === false);
  const incorrectLetters = incorrectGuesses.map((g) => g.letter).join(' - ');

  return (
    <div className={styles.container}>
      {/* {incorrectLetters.map((letter, index) => {
        return (
          <p style={{ color: 'red' }} role={`letter-${index}`}>
            {letter}
          </p>
        );
      })} */}
      <h2 className="wrap">Letras incorrectas probadas: </h2>
      <h2 className="wrap" role="incorrect-letters-container">
        {incorrectLetters}
      </h2>
    </div>
  );
}

export default Incorrect;
