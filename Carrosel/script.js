const container = document.querySelector('.container')
const botaoAnterior = document.querySelector('.botao-anterior')
const botaoProximo = document.querySelector('.botao-proximo')
let indiceAtual = 0
let idIntervalo

function atualizarCarrosel() {
    container.style.transform = `translateX(-${indiceAtual * 33.33}%)`
}
function proximaImagem() {
    idiceAtual = (indiceAtual + 1) % 3
    atualizarCarrosel()
}
function iniciarCarrossel() {
    idIntervalo = setInterval(proximaImagem, 5000)
}
iniciarCarrossel() // Executa automaticamente 

botaoAnterior.addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + 3) % 3
atualizarCarrosel()
})

botaoProximo.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % 3
    atualizarCarrosel()
})