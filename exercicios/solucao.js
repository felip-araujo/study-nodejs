/* 
Programa para calcular valor de uma viagem 

Voce terá terá 5 variaveis, sendo elas: 

1 - Preço do Etanol; 
2 - Preço da gasolina; 
3 - O tipo de combustível que está no seu carro; 
4 - Gasto médio de combustível do carro por KM; 
5 - Distância em KM da viagem; 

Imprima no Console o Valor que será gasto de Combustível para realizar a viagem
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Gasolina';
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}








