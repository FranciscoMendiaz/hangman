import { Guess } from '@src/services/game';
import style from './styles.module.css';

// interface Props {
//   correctWord: string;
//   guesses: Guess[];
// }

function Words({
  correctWord,
  guesses,
}: {
  correctWord: string;
  guesses: Guess[];
}) {
  const correctGuesses = guesses?.filter((g) => g.belongsToWord === true);
  const correctLetters = correctGuesses?.map((g) => g.letter);

  return (
    <div className={style.container}>
      {correctWord?.split('').map((letter, index) => {
        if (correctLetters.includes(letter)) {
          return (
            <p style={{ color: 'green' }} role={`letter-${index}`}>
              {letter}
            </p>
          );
        }

        return (
          <p style={{ color: 'green' }} role={`letter-${index}`}>
            _
          </p>
        );
      })}
    </div>
  );
}

export default Words;
