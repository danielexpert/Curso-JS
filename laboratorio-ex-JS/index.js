let musicas = [
    {titulo:'Guitar solo', artista:'João Tinti', src:'sound/Here it Comes - TrackTribe.mp3', img:'img/rock.jpg'},
    {titulo:'Samba raiz', artista:'Bossa Nova Brasil', src:'musicas/Ella Vater - The Mini Vandals.mp3', img:'img/carro.jpg'},
    {titulo:'Música piano', artista:'John Green', src:'musicas/A Brand New Start - TrackTribe (1).mp3', img:'img/bob.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;


let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

//duracaoMusica.index.length = segundosParaMinutos(Math.floor(musica.duration));

//eventos
document.querySelector('#botao-play').addEventListener('click', tocarMusica);
document.querySelector('#botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//funcoes
function tocarMusica(){
    musica.play();
    document.querySelector('#botao-pause').style.display = 'block';
    document.querySelector('#botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('#botao-pause').style.display = 'none';
    document.querySelector('#botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}