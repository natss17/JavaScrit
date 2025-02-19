let amigos = ["João", "Maria", "José", "Ana", "Pedro", "Elisa", "Carlos", "Camila", "Mariana", "Rodrigo"]

console.log(amigos[0])

for (let i = 0; i < amigos.length; i++) {
    console.log(amigos[i])
}
console.log("adicionando ao fim da lista")
amigos.push("João")
amigos.shift()
console.log(amigos)

console.log("remova o último da lista")
amigos.pop()
console.log(amigos)

console.log("adicionando ao início da lista")
amigos.shift()
console.log(amigos)





//  01-
let filmes = ["O Senhor dos Anéis", "Matrix", "Inception"]
console.log(filmes[0])

// Exercicios 2

let frutas = ["Banana", "Maçã", "Morango", "Uva", "Pera"]
console.log(frutas[2])

// Exercicios 3

let cores = ["Vermelho", "Azul", "Verde"]
cores.push("Amarelo")

for(let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}

// Exercicios 4

let numeros = [1, 2, 3, 4]
console.log("remove o último da lista")
numeros.pop()
console.log(numeros)

// Exercicios 5

let cidades = ["São Paulo", "Rio de Janeiro", "Curitiba"]

console.log(cidades[0])

cidades.unshift("Porto Alegre")
console.log(cidades)

for(let i = 0; i < cidades.length; i++) {
    console.log(cidades[i])
}

// Exercicios 6

let animais = ["Cachorro", "Gato", "Pássaro"]
animais.shift()

for(let i = 0; i < animais.length; i++) {
    console.log(animais[i])
}

