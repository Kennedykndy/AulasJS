const precoEtanol = 4.5;
const precoGasolina = 5.89;
const tipoCombustivel = "Gasolina";
const gastoMedio = 10;
const distancia = 112;

let valorGasto;

if (tipoCombustivel === "Etanol") {
  valorGasto = (distancia / gastoMedio) * precoEtanol;
} else if (tipoCombustivel === "Gasolina") {
  valorGasto = (distancia / gastoMedio) * precoGasolina;
}
console.log(
  `O valor gasto com ${tipoCombustivel} é: R$ ${valorGasto.toFixed(2)}`,
);
