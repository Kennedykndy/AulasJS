// Exercício 1
function numParOuImpar(numero) {
  return numero % 2 === 0;
}
console.log(numParOuImpar(2)); // true
console.log(numParOuImpar(3)); // false

// Exercício 2
function calcularMedia(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    return null;
  }

  const soma = numeros.reduce((total, num) => total + num, 0);
  return soma / numeros.length;
}

const conjunto = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(calcularMedia(conjunto)); // 20

// Exercício 3
const nome = "Kennedy Henrique";
for (let char of nome) {
  console.log(char);
}

// Exercício 4
function numPrimo(numero) {
  if (numero <= 1) return false;

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}
// Sorteia um número de 1 á 100.
const numeroSorteado = Math.floor(Math.random() * 100) + 1;

console.log("Número sorteado:", numeroSorteado);
console.log("É primo?", numPrimo(numeroSorteado));
