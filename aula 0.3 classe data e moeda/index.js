// CLASSES NO JS
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    buzinar() {
        return "Va devagar pae"
    }
}

const carroPopular = new Carro("Fiat", "Argo", "2020")
console.log(`O carro ${carroPopular.marca} modelo ${carroPopular.modelo} ano ${carroPopular.ano} e faz ${carroPopular.buzinar()}`)

const carroEsportivo = new Carro()
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Corsa love"
carroEsportivo.ano = "2002"

console.log(`O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} ano ${carroEsportivo.ano} e faz ${carroEsportivo.buzinar()}`)

//ADICIONANDO UM NOVO ATRIBUTO
carroEsportivo.corNeon = "Azul"

//ADICIONANDO UM NOVO MÉTODO
carroEsportivo.turbo = function(){
    return "Fiaaaaaaaaaaaaaaaaaaaaaaaaaum"
}

console.log(carroEsportivo)

///////////////////////////////////////
const dataAtual = new Date()
console.log(typeof(dataAtual))

// Pegando o dia atual
const dia = dataAtual.getDate()
console.log(`Hoje é dia ${dia}`)

//Pegando o mês atual
const mes = dataAtual.getMonth()+1
console.log(`Estamos no mês ${mes}`)

// Pegando o ano atual
const ano = dataAtual.getFullYear()
console.log(`Ano atual: ${ano}`)

//ADICIONANDO DIAS, MESES E ANOS A DATA ATUAL
// Adicionar 10 dias a data atual
dataAtual.setDate(dataAtual.getDate() + 10)

// Exibe a nova data:
console.log(`Daqui a 10 dias será dia ${dataAtual.getDate()}`);

// Adicionar 3 meses a data atual:
dataAtual.setMonth(dataAtual.getMonth() + 3)

// Exibe a nova data:
console.log(`Daqui a 3 meses será mês ${dataAtual.getMonth()}`)

// Adicionar 2 anos á data atual
dataAtual.setFullYear(dataAtual.getFullYear() + 2)

// Exibe o novo ano
console.log(`Daqui a 2 anos sera ${dataAtual.getFullYear()}`)

/////////////////////////////////////
// TRABALHANDO COM MOEDAS NO JAVASCRIPT

let salario = 2500.30
console.log(salario)
//Mostrando as casas decimais
console.log(salario.toFixed(2))
//Ocultando as casas decimais
console.log(salario.toFixed(0))
//Alterar marcador de casa decimal
console.log(salario.toFixed(2).replace('.', ','))

//Formatação de moedas
//Mostrando o salario em real
console.log(salario.toLocaleString("pt-br", {style: "currency", currency: "BRL"}))

//CONVERTENDO REAL PARA DOLAR
const salarioDolar = salario * 0.178

console.log(salarioDolar.toLocaleString("pt-br", {style: "currency", currency: "BRL"}))

//////////////////////////////////////FORMATAÇÃO DE STRING
const nome = "Diego Max"

//ALTERNANDO PARA LETRAS MAIUSCULAS
console.log(nome.toLocaleUpperCase())

//ALTERNANDO PARA LETRAS MINUSCULAS
console.log(nome.toLowerCase())

//CONTANDO CARACTERES DE UMA STRING
console.log(nome.length())