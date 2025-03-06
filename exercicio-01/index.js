//Função Simples
function simples(){
    console.log("Nome: Leonardo \nIdade: 22 \nCidade: Registro-sp")
}
simples()

//Função com parâmetros
function parametros(n1,n2){
    console.log("\nO resultado da divisão é: " + n1/n2)
}
parametros(10,2)

//Função com retorno
function retorno(num1,num2,num3){
    return num1*num2*num3
}
console.log("\nResultado da multiplicação: " + retorno(2,2,2))

//Função com mais de um retorno
function doisRetornos(idade){
    if (idade >= 18){
        console.log("\nMaior de idade")
    }else {
        console.log("\nMenor de idade")
    }
}
doisRetornos(15)

//Função anônima
let anonima = function(nota1, nota2){
    let media = (nota1 + nota2) / 2;
    if (media <= 5){
        console.log("\nSua media eh: " + media +"Reprovado")
    }else {
        console.log("\nSua media eh: " + media + " - Aprovado")
    }
}
anonima(5,8)

//Arrow function
const arrow = (numero) => numero*3 
console.log("\nO triplo do numéro eh: " + arrow(5))

//Arrow function
const arrowMaisUmParamentro = (numero1,numero2,numero3,numero4) => numero1+numero2+numero3+numero4 
console.log("\nSoma dos quatro numeros: " + arrowMaisUmParamentro(5,8,5,2))

//Funcção iife
const iife = (function(){
    console.log("\nLeonardo")
})();