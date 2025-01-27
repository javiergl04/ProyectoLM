// Variables

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var jugar = document.getElementById("jugar");
var botonfacil = document.getElementById("dificultad1")
var botonnormal = document.getElementById("dificultad2")
var botondificil = document.getElementById("dificultad3")
var botonpesadilla = document.getElementById("dificultad4")

var circulo = {

    x: 0,
    y: 0,
    radio: 50
};

// Variables juego

var temp = 3;
var tamanyo = 50;
var death_counter;
var puntuacion;
var puntuacionMuerte;


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

    circulo.x = x;
    circulo.y = y;
    
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.arc(x, y, tamanyo, 0, 2* Math.PI);
    ctx.stroke();
}


