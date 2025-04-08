// 1 - Mudar a cor de um texto
let botaoMudarCorTexto = document.getElementById("botaoMudarCorTexto");
let paragrafo1 = document.getElementById("paragrafo1");

botaoMudarCorTexto.addEventListener("click", function() {
    paragrafo1.style.color = "green";
});

// 2 - Mudar a cor de um botão
let botaoMudarCorBotao = document.getElementById("botaoMudarCorBotao");

botaoMudarCorBotao.addEventListener("click", function() {
    botaoMudarCorBotao.style.backgroundColor = "purple";
});

// 3 - Aumentar a Fonte de um Texto ao Clicar Duas Vezes
let paragrafo2 = document.getElementById("paragrafo2");

paragrafo2.addEventListener("dblclick", function() {
    paragrafo2.style.fontSize = "24px";
});

// 4 - Efeito Hover em um Bloco de Texto
let blocoTexto = document.getElementById("blocoTexto");

blocoTexto.addEventListener("mouseover", function() {
    blocoTexto.style.backgroundColor = "blue";
});

blocoTexto.addEventListener("mouseout", function() {
    blocoTexto.style.backgroundColor = "";
});

// 5 - Aumentando uma imagem
let botaoAumentarImagem = document.getElementById("botaoAumentarImagem");
let imagem1 = document.getElementById("imagem1");

botaoAumentarImagem.addEventListener("click", function() {
    imagem1.style.width = "200px";
    imagem1.style.height = "200px";
});

// 6 - Arredondando uma imagem
let botaoArredondarImagem = document.getElementById("botaoArredondarImagem");
let imagem2 = document.getElementById("imagem2");

botaoArredondarImagem.addEventListener("click", function() {
    imagem2.style.borderRadius = "50%";
});

// 7 - Várias alterações
let botaoAlterarParagrafo1 = document.getElementById("botaoAlterarParagrafo1");
let botaoAlterarParagrafo2 = document.getElementById("botaoAlterarParagrafo2");
let botaoAlterarParagrafo3 = document.getElementById("botaoAlterarParagrafo3");
let paragrafo3 = document.getElementById("paragrafo3");
let paragrafo4 = document.getElementById("paragrafo4");
let paragrafo5 = document.getElementById("paragrafo5");

botaoAlterarParagrafo1.addEventListener("click", function() {
    paragrafo3.style.backgroundColor = "lightblue";
    paragrafo3.style.color = "red";
});

botaoAlterarParagrafo2.addEventListener("click", function() {
    paragrafo4.style.backgroundColor = "lightgreen";
    paragrafo4.style.color = "blue";
    paragrafo4.style.fontSize = "20px";
});

botaoAlterarParagrafo3.addEventListener("click", function() {
    paragrafo5.style.backgroundColor = "lightyellow";
    paragrafo5.style.color = "purple";
    paragrafo5.style.fontSize = "22px";
    paragrafo5.style.borderRadius = "10px";
});