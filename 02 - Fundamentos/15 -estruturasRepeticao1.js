// Estruturas de Repetição '
// for

// Inicialização; Condição de parada; Incremento/Decremento
for (let i = 0; i < 100; i++) {
  console.log("Executando o for: " + i);
}

const listaDeEmails = [
  "kennedy_markes@hotmail.com",
  "kennedy_comando@hotmail.com",
  "dev.senac.kennedy@gmail.com",
];

for (let i = 0; i < listaDeEmails.length; i++) {
  console.log("Enviando email para: " + listaDeEmails[i]);
}
