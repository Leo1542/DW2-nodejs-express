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