//Elementos del HTML
document.getElementById("btn_lugar").addEventListener("click", barra_lugares);
document.getElementById("btn_gente").addEventListener("click", barra_personas);
document.getElementById("btn_lugar_barra").addEventListener("click", barra_lugares);
document.getElementById("btn_gente_barra").addEventListener("click", barra_personas);
document.getElementById("salir_barra").addEventListener("click", salir_barra);
document.getElementById("btn_buscar_barra").addEventListener("click", salir_barra);

//Variables
var barra = document.querySelector(".container_barra");
var barra_salir = document.querySelector(".salir_barra");
var lugares = document.querySelector(".lugares");
var cantidad_personas = document.querySelector(".gente");

//Desplegar barra por boton lugares
function barra_lugares(){
    cantidad_personas.style.display = "none";
    barra.style.display = "block"; 
    lugares.style.display = "block";
    barra_salir.style.display = "block";
}

//Desplegar barra por boton personas
function barra_personas(){
    lugares.style.display = "none";
    barra.style.display = "block"; 
    cantidad_personas.style.display = "block";
    barra_salir.style.display = "block";
}

//Ocultar barra
function salir_barra(){
    barra.style.display = "none";
    barra_salir.style.display = "none";
}



