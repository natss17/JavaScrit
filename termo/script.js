// Chamando os elementos do HTML
const letras = document.querySelector(".container-letras")
const linhaBackspaceEnter = document.querySelector("#linhaBackspaceEnter")
const linhaTeclado1 = document.querySelector("#linhaTeclado1")
const linhaTeclado2 = document.querySelector("#linhaTeclado2")
const linhaTeclado3 = document.querySelector("#linhaTeclado3")

// Definindo as letras de cada linha
const teclasLinha1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
const teclasLinha2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"]
const teclasLinha3 = ["Z", "X", "C", "V", "B", "N", "M"]

// Define o número de tentativas (linhas) e o tamanho das palavras (colunas)
const linhas = 6
const colunas = 5

// Variável que guarda onde o jogador está atualmente
let linhaAtual = 0
let colunaAtual = 0

// Define as palavras que podem ser
const palavrasSecretas = ["SENAI", "LIVRO", "PLANO", "NORTE", "TREVO"]
let mapaPalavra = {}
let palavraSecreta = palavrasSecretas[Math.floor(Math.random() * palavrasSecretas.length)]

for (let i = 0; i < palavraSecreta.length; i += 1) {
    mapaPalavra[palavraSecreta[i]] = i
}

// Matriz onde as tentativas serão armazenadas
const palpites = []

// Cria as linhas
for (let l = 0; l < linhas; l++) { //letra L minuscula
    palpites[l] = new Array(colunas)
    const linhasLetras = document.createElement("div")
    linhasLetras.setAttribute("id", "linha" + l)
    linhasLetras.setAttribute("class", "linha-letras")
    // Cria as colunas
    for (let c = 0; c < colunas; c++) {
        const colunaLetra = document.createElement("div")
        colunaLetra.setAttribute("id", "linha" + (l + 1) + "coluna" + c)
        colunaLetra.setAttribute("class", l === 0 ? "coluna-letra digitando" : "coluna-letra")
        linhasLetras.appendChild(colunaLetra)
        palpites[l][c] = "" //inicia vazio
    }
    // Adiciona a linha criada ao site
    letras.append(linhasLetras)
}

// Verifica se a palavra digitada está correta
function verificarPalpite() {
    // Junta as letras digitadas
    const palpite = palpites[linhaAtual].join("")

    if (palpite.length !== colunas) {
        return // Se o palpite estiver incompleto ele não verifica
    }

    // Pega a linha atual que estamos
    const colunaAtuais = document.querySelectorAll(".digitando")

    for (let i = 0; i < colunas; i++) {
        const letra = palpite[i]

        if (mapaPalavra[letra] === undefined) {
            colunaAtuais[i].classList.add("errada")
        } else if (mapaPalavra[letra] === i) {
            colunaAtuais[i].classList.add("certa")
        } else {
            colunaAtuais[i].classList.add("deslocada")
        }
    }

if (palpite === palavraSecreta) {
    window.alert("Acertou! Parabéns") //Se acertar a palavra
} else if (linhaAtual === linhas - 1) {
    // Se errar a palavra e acabar as tentativas
    window.alert("Errou")
} else {
    // Se errar a palavra mas ainda tiver tentativas
    moverParaProximaLinha()
}}

// Move para a proxima linha
function moverParaProximaLinha() {
// Remove a classe digitando
const colunaDigitando = document.querySelectorAll(".digitando")
colunaDigitando.forEach(col => {
    col.classList.remove("digitando")
})
linhaAtual += 1 //Avança para a proximo linha 
colunaAtual = 0 //Reinicia a posição da coluna 

// Adiciona a classe digitando na próxima linha
const novaLinha = document.querySelector("#linha" + linhaAtual)
const novaColunas = novaLinha.querySelectorAll(".coluna-letra")
novaColunas.forEach(col => {
    col.classList.add("digitando")
})
}

// Função que insere uma letra no palpite ao clicar na tela
function clicarTecla(tecla) {
    if (colunaAtual == colunas) {
        return //limita o número de linhas por letra
    }
    const letraAtual = document.querySelector("#linha" + (linhaAtual + 1) + "coluna" + colunaAtual)
    letraAtual.textContent = tecla // mostra a letra clicada
    palpites[linhaAtual][colunaAtual] = tecla //salva a tecla escolhida
    colunaAtual += 1 //vai para o proximo espaço
}

// Criando os botões do teclado virtual
function criarLinhaTeclado(teclas, container) {
    teclas.forEach(tecla => {
        const botao = document.createElement("button")
        botao.textContent = tecla
    })
}
// Criando os botões do teclado virtual
function criarLinhaTeclado(teclas, container) {
    teclas.forEach(tecla => {
        const botao = document.createElement("button")
        botao.textContent = tecla
        botao.setAttribute("id", tecla)
// Ao clicar adiciona a letra
        botao.addEventListener("click", () => clicarTecla(tecla))
        container.append(botao) //adiciona o botão

    })
}
// Cria as três linhas do teclado
criarLinhaTeclado(teclasLinha1, linhaTeclado1)
criarLinhaTeclado(teclasLinha2, linhaTeclado2)
criarLinhaTeclado(teclasLinha3, linhaTeclado3)

// Função para apagar a última letra digitada
function apagarLetra() {
    if (colunaAtual === 0) {
        return // Se tiver no primeiro bloquinho da linha, não vai apagar nada
    }
    colunaAtual -= 1
    palpites[linhaAtual][colunaAtual] = "" //remove a letra
    const letra = document.querySelector("#linha" + (linhaAtual + 1) + "coluna" + colunaAtual)
    letra.textContent = ""
}

// Cria o botão de apagar "<"
const botaoApagar = document.createElement("button")
botaoApagar.textContent = "<"
botaoApagar.addEventListener("click", apagarLetra) //quando clica apaga
linhaBackspaceEnter.appendChild(botaoApagar) //adiciona na tela

// Cria o botão do Enter
const botaoEnter = document.createElement("button")
botaoEnter.textContent = "Enter"
botaoEnter.addEventListener("click", verificarPalpite) //quando clica verifica
linhaBackspaceEnter.appendChild(botaoEnter) //adiciona na tela

// Permite digitação pelo teclado fisico
document.onkeydown = function(evt) {
    if (evt.key === "Enter") {
        verificarPalpite()
    } else if (evt.key === "Backspace") {
        apagarLetra()
    } else {
        clicarTecla(evt.key.toUpperCase())
    }
}