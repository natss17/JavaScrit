// // JAVASCRIPT
// let texto = document.getElementById("Texto")
// function mudarTexto(){
//     texto.innerText = "Texto Alterado"
// }
// function mudarCor () {
// texto.style.color = "red" 
// document.body.style.backgroundColor = "blue" 
// }
// function trocarFundo (){
//     let campo = document.getElementById ("campo")
//     document.campo.style.backgroundColor = "yellow"
// }
// let imagem = document.getElementById("imagem")
// function troca(){
//     imagem.src = "dog2.jpg"
// }
// function destroca(){
//     imagem.src = "dog1.jpg"
// }
// let mensagem = document.getElementById("mensagem")
// function outroText(){
//     mensagem.innerText = "Texto Alterado"
// }
// function voltaTexto (){
//     mensagem.innerText = "Passe o mouse aqui"
// }
// function aparece() {
//     let sumir = document.getElementById("sumir")
//     if (sumir.style.display == "none"){
//         sumir.style.display = "block"
//     } else {
//         sumir.style.display = "none"
//     }
// }
// function aleatorio(){
//     let tamanho = document.getElementById("tamanho")
//     let novoTamanho = Math.floor(Math.random()* (40 - 10 + 1)) + 10 //entre 10px e 40 px 
//     tamanho.style.fonttSize = novoTamanho + "px"
// }
// // ex 1 lista 
// function toggleImage() {
//     var img = document.getElementById("minhaImagem")
//     img.style.display = (img.style.display === "none") ? "block" : "none"
// }

// 02 
// function toggleTheme() {
//     var body = document.body
//     if (body.style.backgroundColor === "black") {
//         body.style.backgroundColor = "white"
//         body.style.color = "black"
//     } else {
//         body.style.backgroundColor = "black"
//         body.style.color = "white"
//     }
// }
 
//03
// function completarTexto() {
//     var texto = document.getElementById("texto")
//     texto.innerHTML = "Meu nome é Nathalia Mariana, tenho 17 anos, moro em Suzano, estudo no SENAI e faço o curso de DESENVOLVIMENTO DE SISTEMAS."
// }

// 04 
let cores = ["green", "yellow", "blue"]
let indiceCor = 0

function trocarCor() {
    let texto = document.getElementById("texto")
    texto.style.color = cores[indiceCor]
    indiceCor = (indiceCor + 1) % cores.length
}

// 05 
function naoClique() {
    alert("Pare de clicar no botão!")
}

