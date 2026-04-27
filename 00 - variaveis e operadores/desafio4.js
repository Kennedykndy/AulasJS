const precoKitkat = 5.0; // Preço unitário do KitKat
const quantidadeComprada = 3; // Quantidade de KitKats comprados
const valorDesconto = 0.1; // Desconto de 10% (0.1 em decimal)

const valorTotal = precoKitkat * quantidadeComprada; // Calcula o valor total sem desconto
const valorDescontoTotal = valorTotal * valorDesconto; // Calcula o valor total do desconto
const valorFinal = valorTotal - valorDescontoTotal; // Calcula o valor final a ser pago após aplicar o desconto
console.log(`O valor total a ser pago é: R$ ${valorFinal.toFixed(2)}`); // Exibe o valor final formatado com duas casas decimais
