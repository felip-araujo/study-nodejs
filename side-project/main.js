
function somadeRendas(){
    let rendaMensal = document.getElementById('rendaMensal').value; 
    let rendaRotativa = document.getElementById('rendaRotativa').value;

    resultado = parseInt(rendaMensal) + parseInt(rendaRotativa); 
    console.log('A sua renda Mensal é de: ' + resultado)
}   

function somaGastos(){
    let aluguel = document.getElementById('aluguel').value;
    let transporte = document.getElementById('transporte').value;
    let alimentacao = document.getElementById('alimentacao').value; 
    let agua = document.getElementById('agua').value;
    let luz = document.getElementById('luz').value;
    let gas = document.getElementById('gas').value;    
    
    resultado2 = parseInt(aluguel) + parseInt(transporte) + parseInt(alimentacao) + parseInt(agua) + parseInt(luz) + parseInt(gas); 
    console.log('A soma dos seus gastos é de: ' + resultado2);
} 

function somarGastosDispensaveis() {
    let stream = document.getElementById('stream').value;
    let lazer = document.getElementById('lazer').value;

    resultado3 = parseInt(stream) + parseInt(lazer); 
    console.log('Os seus gastos dispensáveis são: ' + resultado3)
}

function credito(){ 
    let cartao = document.getElementById('cartao').value;
    let financiamento = document.getElementById('financiamento').value;

    resultado4 = parseInt(cartao) + parseInt(financiamento); 

    console.log ('Os valores relacionados a crédito são: ' + resultado4); 

}

function rendaMenosGastos() {
    resto = resultado - resultado2 - resultado3 - resultado4; 
    alert('Sobram R$'+ resto + ' do seu salário') 
} 