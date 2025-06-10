let numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativas = 0
const maxTentativas = 10
let palpitesAnteriores = []

const inputPalpite = document.getElementById('palpite')
const botaoTentar = document.getElementById('botaoTentar')
const botaoReiniciar = document.getElementById('botaoReiniciar')
const divMensagem = document.getElementById('mensagem')
const divHistorico = document.getElementById('historico')
const imagemBerloque = document.querySelector('.imagem-berloque')

botaoTentar.addEventListener('click', () => {
  const palpite = Number(inputPalpite.value)

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    divMensagem.textContent = "🚫 Charme inválido! Escolha um número entre 1 e 100."
    return
  }

  tentativas++
  palpitesAnteriores.push(palpite)
  atualizarHistorico()

  if (palpite === numeroSecreto) {
    divMensagem.textContent = `💖 Você encontrou o pingente secreto da Pandora com ${tentativas} tentativa(s)! Brilho eterno! ✨`
    imagemBerloque.style.display = 'block'
    encerrarJogo()
  } else if (tentativas >= maxTentativas) {
    divMensagem.textContent = `💔 Suas tentativas se esgotaram! O encanto sumiu no vento... O número era ${numeroSecreto}.`
    encerrarJogo()
  } else if (palpite < numeroSecreto) {
    divMensagem.textContent = `🔮 O encanto está mais alto... tente um número maior! (${tentativas}/10)`
  } else {
    divMensagem.textContent = `🔒 O pingente está escondido em um número menor... tente de novo! (${tentativas}/10)`
  }

  inputPalpite.value = ''
  inputPalpite.focus()
})

botaoReiniciar.addEventListener('click', reiniciarJogo)

function encerrarJogo() {
  inputPalpite.disabled = true
  botaoTentar.disabled = true
  botaoReiniciar.style.display = 'inline-block'
}

function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1
  tentativas = 0
  palpitesAnteriores = []
  inputPalpite.disabled = false
  botaoTentar.disabled = false
  botaoReiniciar.style.display = 'none'
  divMensagem.textContent = ''
  divHistorico.textContent = ''
  imagemBerloque.style.display = 'none'
  inputPalpite.value = ''
  inputPalpite.focus()
  console.log("🔄 Novo número secreto:", numeroSecreto)
}

function atualizarHistorico() {
  divHistorico.innerHTML = `
    <strong>😲 Tentativas anteriores:</strong>
    ${palpitesAnteriores.join(' • ')}
  `
}
