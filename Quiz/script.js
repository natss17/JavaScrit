const perguntas = [ 
    { 
      pergunta: "Qual é o continente onde se localiza o Brasil?", 
      opcoes: ["América", "Europa", "Ásia", "África"], 
      correta: 0, 
    }, 
    { 
      pergunta: "Quem foi o responsável por descobrir o Brasil em 1500?", 
      opcoes: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Dom Pedro I", "Tiradentes"], 
      correta: 1, 
    }, 
    { 
      pergunta: "Qual é o principal idioma falado no Brasil?", 
      opcoes: ["Espanhol", "Inglês", "Português", "Francês"], 
      correta: 2, 
    }, 
    { 
      pergunta: "O que marca a abolição da escravidão no Brasil?", 
      opcoes: ["Constituição de 1824", "Independência do Brasil", "Lei Áurea", "Revolta da Vacina"], 
      correta: 2, 
    }, 
    { 
      pergunta: "Qual é o sistema de governo do Brasil?", 
      opcoes: ["República", "Monarquia", "Ditadura", "Império"], 
      correta: 0, 
    }, 
    { 
      pergunta: "Qual é a capital do Brasil?", 
      opcoes: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], 
      correta: 2, 
    }, 
    { 
      pergunta: "Em qual continente está localizada a África do Sul?", 
      opcoes: ["África", "América do Norte", "Europa", "Ásia"], 
      correta: 0, 
    }, 
    { 
      pergunta: "Qual é o maior país do mundo em extensão territorial?", 
      opcoes: ["Estados Unidos", "Brasil", "China", "Rússia"], 
      correta: 3, 
    }, 
    { 
      pergunta: "Quem liderou o movimento da independência dos Estados Unidos?", 
      opcoes: ["Napoleão Bonaparte", "George Washington", "Abraham Lincoln", "Simon Bolívar"], 
      correta: 1, 
    }, 
    { 
      pergunta: "O que estuda a Geografia?", 
      opcoes: ["Os planetas e estrelas", "A terra, os espaços e paisagens", "A história dos deuses", "As línguas e palavras"], 
      correta: 1, 
    } 
  ]
  

// variáveis para controlar o quiz
let perguntaAtual = 0 //Qual pergunta está sendo mostrada
let pontuacao = 0 //Quantidade dos acertos
let erros = 0 //Quantidade dos erros
let opcaoSelecionada = null //Qual opção o usuário selecionou

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

// função que atualiza o placar 
function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}

// função que mostra a pergunta atual
function mostrarPergunta() {
    //Pega a pergunta atual
    const perguntaAtualObj = perguntas[perguntaAtual]
    // Mostra o texto da pergunta
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.innerHTML = "" //limpa as opções anteriores
    // Cria um botão para cada opção de resposta
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", () => selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true //desabilita o botão de proxima
}

// Para quando o usuário escolher uma opção
function selecionarOpcao(indice) {
    opcaoSelecionada = indice
    // Atualiza o visual da opção selecionada
    const botoesOpcoes = document.querySelectorAll(".opcao")
    botoesOpcoes.forEach((botaoOpcao, i) => {
        botaoOpcao.classList.toggle("selecionada", i === indice)
    })
    botaoProxima.disabled = false //habilita o botão de proxima

}
function mostrarPontuacao() {
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}
// Função para ir para a próxima pergunta
botaoProxima.addEventListener("click", () => {
    // Verifica se a resposta está correta
    if (opcaoSelecionada == perguntas[perguntaAtual].correta) {
      pontuacao++
    } else {
      erros++
    }
    atualizarPlacar()

    perguntaAtual++
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta()
    }else {
        mostrarPontuacao()
    }
  })
  // Botao para reiniciar o quiz
botaoReiniciar.addEventListener("click", () => {
    // Reseta todas as variáveis
    perguntaAtual = 0
    pontuacao = 0
    erros = 0
    // O quiz aparece e a pontuação final some
    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})

// Inicia o quiz com a primeira pergunta
mostrarPergunta()