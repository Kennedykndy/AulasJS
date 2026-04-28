// Operadores Lógicos

// && -AND (E lógico): Retorna true se ambos os operandos forem verdadeios.
// || - OR (OU - lógico): Retorna true se pelo menos um dos operandos for verdadeiro.
// ! - (NÃO lógico): Inverte o valor lógico do operando.

// Exemplo do operador E (&&)[
let x = 5;
let y = 10;

if (x > 0 && y > 0) {
  console.log("Ambos x e y são maiores que zero.");
} else {
  console.log("Pelo menos um dos valores é falso.");
}

// Exemplo do operador ou lógico (||)
let a = -3;
let b = 7;

if (a > 0 || b > 0) {
  console.log("Pelo menos um dos valores é maior que zero.");
} else {
  console.log("Nenhum dos valores é maior que zero.");
}

// Exemplo do operador NÃO lógico (!)
let souDesenvolvedor = true;

if (!souDesenvolvedor) {
  console.log("Eu não sou um desenvolvedor.");
} else {
  console.log("Eu sou desenvolvedor.");
}
