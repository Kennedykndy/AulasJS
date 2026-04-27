// Tipos Primitivos

// String
// Number
// Boolean
// Undefined
// Null
// Symbol

// String: Representa uma sequência de caracteres. Pode ser delimitada por aspas simples (' '), aspas duplas (" ") ou crases (` `).
let nome = "Kennedy Henrique";
let nome2 = "Amanda";
let nome3 = `João`;
let nome4 = "Maria";

// Number: Representa valores numéricos, tanto inteiros quanto decimais.
let idade = 30;
let altura = 1.75;

// Boolean: Representa um valor lógico, que pode ser verdadeiro (true) ou falso (false).
let isStudent = true;
let isEmployed = false;

let eEstudante = true;
let eCasado = false;

// Undefined: Representa uma variável que foi declarada, mas ainda não foi atribuída a um valor.
let endereco;
let telefone;
console.log(endereco); // undefined

// Null: Representa a ausência intencional de um valor. É usado para indicar que uma variável não tem valor ou que um objeto não existe.
let salario = null;

// Symbol: Representa um valor único e imutável, geralmente usado como identificador para propriedades de objetos.
let id = Symbol("id");
let outroId = Symbol("id");

console.log(nome); // Output: Kennedy Henrique
console.log(nome2); // Output: Amanda
console.log(nome3); // Output: João
console.log(nome4); // Output: Maria
console.log(idade); // Output: 30
console.log(altura); // Output: 1.75
console.log(isStudent); // Output: true
console.log(isEmployed); // Output: false
console.log(eEstudante); // Output: true
console.log(eCasado); // Output: false
console.log(salario); // Output: null
console.log(id); // Output: Symbol(id)
console.log(id2); // Output: Symbol(id)
console.log(id === outroId); // Output: false (cada Symbol é único)
