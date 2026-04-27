const bandeiraInicial = 8;
const valorPorKm = 8;
const kmPercorridos = 16;

const litrosConsumidos = kmPercorridos * valorPorKm;
console.log(
  `O valor gasto da corrida de ${kmPercorridos} km é de R$ ${litrosConsumidos.toFixed(2)}`,
);
