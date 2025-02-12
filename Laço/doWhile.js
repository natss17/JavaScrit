// let contador = 0
// let contador1 = 0
// while (contador != 5){
// //verifica primeiro, executa depois 
//     console.log("while", contador)
//     contador++
// }
// do { //executa primeiro, verifica depois
//     console.log("do while", contador1)
//     contador1 ++
// }while (contador1 != 5)


// // segundo exemplo
// let  numero = 5 
// do {
//     console.log(numero)
//     numero -= 2
// } while (contador >= 0)

//     // terceiro exemplo
//     let idade = prompt ("Qual a sua idade")
//     do {
//         if (idade > 0){
//             console.log("Idade valida")
//         }
//     else { 
//     console.log("Idade Invalida")
//     }
//     idade = prompt ("Qual sua idade")
// } while ( idade >= 0 )

//01
// let contador = 1
// do {
//     console.log(contador)
//     contador++
// } while (contador <= 20)

// // 02
// let resposta
// do {
//     resposta = prompt("deseja continuar? s ou n")
// } while (resposta === "s")
// console.log("programa finalizado.")

//  03
// let sequencia = prompt ("insira um número para definir o final da sequência:")
// let numero = 1
// do {
//     console.log(numero)
//     numero++
// } while (numero <= sequencia)


// 04
// let number = 1
// do {
//     console.log(number)
//     number += 2
// } while (number <= 31)


//05
let num = 0
do {
    let numero = prompt("Digite um número:")
    if (numero > 0) {
        console.log("NÚMERO POSITIVO")
    } else if (numero < 0) {
        console.log("NÚMERO NEGATIVO")
    } else {
        console.log("O NÚMERO É ZERO")
    }
    num++
} while (num < 5)


//06
let continuar = 's'
do {
    let numero1 = prompt("digite o primeiro número:")
    let numero2 = prompt("digite o segundo número:")
    let soma = (numero1) + (numero2)
    console.log("a soma é:", soma)
    continuar = prompt("Você deseja fazer outra conta? (s para continuar)")
} while (continuar === 's')