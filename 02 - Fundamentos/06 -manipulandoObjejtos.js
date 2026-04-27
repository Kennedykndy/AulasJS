// Criando um objeto
let pessoa = {
  // Propriedades do objeto
  nome: "Kennedy", // Propriedade nome
  idade: 29, // Propriedade idade
  cidade: "Maceió", // Propriedade cidade
  profissao: "Desenvolvedor", // Propriedade profissão
  taTrabalhando: true, // Propriedade taTrabalhando
  saudacao: function () {
    // Método saudacao
    console.log("Olá, meu nome é " + this.nome); // Acessando a propriedade nome usando this
  },
};

// Modificando propriedades
pessoa.idade = 30; // Modificando a idade
pessoa.profissao = "Engenheiro"; // Modificando a profissão
console.log(pessoa);

// Adicionando novas propriedades
pessoa.cidade = "Arapiraca"; // Modificando a cidade
console.log(pessoa);

// Deletando propriedades
delete pessoa.taTrabalhando; // Deletando a propriedade taTrabalhando
console.log(pessoa);
