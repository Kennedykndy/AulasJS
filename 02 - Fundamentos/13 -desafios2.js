// Desafio 1 - Switch
let diaSemana = 2; // valor de 0 a 6

switch (diaSemana) {
  case 0:
    console.log("Hoje é Segunda-feira");
    break;
  case 1:
    console.log("Hoje é Terça-feira");
    break;
  case 2:
    console.log("Hoje é Quarta-feira");
    break;
  case 3:
    console.log("Hoje é Quinta-feira");
    break;
  case 4:
    console.log("Hoje é Sexta-feira");
    break;
  case 5:
    console.log("Hoje é Sábado");
    break;
  case 6:
    console.log("Hoje é Domingo");
    break;
  default:
    console.log("Número inválido! Não existe mais dias na semana.");
}

// Desafio 2 - Operadores Lógicos
let numero = 15;

if ((numero >= 10 && numero <= 20) || numero === 5) {
  console.log("O número está entre 10 e 20 (inclusive) ou é igual a 5.");
} else {
  console.log("O número NÃO atende à condição.");
}
