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

