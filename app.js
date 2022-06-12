'use strict'

function respuesta_evento(){

    let nodoEntradaNumero = document.querySelector('#entradaNumero');
    console.log(nodoEntradaNumero);

    let valorEntrada = Number(nodoEntradaNumero.value);
    console.log( valorEntrada );

    let mensaje = "";

    let dolar = valorEntrada * 0.9;
    console.log( dolar +' $' );
    mensaje = dolar + " $";
    let nodoDolar = document.querySelector('.dolar');
    nodoDolar.innerHTML = "<h2>" + mensaje + "</h2>";

    let libra = valorEntrada * 1.22;
    console.log( libra +' £' );
    mensaje = libra + " £";
    let nodoLibra = document.querySelector('.libra');
    nodoLibra.innerHTML = "<h2>" + mensaje + "</h2>";


    let yen = valorEntrada * 126.89;
    console.log( yen +' ¥' );
    mensaje = yen + " ¥";
    let nodoYen = document.querySelector('.yen');
    nodoYen.innerHTML = "<h2>" + mensaje + "</h2>";
}