const nome = "diego";

var cor = "azul";
var cor = "Amarelo";
let cidade = "Registro";
cidade = "Jacupiranga";

const message = "Hello, world! iniciando em JS!";
console.log(message);

console.log(typeof cidade);

////////////tipos de funções no JS
function minhaFuncao() {}
console.log(typeof minhaFuncao);

function saudacao() {
  console.log("Olá, bem vindo!");
}

saudacao();

// funcao com parametro / argumento

function Saudacao(nome) {
  console.log("Olá, bem vindo " + nome);

  console.log(`Olá, bem vindo ${nome}`);
}

Saudacao("Leo");

// funcao com 2 parametros

function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois números foi ${resultado}`);
}

soma(5, 5);

function Soma(n1, n2) {}

//funcao arrow

const Dobro = (x) => {
  return x * 2;
};
console.log(`Função dobro com arrow function ${Dobro(20)}`);

//ARROW FUNCTION COM MAIS DE UM PARAMETRO
const Brunao = (num1,operador,num2) => {
    return eval(`${num1} ${operador} ${num2}`)
}
console.log(`Operações ${Brunao(5,'+',5)}`)

// SIMPLIFICANDO ARROW FUNCTION
const brunao = (num1,operador,num2) => eval(`${num1} ${operador} ${num2}`)

console.log(`Operações ${brunao(6,'+',6)}`)

// IIFE - IMEMEDIATLY INVOKED FUNCTION EXPRESSION
// FUNCAO IMEDIATA - ULTIMA \O/
const iife = (function(){
    console.log("Estou sendo executada imediatamento")
})();

