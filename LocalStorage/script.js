// QUANDO CARREGAR A PÁGINA, MOSTRAR O QUE JÁ ESTAVA SALVO
window.onload = function() {
    const textoSalvo = localStorage.getItem("minhaanotacao")
    if (textoSalvo) {
      document.getElementById("anotacao").value = textoSalvo
    }
  }
  
  // SALVAR QUANDO CLICAR NO BOTÃO
  function salvarAnotacao() {
    const conteudo = document.getElementById("anotacao").value
    localStorage.setItem("minhaanotacao", conteudo)
    alert("Nota salva com sucesso")
  }