// /* 
// - Calcule o IMC 

// Formula do IMC: 
// IMC = peso / (altura * altura)

// Elabore um algoritimo que dado o peso e a altura de um adulto
// mostre sua condição de a cordo com a tabela abaixo

// IMC em adultos: 

// - Abaixo de 18.5 | Abaixo do peso; 
// - Entre 18.5 e 25 | Peso Normal; 
// - Entre 25 e 30 | Acima do Peso; 
// - Entre 30 e 40 | Obeso; 
// - Acima de 40 | Obesidade Grave; 

// */ 


// function calcularIMC (peso, altura) {
//     return imc = peso / Math.pow(altura,2); 
// }

// const peso = 80.00; 
// const altura = 1.75; 

// const imc = calcularIMC(peso, altura); 
// console

// // if (imc < 18.5) {
// //     console.log('Abaixo do peso')
// // } else if (imc >= 18.5 && imc < 25){
// //     console.log('Peso Normal')
// // } else if (imc >= 25 && imc < 30) {
// //     console.log('Acima do Peso')
// // } else if (imc > 30 && imc < 40) {
// //     console.log('Obeso')
// // } else {
// //     console.log('Obesidade Grave')
// // }


function escrevaMeuNome(nome) {
    return ('Meu nome é ' + nome);
}

function verficarIdade(idade){
    if(idade >= 18){
        console.log(escrevaMeuNome('Felipe') + ' sou Maior de Idade')
    } else{
        console.log('Menor')
    }
}

verficarIdade(18); 