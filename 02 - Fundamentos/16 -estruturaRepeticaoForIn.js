// Estrutura de Repetição - for in

// for in - lê os indices ou chaves do objeto
const pessoa = {
  nome: "Kennedy",
  idade: 36,
  profissao: "Desenvolvedor",
};

for (const atributo in pessoa) {
  console.log("O atributo" + atributo + " = " + pessoa[atributo]);
}
