function conversaoSalarial(salarioReal){
    const salarioDolar = salarioReal*0.176
    const salarioEuro = salarioReal*0.16

    console.log(salario.toLocaleString("pt-br", {style: "currency", currency: "BRL"}))
    console.log(salarioDolar.toLocaleString("en", {style: "currency", currency: "USD"}))
    console.log(salarioEuro.toLocaleString("en", {style: "currency", currency: "EUR"}))
}

salario = 1600

conversaoSalarial(salario)