// Cada pergunta tem:
// - A pergunta
// - as opções
// - a alternativa certa (começa no 0)
const perguntas = [
    {
        pergunta: "Qual o nome da nossa escola?",
        opcoes: ["Luis Eulalio de Bueno Vidigal Filho", "Luis Eulalio", "Luis de Bueno", "Luis Eulalio de Vidigal"],
        correta: 0,
    },
    {
        pergunta: "Qual o nome do nosso curso?",
            pergunta: "Qual o nome do nosso curso?",
            opcoes: ["Analise e Desenvolvimento de Sistemas", "Sistemas de informação", "Desenvolvimento de sistemas", "Ciência da Computação"],
            correta: 2,
    },
    {
            pergunta: "Em que ano foi fundada a nossa escola?",
            opcoes: ["1999", "1942", "1985", "1970"],
            correta: 1,
    },
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