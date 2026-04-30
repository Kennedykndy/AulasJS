// Exercício 1
function numParOuImpar(numero) {
  return numero % 2 === 0;
}
console.log(numParOuImpar(2)); // true
console.log(numParOuImpar(3)); // false

// Exercício 2
function mediaAritmetica(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma / arr.length;
}
console.log(mediaAritmetica([2, 4, 6, 8])); // 5
console.log(mediaAritmetica([8, 8, 6, 8])); // 7.5

// Exercício 3
function converterParaMaiuscula(str) {
  return str.toUpperCase();
}

console.log(converterParaMaiuscula("olá, mundo!"));
console.log(converterParaMaiuscula("javascript é incrível!"));

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
