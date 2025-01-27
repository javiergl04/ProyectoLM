// Canvas

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var jugar = document.getElementById("jugar");

// Variables juego

var temp = 3;
var tamanyo = 5;
var death_counter = 0;
var puntuacion = 0;
var puntuacionMuerte = 0;


// Código

function Muerte(){
    if(puntuacionMuerte >= 5){
        puntuacion = 0;
        death_counter++;
    }
}

jugar.addEventListener('click', dibujaCirculo);

function dibujaCirculo()
{
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    var x = Math.random() * canvas.clientWidth;
    var y = Math.random() * canvas.clientHeight;

    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2* Math.PI);
    ctx.stroke();
}



