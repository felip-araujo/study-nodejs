// 1- Crie uma classe para reppresentar carros. 

// 2- Os Carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado. 

// 3- Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso. 



class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor; 
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularViagem(kmPercorrido, valorCombustivel){ 
        return kmPercorrido * this.gastoMedioPorKm * valorCombustivel; 
        
    }
}

const voyage = new Carros('Volkswagen', 'Preto', 1/11.6);
const palio = new Carros('Fiat', 'Cinza', 1/9);


console.log(voyage.calcularViagem(5.7, 6.30 ));


