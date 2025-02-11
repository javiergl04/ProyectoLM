// Variables

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var jugar = document.getElementById("jugar");
var botonfacil = document.getElementById("dificultad1")
var botonnormal = document.getElementById("dificultad2")
var botondificil = document.getElementById("dificultad3")
var botonpesadilla = document.getElementById("dificultad4")
var colorDificultad;

//textos menu
var puntosText = document.getElementById("puntosText")
var muertesText = document.getElementById("muerteText")
var dificultadText = document.getElementById("dificultadText")
dificultadText.textContent = "Dificultad: Normal";
puntosText.textContent = "Puntos: 0";
muertesText.textContent = "Muertes: 0";

var circulo = {

    x: 0,
    y: 0,
    radio: 50
};

// Variables juego

var temp;
var tamanyo = 50;
var death_counter = 0;
var puntuacion = 0;
var puntuacionMuerte = 0;

var dificultad = 1000;


botonfacil.addEventListener('click', function(){
    dificultad = 1000;
    tamanyo = 70;
    dificultadText.textContent = "Dificultad: Fácil"; 
    colorDificultad = "cyan";
})

botonnormal.addEventListener('click', function(){
    dificultad = 700;
    tamanyo = 50;
    dificultadText.textContent = "Dificultad: Normal";
    colorDificultad = "lightgreen";
})

botondificil.addEventListener('click', function(){
    dificultad = 300;
    tamanyo = 30;
    dificultadText.textContent = "Dificultad: Dificil";
    colorDificultad = "red";
})

botonpesadilla.addEventListener('click', function(){
    dificultad = 180;
    tamanyo = 20;
    dificultadText.textContent = "Dificultad: Pesadilla";
    colorDificultad = "black";
})




// Código funciones

function Muerte()
{
    puntuacion = 0;
    puntuacionMuerte = 0;
    death_counter++;
    console.log("H A S   M U E R TO");
    dejarDibujar();
    muertesText.textContent = "Muertes: " +death_counter;
    puntosText.textContent = "Puntos: 0";
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
    ctx.fillStyle = colorDificultad;

    ctx.beginPath();
    ctx.arc(x, y, tamanyo, 0, 2* Math.PI);
    ctx.fill();
    ctx.stroke();
}

canvas.addEventListener('click', detectaClick);

// Animaciones

function animacionCirculo()
{

    function animar()
    {
        ctx.clearRect(circulo.x - circulo.radio -2, 
            circulo.y - circulo.radio - 2, circulo.radio * 2 + 4, 
            circulo.radio * 2 + 4);

        if(circulo.radio > 0)
        {
            circulo.radio -= 1;

            ctx.fillStyle = colorDificultad;
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.arc(circulo.x, circulo.y, circulo.radio, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();

            requestAnimationFrame(animar);

        }
        else
        {
            circulo.radio = tamanyo;
            dibujaCirculo();
        }

    }

    animar();


}

// Diseño canvas

function detectaClick()
{

    var mouseX = event.offsetX;
    var mouseY = event.offsetY;

    var distancia = Math.sqrt(Math.pow(mouseX - circulo.x, 2) + Math.pow(mouseY - circulo.y, 2));

    if(distancia <= circulo.radio)
    {
        puntuacion++;
        puntosText.textContent = "Puntos: " + puntuacion;
        animacionCirculo();
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

