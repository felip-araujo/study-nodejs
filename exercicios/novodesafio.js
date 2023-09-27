
// const media = 1.16;  

// if(media >= 9 && media <= 10){
//     console.log('Aprovado')
// } else if(media >= 7.5 && media < 9 ) {
//     console.log('Aprovado')
// } else if(media >= 6 && media < 7.5  ) {
//     console.log('Aprovado') 
// } else if(media >= 4 && media < 6) {
//     console.log('Reprovado')
// } else if(media >=0 && media < 4 ) {
//     console.log('Reprovado')
// }


const tipoCombustivel = 2;
const precoAlcol = 1.90;
const precoGasolina = 2.50;
const quantidadeLitros = 21;

if (tipoCombustivel === 1 && quantidadeLitros <= 20) {
    descontoPorLitro = precoAlcol - (precoAlcol * 3 / 100);
    valorFinal = descontoPorLitro * quantidadeLitros;
    console.log(valorFinal);
} else if (tipoCombustivel === 1 && quantidadeLitros >= 25) {
    descontoPorLitro = precoAlcol - (precoAlcol * 5 / 100);
    valorFinal = descontoPorLitro * quantidadeLitros;
    console.log(valorFinal);
} else if (tipoCombustivel === 2 && quantidadeLitros <= 20) {
    descontoPorLitroGas = precoGasolina - (precoGasolina * 4 / 100);
    valorFinalGas = descontoPorLitroGas * quantidadeLitros;
    console.log(valorFinalGas);
} else if (tipoCombustivel === 2 && quantidadeLitros > 20) {
    descontoPorLitroGas = precoGasolina - (precoGasolina * 6 / 100);
    valorFinalGas = descontoPorLitroGas * quantidadeLitros;
    console.log(valorFinalGas);
}