// Array
let musicas = [
    {titulo: 'Bop Walker', artista: 'Joca Tilt', src: 'musicas/Bop Walker - Freedom Trail Studio.mp3', img: 'imagens/audience-gcd1fb57fc_640.jpg'},
    {titulo: 'Dusty Rhymes', artista: 'Noob Saibot', src: 'musicas/Dusty Rhymes - Freedom Trail Studio.mp3', img: 'imagens/bass-guitar-g5a8153af0_640.jpg'},
    {titulo: 'Heal You', artista: 'Rouge', src: 'musicas/Heal You - Freedom Trail Studio.mp3', img: 'imagens/drummer-g0ec8a44fe_640.jpg'},
    {titulo: 'Metaheuristic', artista: 'Jurask Panda', src: 'musicas/Metaheuristic - Freedom Trail Studio.mp3', img: 'imagens/guitar-gb82e988a8_640.jpg'}
]

let indexMusica = 0

// Referência
let musica = document.querySelector('audio')
let duracaoMusica = document.querySelector('.fim')
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')

renderizarMusica(indexMusica)

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica)
document.querySelector('.botao-pause').addEventListener('click', pausarMusica)
musica.addEventListener('timeupdate', atualizarBarra)
document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--
    if (indexMusica < 0) {
        indexMusica = 3
    }
    renderizarMusica(indexMusica)
})
document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++
    if (indexMusica > 3) {
        indexMusica = 0
    }
    renderizarMusica(indexMusica)
})

// Funções
function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo
        nomeArtista.textContent = musicas[index].artista
        imagem.src = musicas[index].img
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
    })
}

function tocarMusica() {
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block'
    document.querySelector('.botao-play').style.display = 'none'
}

function pausarMusica() {
    musica.pause()
    document.querySelector('.botao-pause').style.display = 'none'
    document.querySelector('.botao-play').style.display = 'block'
}

function atualizarBarra() {
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }
    return campoMinutos + ':' + campoSegundos
}

