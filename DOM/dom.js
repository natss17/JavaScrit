//Arqivo dom.js
let imagem = document.getElementById("imagem")

imagem.addEventListener("mouseover", function (){
    imagem.setAttribute("src", "gatu2.avif") 
})
imagem.addEventListener("mouseover", function (){
    imagem.setAttribute("src", "gatu1.webp") 
})

//--------------------------------------------------
let lista = document.getElementById("lista")
let adicionar = document.getElementById("adicionar")
let remover = document.getElementById("remover")

adicionar .addEventListener("click", function() {
    let novoItem = document.createElement("li")
    novoItem.innerText = "novo item"
    lista.appendChild(novoItem)
})
remover.addEventListener("click", function (){
    if (lista.lastChild){
        lista.removeChild(lista.lastChild)
    }
})