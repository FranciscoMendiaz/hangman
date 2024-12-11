const possibleWords: string[] = [
  'agiles',
  'kanban',
  'scrum',
  'acceptance',
  'delivery',
  'story',
  'manifiesto',
  'inception',
  'extreme',
  'valor',
];

export const getRandomWord = () => {
  const random = Math.floor(Math.random() * possibleWords.length);
  const word = possibleWords[random];

  return word;
};
