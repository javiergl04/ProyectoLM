// Canvas

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Variables juego

var temp = 3;
var tamanyo = 5;
var death_counter = 0;
var puntuacion = 0;
var puntuacionMuerte = 0;


// Código

function Muerte(){
    
    if(puntuacionMuerte => 5){
        puntuacion = 0;
        death_counter + 1;
        
    }
}

