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

var temp;
var tamanyo = 50;
var death_counter;
var puntuacion = 0;
var puntuacionMuerte = 0;

var dificultad = 1000;


botonfacil.addEventListener('click', function(){
    dificultad = 1000;
    tamanyo = 70;
})

botonnormal.addEventListener('click', function(){
    dificultad = 700;
    tamanyo = 50;
})

botondificil.addEventListener('click', function(){
    dificultad = 300;
    tamanyo = 30;
})

botonpesadilla.addEventListener('click', function(){
    dificultad = 180;
    tamanyo = 20;
})

// Código funciones

function Muerte()
{
    puntuacion = 0;
    puntuacionMuerte = 0;
    death_counter++;
    console.log("H A S   M U E R TO");
    dejarDibujar();
}

jugar.addEventListener('click', dibujaCirculo);

function dibujaCirculo()
{

    // Intervalo

    clearInterval(temp);
    contador = 0;

    temp = setInterval(temporizador, dificultad);

    // Canvas

    circulo.radio = tamanyo;

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

canvas.addEventListener('click', detectaClick);

function detectaClick()
{

    var mouseX = event.offsetX;
    var mouseY = event.offsetY;

    var distancia = Math.sqrt(Math.pow(mouseX - circulo.x, 2) + Math.pow(mouseY - circulo.y, 2));

    if(distancia <= circulo.radio)
    {
        puntuacion++;
        dibujaCirculo();
    }
    else
    {
        
        puntuacionMuerte++;
        
        if(puntuacionMuerte > 5)
        {
            Muerte();
        }

    }

}

function dejarDibujar(){
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

function temporizador()
{
    contador++;

    if(contador >= 3)
    {
        clearInterval(temp);
        circulo.radio = 0;
        Muerte();
    }
}
