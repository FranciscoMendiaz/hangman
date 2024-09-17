export class Hangman
{
  word 

  constructor(wordToSet: string)
  {
    this.word = wordToSet
  }
  
  checkLetter(l : string)
  {
    if (l.length !== 1)
    {
      throw "Only one letter is allowed"
    } 

    if (!this.word.includes(l))
    {
      throw "Letter not in the word"
    } 

    let array = []

  
    for (let i=0; i < this.word.length; i++)
    {
      if (this.word[i] === l) {array.push(i)}
    }
    console.log(array)
    return array

  }


}