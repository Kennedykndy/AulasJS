// Desafio 01 Arrays
const frutas = ["Banana", "Maçã", "Uva", "Jaca", "Manga"];
console.log(frutas.length);

// Desafio 02 for
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Desafio 03 for in
const usuario = {
  nome: "Kennedy",
  email: "dev.senac.kennedy@gmail.com",
};
for (const atributo in usuario) {
  console.log(`O atributo ${atributo} = ${usuario[atributo]}`);
}

// Desafio 04 for of
for (let fruta of frutas) {
  console.log(fruta);
}

// Desafio 05
function encontrarFruta(fruta) {
  for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === fruta) {
      return "Fruta encontrada.";
    }
  }
  return "Fruta não encontrada";
}
console.log(encontrarFruta("Banana"));
console.log(encontrarFruta("coco"));
