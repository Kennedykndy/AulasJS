const valorKwh = 0.5; // Valor do kWh em reais
const consumoKwh = 280; // Consumo em kWh
const taxaAdicional = 0.1; // Taxa adicional de 10% (0.1 em decimal)
const valorTotal = valorKwh * consumoKwh; // Calcula o valor total sem a taxa adicional
const valorComTaxa = valorTotal + valorTotal * taxaAdicional; // Calcula o valor total com a taxa adicional
console.log(`O valor total a ser pago é R$ ${valorComTaxa.toFixed(2)}`); // Exibe o valor total a ser pago, formatado com 2 casas decimais
