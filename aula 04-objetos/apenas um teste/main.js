function calcularValores(){
    let primeiroValor = document.getElementById('primeiroValor').value;
    let segundoValor = document.getElementById('segundoValor').value;
    porcentagem = primeiroValor * segundoValor / 100;  
    valorFinal = segundoValor - porcentagem; 
    alert('o valor da porcentagem é: ' + porcentagem)
    alert('o valor final é: ' + valorFinal); 
}
