// Objetos são coleções de propriedades, onde cada propriedade é uma associação entre um nome (chave) e um valor. Eles são usados para armazenar e organizar dados relacionados.

// Criando um objeto
let pessoa = {
  nome: "Kennedy",
  idade: 29,
  cidade: "Maceió",
  profissao: "Desenvolvedor",
  taTrabalhando: true,
  saudacao: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
};

// Acessando propriedades

console.log(pessoa.nome); // Acessando a propriedade 'nome'
console.log(pessoa.idade); // Acessando a propriedade 'idade'
console.log(pessoa.cidade); // Acessando a propriedade 'cidade'
console.log(pessoa.profissao); // Acessando a propriedade 'profissão'
console.log(pessoa.taTrabalhando); // Acessando a propriedade 'taTrabalhando'
console.log(pessoa); // Acessando o objeto completo

pessoa.saudacao(); // Chamando o método 'saudacao'
