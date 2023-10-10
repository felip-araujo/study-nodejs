function calcularValores(){
    let primeiroValor = document.getElementById('primeiroValor').value;
    let segundoValor = document.getElementById('segundoValor').value;
    porcentagem = primeiroValor * segundoValor / 100;  
    valorFinal = segundoValor - porcentagem; 
    alert(`o valor da porcentagem é de R\$:${porcentagem} e o valor final com desconto é de R\$: ${valorFinal}`);
}


function calcularJuros() {
    let porcentagemJuros = document.getElementById('porcentagemJuros').value;
    let valorProduto = document.getElementById('valorProduto').value;

    valordoJuros = parseInt(porcentagemJuros) * parseInt(valorProduto) / 100; 
    valorFinal = parseInt(valorProduto) + parseInt(valordoJuros);

    alert('Valor do Juros: ' + valordoJuros + ' Valor Final: ' + valorFinal);
}

 