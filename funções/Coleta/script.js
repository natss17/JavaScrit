function mostrarNome() { 
    let nome = document.getElementById("nome").value
    let mensagem = document.getElementById("mensagem") 
    mensagem.innerText = "Oi," + nome
}