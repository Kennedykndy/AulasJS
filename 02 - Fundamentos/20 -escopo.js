// Escopo em JavaScript
// O escopo determina a visibilidade e acessibilidade de variáveis
// e funções em diferentes partes do código.
// Existem dois tipos principais de escopo: global e local (ou de função).

// Escopo Global
let escopoGlobal = "Eu sou uma variável global";

function mostrarEscopoGlobal() {
  let escopoLocal = "Eu sou uma variável local.";
  console.log(escopoLocal); // Acessivel dentro da função
}

mostrarEscopoGlobal(); // Chama a função para mostrar o escopo global
console.log(escopoLocal); // Erro: variável não acessivel fora da função
console.log(escopoGlobal); // Acessivel: fora da função
