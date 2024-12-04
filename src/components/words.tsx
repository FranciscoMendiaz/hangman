import { Guess } from '@src/services/game';
import styles from './words.module.css';

interface Props {
  correctWord: string;
  guesses: Guess[];
}

function Words({ correctWord, guesses }: Props) {
  const correctGuesses = guesses?.filter((g) => g.belongsToWord === true);
  const correctLetters = correctGuesses?.map((g) => g.letter);

  return (
    <div role="words-component" className={styles.container}>
      {correctWord?.split('').map((letter, index) => {
        return (
          <h1
            data-cy="letter"
            key={index}
            className={styles.letter}
            role={`letter-${index}`}
          >
            {correctLetters.includes(letter) && letter}
          </h1>
        );
      })}
    </div>
  );
}

export default Words;
