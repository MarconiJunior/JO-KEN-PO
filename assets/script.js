let jogadorNome;
let jogadorPontos = 0;
let jogadorEscolha = 0;

let botEscolha = 0;
let botPontos = 0;

function somarPontoJogador() {
    jogadorPontos++
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos
}

function somarPontoBot() {
    botPontos++
    document.getElementById('bot-pontos').innerHTML = botPontos
}

function sort(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function select(tipo, escolha) {
    document.getElementById(`${tipo}-escolha-${escolha}`).classList.add('selected')
}

function deselect(tipo, escolha) {
    document.getElementById(`${tipo}-escolha-${escolha}`).classList.remove('selected')
}

function text(texto) {
    document.getElementById('mensagem').innerHTML = texto
}

function definirNome(nome) {
    document.getElementById('jogador-nome').innerHTML = nome
}

function definirWinCondition(jogador, bot) {
    if (jogador === 1 && bot === 1) {
        return 0;
    } else if(jogador === 1 && bot === 2) {
        return 2;
    } else if(jogador === 1 && bot === 3) {
        return 1;
    } else if (jogador === 2 && bot === 2) {
        return 0
    } else if (jogador === 2 && bot === 1) {
        return 1;
    } else if (jogador === 2 && bot === 3) {
        return 2;
    } else if (jogador === 3 && bot === 3) {
        return 0;
    } else if (jogador === 3 && bot === 1) {
        return 2;
    } else if (jogador === 3 && bot === 2) {
        return 1;
    }
}

function play (escolha) {
    jogadorEscolha = escolha
    select('jogador', jogadorEscolha)

    botEscolha = sort(1, 3)
    select('bot', botEscolha)

    let winner = definirWinCondition(jogadorEscolha, botEscolha)

    if (winner === 0) {
        text('Empate')
    } else if(winner === 1 ) {
        text(`Ponto para ${jogadorNome}`)
        somarPontoJogador()
    } else if(winner === 2) {
        text('Ponto para Nickelback')
        somarPontoBot()
    }

    setTimeout(() => {
        deselect('jogador', jogadorEscolha)
        deselect('bot', botEscolha)
        text(`${jogadorNome}, choose an option!!!`)
    }, 1000)
}

document.getElementById('jogador-escolha-1').onclick = () => {
    play(1)
}

document.getElementById('jogador-escolha-2').onclick = () => {
    play(2)
}

document.getElementById('jogador-escolha-3').onclick = () => {
    play(3)
}

jogadorNome = window.prompt('What is your name?')
definirNome(jogadorNome)

text(`Welcome, ${jogadorNome}, are you ready? Choose an option above!`)

document.getElementById('button').addEventListener('click', () => {
    let chooseOption = confirm('You are about to restart the game!')
    if (chooseOption) {
        document.getElementById('jogador-pontos').innerHTML = '0'
        document.getElementById('bot-pontos').innerHTML = '0'
        text(`Welcome, ${jogadorNome}, are you ready? Choose an option above!`)
        jogadorPontos = 0
        botPontos = 0
    } 
})

function showConfet(id){
    const element = document.getElementById(id)
    party.confetti(element)
}

document.getElementById('button-2').addEventListener('click', () => {
    let gameOver = confirm('You are about to end the game!')
    if (gameOver) {
        if (jogadorPontos > botPontos) {
            alert(`Congratulations ${jogadorNome}! You won the game`)
            showConfet('placar')
        } else if (jogadorPontos < botPontos) {
            alert(`Congratulations Nickelpreto! You won the game`)
            showConfet('placar')
        } else {
            alert('Draw!')
        }
        document.getElementById('jogador-pontos').innerHTML = '0'
        document.getElementById('bot-pontos').innerHTML = '0'
        text(`Welcome, ${jogadorNome}, are you ready? Choose an option above!`)
        jogadorPontos = 0
        botPontos = 0
    } 
})
