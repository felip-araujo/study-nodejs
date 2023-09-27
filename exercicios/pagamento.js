// /* 

//     3 -  Elabore um algorítimo que calcule o que deve ser pago por um produto, considerando o preço normal
//     e a escolha da consição de pagamento. 
//     Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo 
//     adequado. 

//     Código Condição de pagamento
//     1 - à Vista Débito, recebe 10% de desconto; 
//     2 - à vista no Dinheiro ou PIX, recebe 15% de desconto; 
//     3 - Em duas Vezes, preço normal de etiqueeta sem juros; 
//     4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10% 

// */

// const precoEtiqueta = 100;
// const formaDePagmento = 0; 

// if (formaDePagmento === 1 ) {
//     valorPago = precoEtiqueta - (precoEtiqueta * 10 / 100); 
//     console.log(valorPago); 
// } else if (formaDePagmento === 2) {
//     valorPago = precoEtiqueta - (precoEtiqueta * 15 / 100);
//     console.log(valorPago);
// } else if (formaDePagmento === 3){
//     valorPago = precoEtiqueta;  
//     valorPagoParcelas = precoEtiqueta / 2;
//     console.log('O Valor total é: ' + valorPago, ' em duas parcelas de: ' + valorPagoParcelas);
// } else if (formaDePagmento === 4) {
//     valorPago = precoEtiqueta + (precoEtiqueta * 10 / 100); 
//     valorPagoParcelas = valorPago / 3; 
//     console.log('O valor total é ' + valorPago, 'em três parcelas de: ' + valorPagoParcelas.toFixed(2));
// } else {
//     console.log('Selecione uma Opção ente 1 e 4')
// }










/* 

    3 -  Elabore um algorítimo que calcule o que deve ser pago por um produto, considerando o preço normal
    e a escolha da consição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo 
    adequado. 

    Código Condição de pagamento
    1 - à Vista Débito, recebe 10% de desconto; 
    2 - à vista no Dinheiro ou PIX, recebe 15% de desconto; 
    3 - Em duas Vezes, preço normal de etiqueeta sem juros; 
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10% 

*/

const precoEtiqueta = 100;
const formaDePagmento = 3;


function aplicarDesconto(valor, desconto) {
    return (valor - (valor * desconto / 100));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * juros / 100));
}



if (formaDePagmento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));

} else if (formaDePagmento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));

} else if (formaDePagmento === 3) {
    console.log(precoEtiqueta)

} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}


console.log(aplicarDesconto(25, 15)); 
console.log(aplicarJuros(25, 15));