function escrevaMeuNome(nome) {
    return 'meu nome é ' + nome;
} 

function verificarIdade(idade){
    if(idade >= 18) {
        console.log(escrevaMeuNome('Felipe') + ' é Maior de Idade')
    } else {
        console.log('Menor de Idade')
    }
}

verificarIdade(18); 