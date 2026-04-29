// Operadores Lógicos de comparação
// Em JavaScript, os operadores de comparação são usados para
// comparar dois valores e retonar um valor booleano (true ou falso)
// com base na comparação. Aqui estão os principais operadores de comparação:

// 1. Igualdade (==): Verifica se os valores são iguais, ignorando o tipo de dado.
// 2. Estritamente Igual (===): Verifica se os valores são iguais e do mesmo tipo.
// 3. Desigualdade (!==): Verifica se os valores são diferentes, ignorando o tipo de dado.
// 4. Estritamente Desigual (!==): Verifica se os valores são diferentes ou de tipos diferentes.
// 5. Maior que (>): Verifica se o valor á esquerda é maior que o valor á direita.
// 6. Menor que (<): Verifica se o valor á esquerda é menor que o valor a direita.
// 7. Maior ou igual (>=): Verifica se o valor á esquerda é maior ou igual ao valor da direita.
// 8. Menor ou igual (<=): Verifica se o valor á esquerda é menor ou igual ao valor da direita.

// Igualdade (==)
console.log("Igual (==)");
console.log(5 == "5"); // true, porque realiza coerção de tipo
console.log(5 == 5); // true
console.log(5 == 10); // false

// Estritamente igual (===)
console.log("Estritamente Igual (===)");
console.log(5 === "5");
console.log(5 === 5);
console.log(5 === 10);

// Desigualdade (!=)
console.log("Desigualdade (!=)");
console.log(5 != "5");
console.log(5 != 5);
console.log(5 != 10);

// Maior que (>)
console.log("Maior que (>)");
console.log(10 > "5");
console.log(5 > 10);
console.log(5 > 5);

// Menor que (<)
console.log("Menor que (<)");
console.log(10 < "5");
console.log(5 < 10);
console.log(5 < 5);

// Maior ou igual que (>=)
console.log("Maior ou igual que (>=)");
console.log(10 >= "5");
console.log(5 >= 10);
console.log(5 >= 5);

// Menor ou igual que (<=)
console.log("Menor ou igual que (<=)");
console.log(10 <= "5");
console.log(5 <= 10);
console.log(5 <= 5);
