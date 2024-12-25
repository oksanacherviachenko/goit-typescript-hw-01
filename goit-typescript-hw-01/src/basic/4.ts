// Функція, яка приймає рядок як аргумент і нічого не повертає
function showMessage(message: string): void {
  console.log(message);
}

// Функція, яка приймає два числа і повертає їх суму
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функція, яка не приймає аргументів і завжди викидає помилку
function customError(): never {
  throw new Error('Error');
}
