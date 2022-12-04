let teclas = {
    UP: 38,
    RIGHT: 39,
    LEFT: 37,
    DOWN: 40
}

let ratonDOWN = new Image()
ratonDOWN.src = "./raton.png"
let ratonRIGHT = new Image()
ratonRIGHT.src = "./raton-der.png"
let ratonLEFT = new Image()
ratonLEFT.src = "./raton-izq.png"
let ratonUP = new Image()
ratonUP.src = "./raton-arr.png"
let fondo = new Image(window.innerWidth, window.innerHeight)
fondo.src = "fondoLaberinto.png"
let queso = new Image(window.innerWidth, window.innerHeight)
queso.src = "queso.png"
let xraton = 10
let yraton = 140
let x = 10
let y = 150
let movimiento = 10
let lienzo = document.getElementById("lienzo") //la funcion de abajo hace k el canvas ocupe los pixeles de la pantalla al cargarse
let papel = lienzo.getContext("2d")
let random
let xqueso
let yqueso 

function pantallaCompleta() {
    lienzo.style.width = window.innerWidth + "px"
    lienzo.style.height = window.innerHeight + "px"

    console.log('Untitled.es - Ancho de la pantalla: ' + window.innerWidth)
    console.log('Untitled.es - Alto de la pantalla: ' + window.innerHeight)
}
pantallaCompleta()

function aleatorio(min, max)
{
    var posicion
    // console.log ("maxmin" + max + '-' + min)
    posicion = Math.floor(Math.random() * ((max - min + 1) + min))
    // console.log ('posicion=' + posicion)
    return posicion
}

function dibujar()
{
    papel.drawImage(fondo, 0, 0)          
}

function dibujarQueso()
{
    xqueso = aleatorio (0, 290)
    yqueso = aleatorio (0, 290)
    papel.drawImage(queso, xqueso, yqueso)    
}

onload = function onload () 
{ 
    dibujar() 
    papel.drawImage (ratonRIGHT, xraton, yraton)
    dibujarQueso()
}

function comido()
{
    if ((xraton + 20 > xqueso) && (xraton - 20 < xqueso) && ((yraton + 20 > yqueso) && (yraton - 20 < yqueso))) 
    {
        console.log("comido")
        dibujarQueso()
    }
}

function mover(evento)
{
    if (evento.keyCode == teclas.RIGHT){
        dibujar() 
        xraton = xraton + movimiento
        papel.drawImage (ratonRIGHT, xraton, yraton)
    }

    if (evento.keyCode == teclas.UP){
        dibujar() 

        if (yraton < 10){
            yraton = yraton
        }
        else {
            yraton = yraton - movimiento
        }
        papel.drawImage (ratonUP, xraton, yraton)
    }
        
    if (evento.keyCode == teclas.DOWN){
        dibujar() 
        yraton = yraton + movimiento
        papel.drawImage(ratonDOWN, xraton, yraton)
    }
        
    if (evento.keyCode == teclas.LEFT){
        dibujar() 

        if (xraton < 10){
            xraton = xraton
        }
        else {
            xraton = xraton - movimiento
        }
        papel.drawImage (ratonLEFT, xraton, yraton)
    }
    console.log("xraton " + xraton + " yraton " + yraton)
    console.log("xqueso " + xqueso + " yqueso " + yqueso)
    comido()
    papel.drawImage(queso, xqueso, yqueso)
}
       
document.addEventListener("keydown", mover)  