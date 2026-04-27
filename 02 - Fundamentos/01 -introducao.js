function soma(a, b) {
  // A função "soma" recebe dois parâmetros, "a" e "b", e retorna a soma desses valores.
  return a + b; // O operador "+" é usado para realizar a adição dos dois números fornecidos como argumentos.
}

const numero1 = 5; // A variável "numero1" é declarada e atribuída com o valor 5. Este valor será usado como um dos argumentos para a função "soma".
const numero2 = 10; // A variável "numero2" é declarada e atribuída com o valor 10. Este valor será usado como o segundo argumento para a função "soma".

const resultado = soma(numero1, numero2); // A função "soma" é chamada com os argumentos "numero1" e "numero2". O resultado da soma é armazenado na variável "resultado".
console.log(`A soma de ${numero1} e ${numero2} é: ${resultado}`); // A função "console.log" é usada para imprimir a mensagem no console, mostrando o resultado da soma de "numero1" e "numero2". A sintaxe `${}` é utilizada para inserir os valores das variáveis dentro da string.
