let precoDoCombustivel = 5.99; // Preço do combustível por litro
let quantidadeDeLitros = 10; // Quantidade de km que o carro percorre com 1 litro de combustível
let distanciaPercorrida = 100; // Distância percorrida em km
let gastoTotal =
  precoDoCombustivel * (distanciaPercorrida / quantidadeDeLitros); // Multiplicação

let mediaDeConsumo = distanciaPercorrida / quantidadeDeLitros; // divisão

console.log("O gasto total com combustível é: R$ " + gastoTotal);
console.log("A média de consumo é: " + mediaDeConsumo + " km/l");

console.log(gastoTotal.toFixed(2)); // Exibe o gasto total com 2 casas decimais
