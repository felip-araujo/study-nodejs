const salario = 900;  

if (salario <= 280){
    percentual = (salario * 20 / 100); 
    novoSalario = percentual + salario;
    console.log('o salario antes do reajuste era de: ' + salario)
    console.log('o valor aumentado foi de: ' + percentual)
    console.log('o salario passou a ser de: ' + novoSalario) 
} else if (salario > 280 && salario <= 700 ) {
    percentual = (salario * 15 / 100); 
    novoSalario = percentual + salario; 
    console.log('o salario antes do reajuste era de: ' + salario)
    console.log('o valor aumentado foi de: ' + percentual)
    console.log('o salario passou a ser de: ' + novoSalario) 
} else if (salario > 700 && salario <= 1500){
    percentual = (salario * 15 / 100); 
    novoSalario = percentual + salario;
    console.log('o salario antes do reajuste era de: ' + salario)
    console.log('o valor aumentado foi de: ' + percentual)
    console.log('o salario passou a ser de: ' + novoSalario) 
} else if (salario > 1500) {
    percentual = (salario * 5 / 100); 
    novoSalario = percentual + salario;
    console.log('o salario antes do reajuste era de: ' + salario)
    console.log('o valor aumentado foi de: ' + percentual)
    console.log('o salario passou a ser de: ' + novoSalario) 
} 