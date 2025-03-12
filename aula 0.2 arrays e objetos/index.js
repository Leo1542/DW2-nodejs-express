let produtos = [];

let Produtos = ["computador", "notebook", "celular", "tablet"]

console.log(Produtos)

console.log("Exibindo a lista pelos indices...")

for(let c in Produtos){
    console.log(`${Number(c) + 1} - ${Produtos[c]}`)
}

console.log("Exibindo lista atraves do for each")
    Produtos.forEach(function(Produtos){
        console.log(Produtos)
    })


    console.log("Exibindo lista atraves do for each - arrow")
    Produtos.forEach((Produtos) => {
        console.log(Produtos)
    })

    //METODOS DE MANIPULAÇÃO DE VETORES
    let vetor = ["laranja", "Maça", "Banana"]
    console.log("O nosso vetor é o: " + vetor)
    vetor[3] = "Morango"
    console.log("Nosso vetor agora é o: " + vetor)

    //METODO PUSH - INSERE UM NOVO ELEMENTO NO FINAL DO VETOR
    vetor.push("Abacaxi");
    console.log("Nosso vetor agora é o: " + vetor)

    //METODO UNSHIT - INSIRE NOVO ELEMENTO NO INICIO DO VETOR
    vetor.unshift("Laranja")
    console.log("Nosso vetor agora é o: " + vetor)

    //METODO LENGHT - RETORNA O NUMERO DE ELEMENTOS DO VETOR
    let numeros = [2,4,5,6,1,9]
    console.log("Nossa lista de numeros é " + numeros)
    console.log("O numero de elementos do vetor é " + numeros.length)

    //METODO SORT - ORDENAR O VETOR
    console.log("O numero de elementos do vetor é " + vetor[0])
    