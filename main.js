//JAVASCRIPT - > DATA - > MAIN.JS
let dataAtual = new Date()
console.log(dataAtual)

let dia = dataAtual.getDate()
let mes = dataAtual.getMonth()
let ano = dataAtual.getFullYear()

console.log(`${dia}/${mes + 1}/${ano}`)

let horas = dataAtual.getHours()
let minutos = dataAtual.getMinutes()

console.log(`${horas}:${minutos}`)