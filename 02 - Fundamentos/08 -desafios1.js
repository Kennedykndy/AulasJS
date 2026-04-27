// Desafio 1
let nome = "Kennedy Henrique";
let idade = 29; // idade deve ser número, não string

console.log(nome);
console.log(idade);

// Desafio 2
let mensagem = "Seja bem vindo";
mensagem = 10;

console.log(mensagem);

// Desafio 3
let pessoa = {
  nome: "Kennedy",
  idade: 29,
  profissao: "Desenvolvedor",
};

console.log(pessoa);

// Desafio 4
pessoa.hobbies = ["Programar"]; // corrigido (era "hoobies")
console.log(pessoa.hobbies);

// Desafio 5
let media = 4.3;

if (media >= 7) {
  console.log("Parabéns você é um aluno: Aprovado!");
} else if (media >= 4 && media < 7) {
  console.log("Você está de recuperação.");
} else {
  console.log("Infelizmente, você foi reprovado.");
}
