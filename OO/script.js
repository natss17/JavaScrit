// oo -> script.js
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

const aluno1 = new Pessoa("Juliana", 24)
// aluno1.apresentar();

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca 
        this.modelo = modelo 
        this.ano = ano
    }

    exibirInfo() {
        console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`)
    }
}

const meuCarro = new Carro("Hyundai", "HB20", 2023)
// meuCarro.exibirInfo()

class Aluno {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
    }

    verificarAprovacao() {
        if (this.nota >= 6) {
            console.log(`${this.nome} foi aprovado`)
        } else {
            console.log(`${this.nome} foi reprovado`)
        }
    }
}

const aluno = new Aluno('João', 7)
aluno.verificarAprovacao()

const aluno2 = new Aluno('Maria', 5)
aluno2.verificarAprovacao()



//lista de exercicios - Orientação a Objeto 01

class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }
    mostrarDetalhes() {
        console.log(`Título: ${this.titulo}`) 
        console.log(`Autor: ${this.autor}`)
        console.log(`Páginas: ${this.paginas}`)
    }
}

// Exemplo de uso
const livro = new Livro("Se Não Eu, Quem Vai Fazer Você feliz?: Minha História De Amor Com Chorão", 262 )
livro.mostrarDetalhes()

// 02
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    sacar(valor) {
        this.saldo -= valor
    }

    verSaldo () {
        console.log(`${this.titular} tem ${this.saldo}`)
    }
}

const Conta = new ContaBancaria("Nathalia", 1000)

Conta.verSaldo()
Conta.depositar(200)
Conta.verSaldo()
Conta.sacar(100)
Conta.verSaldo()
