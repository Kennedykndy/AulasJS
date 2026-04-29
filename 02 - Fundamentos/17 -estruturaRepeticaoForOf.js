// Estrutura de Repetição - for...of
// O for...of é uma estrutura de repetição introduzida no ECMAScript
// 2025 (ES6) que permite iterar sobre elementos de objetos iteráveis,
// como arrays, strings, mapas, conjuntos, entre outros. Ele é
// especialemnte útil para percorrer coleções de dados de forma
// mais simples e legivel.

// Exemplo de uso do for...of com array

const listaDeEmails = [
  "kennedy_markes@hotmail.com",
  "kennedy_comando@hotmail.com",
  "dev.senac.kennedy@gmail.com",
];

for (let email of listaDeEmails) {
  console.log(`Enviando email para: ${email}`);
}

// Exemplo de uso do for...of com uma string
const nome = "Kennedy Henrique";
for (let char of nome) {
  console.log(char);
}
