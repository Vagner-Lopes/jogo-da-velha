let jogador = "x"
let jogadorDaVez = document.getElementById('jogador-selecionado')
let vencedor = document.getElementById('vencedor-selecionado')
let celulas = document.getElementsByClassName('celula')
let pontosX = document.getElementById('pontosX')
let pontosO = document.getElementById('pontosO')
const botao = document.getElementById('botao')

let tabuleiro = ['-', '-', '-', '-', '-', '-', '-', '-', '-',]
const sequenciasGanhadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
let game_over = false
let contX = 0
let contO = 0


function controlaPontos(jogador) {
    if (jogador == "x") {
        contX++
    } else {
        contO++
    }
    // nomeia vencedor
    vencedor.innerHTML = jogador
    // atualiza ponto na tela
    pontosX.innerHTML = contX
    pontosO.innerHTML = contO
    // pausa jogo
    game_over = true
}

function trocaJogador() {
    jogador = jogador === 'x' ? 'o' : 'x'
    jogadorDaVez.innerHTML = jogador
}

function escolherCelula(id) {

    if (tabuleiro[id] === '-' && game_over === false) {
        tabuleiro[id] = jogador
        celulas[id].innerHTML = tabuleiro[id]
        checasequenciasGanhadoras(jogador)
        trocaJogador()
    }
}

function pintaSequenciaQuanhadora(i, cor) {
    celulas[sequenciasGanhadoras[i][0]].style.background = cor
    celulas[sequenciasGanhadoras[i][1]].style.background = cor
    celulas[sequenciasGanhadoras[i][2]].style.background = cor
}

let sequenGanhadora = []
function checasequenciasGanhadoras(jogador) {
    for (let i in sequenciasGanhadoras) {
        if (tabuleiro[sequenciasGanhadoras[i][0]] == jogador &&
            tabuleiro[sequenciasGanhadoras[i][1]] == jogador &&
            tabuleiro[sequenciasGanhadoras[i][2]] == jogador) {
            sequenGanhadora = i
            pintaSequenciaQuanhadora(i, '#4c719b')
            controlaPontos(jogador)
            console.log('sequencia ganhadora' + i, jogador);
            return 1
        }
    }
}

function reiniciar() {
    for (let i in celulas) {
        celulas[i].innerHTML = '-'
        tabuleiro.fill('-')
    };
    pintaSequenciaQuanhadora(sequenGanhadora, '#ffffff')
    game_over = false
    vencedor.innerHTML = ''
    console.log('clicado');
}
botao.addEventListener('click', reiniciar)






