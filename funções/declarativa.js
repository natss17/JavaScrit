// // SEM PARAMETRO
// function mostrarMensagem(){
//     console.log("Olá")
// }

// mostrarMensagem() //usamos isso para chamar a função 


// function contarAteTres (){
//     for (let i = 1; i <= 3; i ++) {
//         console.log (i)
//     }
// }
// contarAteTres()

// //COM PARAMETRO
// function somar (a,b) {
//     let resultado = a + b
//     return resultado
// }
// console.log(somar(3,7))
// console.log (somar(10,3))
// console.log(somar(8,125))

// function aoQuadrado(numero) {
//     let quadrado = numero * numero 
//     return quadrado
// }
// console.log(aoQuadrado (5))


// lista de exercicip 01 
function JavaScript() {
    console.log("eeu gosto de JavaScript")
}

JavaScript();

// 02 
function contarAteCinco() {
    for (let i = 1; i <= 5; i++) {
        console.log(i)
    }
}

contarAteCinco();

// 3 

function saudacao() {
    let nome = prompt ("digite seu nome!")
    console.log("Olaa", + nome + "!seja bem-vindo(a)!")
}

saudacao()
 
// 04
function multiplicarDoisNumeros() {
    console.log(5 * 3)
}

multiplicarDoisNumeros()

// 5 
function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}

verificarIdade(18)

// 6 
function somar(a, b) {
    return a + b
}

console.log(somar(10, 5))

// 7 
function calcularAreaRetangulo(largura, altura) {
    return largura * altura
}

console.log(calcularAreaRetangulo(5, 10))

// 8
function compararIdade(idade1, idade2) {
    if (idade1 > idade2) {
        return "A primeira pessoa é mais velha."
    } else if (idade1 < idade2) {
        return "a segunda pessoa é mais velha."
    } else {
        return "Ass duas pessoas têm a mesma idade."
    }
}

console.log(compararIdade(25, 30))
