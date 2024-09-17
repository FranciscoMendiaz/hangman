// Clase 1

export const sumar = (x: number, y: number) => x + y;

export const restar = (x: number, y: number) => x - y;

export const multiplicar = (x: number, y: number) => x * y;

export const dividir = (x: number, y: number) => x / y;

// Clase 2

export const addNumbersInString = (numbers: string) => {
  if (numbers === "") return 0;

  let delimiters = [",", "\\n"];

  const newDelimiter = numbers.match(/^\/\/(.+)\n/);
  if (newDelimiter) {
    delimiters.push(newDelimiter[1]);
  }

  const numbersSeparatedInString = numbers.split(
    new RegExp(`[${delimiters.join()}]+`)
  );
  const numbersSeparated = numbersSeparatedInString.map((n) => Number(n));

  if (numbersSeparated.some((n) => n < 0))
    throw "Negative numbers are not allowed";

  return numbersSeparated.reduce((prev, curr) => prev + curr, 0);
};
