let botonContacto = document.getElementById("contacto"); 
let botonHabilidades = document.getElementById("habilidades");
let botonExperiencias = document.getElementById("experiencias");
let botonIdiomas = document.getElementById("idiomas");
let botonEducacion = document.getElementById("educacion");
let botonInformatica = document.getElementById("informatica");
let infoContacto = document.getElementById("contenedorContacto");
let infoHabilidades = document.getElementById("contenedorHabilidades");
let infoExperiencias = document.getElementById("contenedorExperiencias");
let infoIdiomas = document.getElementById("contenedorIdiomas");
let infoEducacion = document.getElementById("contenedorEducacion");
let infoInformatica = document.getElementById("contenedorInformatica");
botonContacto.addEventListener("click",verContacto);
botonHabilidades.addEventListener("click",verHabilidades);
botonExperiencias.addEventListener("click",verExperiencias);
botonIdiomas.addEventListener("click",verIdiomas);
botonEducacion.addEventListener("click",verEducacion);
botonInformatica.addEventListener("click",verInformatica);

function verContacto(){
    infoInformatica.style.visibility="hidden";
    infoEducacion.style.visibility="hidden";
    infoHabilidades.style.visibility="hidden";
    infoExperiencias.style.visibility="hidden";
    infoIdiomas.style.visibility="hidden";
    infoContacto.style.visibility="visible";
}

function verHabilidades(){
    infoInformatica.style.visibility="hidden";
    infoEducacion.style.visibility="hidden";
    infoIdiomas.style.visibility="hidden";
    infoExperiencias.style.visibility="hidden";
    infoContacto.style.visibility="hidden";
    infoHabilidades.style.visibility="visible";
}

function verExperiencias(){
    infoInformatica.style.visibility="hidden";
    infoEducacion.style.visibility="hidden";
    infoIdiomas.style.visibility="hidden";
    infoContacto.style.visibility="hidden";
    infoHabilidades.style.visibility="hidden";
    infoExperiencias.style.visibility="visible";
}

function verIdiomas(){
    infoInformatica.style.visibility="hidden";
    infoEducacion.style.visibility="hidden";
    infoExperiencias.style.visibility="hidden";
    infoContacto.style.visibility="hidden";
    infoHabilidades.style.visibility="hidden";
    infoIdiomas.style.visibility="visible";
}

function verEducacion(){
    infoInformatica.style.visibility="hidden";
    infoIdiomas.style.visibility="hidden";
    infoExperiencias.style.visibility="hidden";
    infoContacto.style.visibility="hidden";
    infoHabilidades.style.visibility="hidden";
    infoEducacion.style.visibility="visible";
}

function verInformatica(){
    infoEducacion.style.visibility="hidden";
    infoIdiomas.style.visibility="hidden";
    infoExperiencias.style.visibility="hidden";
    infoContacto.style.visibility="hidden";
    infoHabilidades.style.visibility="hidden";
    infoInformatica.style.visibility="visible";
}