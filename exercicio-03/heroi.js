class heroi {
    constructor(nome, video, velocidade, forca) {
        this.nome = nome
        this.vida = video
        this.velocidade = velocidade
        this.forca = forca
    }

    correr() {
        return "Herói está correndo"
    }

    andar() {
        return "Herói esta andando"
    }

    atacar() {
        return "Herói está atacando"
    }

    defender() {
        return "Herói está defendendo"
    }
}   

const  homemAranha = new heroi()
homemAranha.nome = "Peter Parker"
homemAranha.vida = 50
homemAranha.velocidade = "50 km/h"
homemAranha.forca = "50N"
homemAranha.teia = 1
homemAranha.sentidoAranha = function(){
    return "Homem aranha detectou perigo"
}

const  superHomem = new heroi()
superHomem.nome = "Clark Kent"
superHomem.vida = 1000
superHomem.velocidade = "500km/h"
superHomem.forca = "10000000000N"
superHomem.podeVoar = 1
superHomem.visaoCalor = function(){
    return "Super Homem está usando sua visão de calor"
}

const  batman = new heroi()
batman.nome = "Bruce Wayne"
batman.vida = 30
batman.velocidade = "18 km/h"
batman.forca = "10N"
batman.esconder = 1
batman.investigar = function(){
    return "Batman está investigando"
}

console.log(homemAranha.sentidoAranha())
console.log(superHomem.visaoCalor())
console.log(batman.investigar())