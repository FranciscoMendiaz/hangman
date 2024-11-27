import { Guess } from '@src/services/game';

function Words({
  correctWord,
  guesses,
}: {
  correctWord: string;
  guesses: Guess[];
}) {
  const words = [...correctWord];

  const correctGuesses = guesses.filter((g) => g.belongsToWord === true);
  const correctLetters = new Set(correctGuesses.map((g) => g.letter));

  return words.map((letter, index) => {
    if (correctLetters.has(letter)) {
      return <p role={`letter-${index}`}>{letter}</p>;
    }

    return <p role={`letter-${index}`}></p>;
  });
}

export default Words;

// import React from 'react';

// const Word = ({ selectedWord, correctLetters }) => {
//   return (
//     <div className="word">
//       {selectedWord.split('').map((letter, i) => {
//         return (
//           <span className="letter" key={i}>
//             {correctLetters.includes(letter) ? letter : ''}
//           </span>
//         );
//       })}
//     </div>
//   );
// };

// export default Word;
