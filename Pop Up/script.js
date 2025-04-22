const botaoabrirPopUp = document.getElementById("abrirPopUp");
const popup = document.getElementById("popup");
const fundo = document.getElementById("fundo");
const mensagem = document.getElementById("mensagem");

botaoabrirPopUp.addEventListener("click", function () {
  popup.classList.remove("escondido");
  fundo.classList.remove("escondido");
});
// function responder (resposta) {
//     mensagem.innerText = "Voce escolher:" + resposta;
//     popup.classList.add("escondido");
//     fundo.classList.add("escondido");
// }
function abrirHTML() {
    window.location.href = "sobre.html";
}
function abrirSite() {
    location.href = "https://www.google.com/";
}