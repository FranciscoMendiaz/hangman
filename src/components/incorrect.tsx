import { Guess } from '@src/services/game';

interface Props {
  guesses: Guess[];
}

function Incorrect({ guesses }: Props) {
  const incorrectGuesses = guesses.filter((g) => g.belongsToWord === false);
  const incorrectLetters = incorrectGuesses.map((g) => g.letter);

  return incorrectLetters.map((letter, index) => {
    return (
      <p style={{ color: 'red' }} role={`letter-${index}`}>
        {letter}
      </p>
    );
  });
}

export default Incorrect;
