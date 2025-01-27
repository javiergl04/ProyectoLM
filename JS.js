// Variables

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var jugar = document.getElementById("jugar");
var botonfacil = document.getElementById("dificultad1")
var botonnormal = document.getElementById("dificultad1")
var botondificil = document.getElementById("dificultad1")
var botonfacil = document.getElementById("dificultad1")

// Variables juego

var temp = 3;
var tamanyo = 50;
var death_counter = 0;
var puntuacion = 0;
var puntuacionMuerte = 0;


// Código

function Muerte(){
    if(puntuacionMuerte >= 5){
        puntuacion = 0;
        death_counter++;
        console.log("H A S   M U E R TO");
    }
}

jugar.addEventListener('click', dibujaCirculo);

function dibujaCirculo()
{
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    var x = Math.random() * (canvas.clientWidth - 2 * tamanyo) + tamanyo;
    var y = Math.random() * (canvas.clientHeight - 2 * tamanyo) + tamanyo;

    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.arc(x, y, tamanyo, 0, 2* Math.PI);
    ctx.stroke();
}

function intento(jugador)
{

}



