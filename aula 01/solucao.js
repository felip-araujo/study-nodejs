/* 
Programa para calcular valor de uma viagem 

Voce terá terá 3 variaveis, sendo elas: 
1 - Preço do Combustível  
2 - Gasto médio de commbustível do carro por KM; 
3 - Distância em KM da viagem; 

Imprima no Console o Valor que será gasto de Combustível para realizar a viagem
*/ 

const precoCombustivel = 5.79; 
const kmPorLitros = 12; 
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros; 
const valorGasto = litrosConsumidos * precoCombustivel; 
console.log(valorGasto.toFixed(2));




