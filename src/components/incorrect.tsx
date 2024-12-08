import { Guess } from '@src/services/game';
import styles from './incorrect.module.css';

interface Props {
  guesses: Guess[];
}

function Incorrect({ guesses }: Props) {
  const incorrectGuesses = guesses.filter((g) => g.belongsToWord === false);
  const incorrectLetters = incorrectGuesses.map((g) => g.letter).join(' - ');

  return (
    <div
      data-cy="incorrect-letters"
      role="incorrect-component"
      className={styles.container}
    >
      <h2 className="wrap">Letras incorrectas probadas: </h2>
      <h2 className="wrap" role="incorrect-letters-container">
        {incorrectLetters}
      </h2>
    </div>
  );
}

export default Incorrect;
