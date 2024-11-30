const possibleWords: string[] = ['holaw', 'chau', 'ferazz'];

export const getRandomWord = () => {
  const random = Math.floor(Math.random() * possibleWords.length);

  return possibleWords[random];
};
