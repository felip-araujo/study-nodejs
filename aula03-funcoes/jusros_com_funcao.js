

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));

}


function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaDePagmento = 4;



if (formaDePagmento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagmento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagmento === 3) {
    console.log(precoEtiqueta)
} else if (formaDePagmento === 4) {
    console.log(aplicarJuros(precoEtiqueta, 10))
} else {
    console.log('Selecione uma Opção ente 1 e 4')
}



