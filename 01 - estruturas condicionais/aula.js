const numero = 11;

const numeroPar = numero % 2 === 0;

console.log(numeroPar);

//if estruturas condicionais

if (numeroPar) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}

// else if estruturas condicionais

const idade = 78;
if (idade < 18) {
  console.log("Você é menor de idade");
} else if (idade >= 18 && idade < 60) {
  console.log("Você é Adulto");
} else {
  console.log("Você é Idoso");
}
