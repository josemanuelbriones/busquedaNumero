let numeroSecreto = generarNumeroSecreto();
let numeroIntentos = 0;
function asignarTexto(etiqueta, texto) {
    let parrafo = document.querySelector(etiqueta);
    parrafo.innerHTML = texto;

}

function intentoDeUsiario() {
    let numeroUsuario = document.getElementById('numeroUsuario').value;
    if (numeroUsuario == numeroSecreto) {
        asignarTexto('p', `¡Felicidades! Has adivinado el numero secreto ${numeroSecreto} en ${numeroIntentos} intentos.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario < numeroSecreto && numeroUsuario >= 1 && numeroUsuario <= 10) {
            asignarTexto('p', 'El numero secreto es mayor');
            
        } else if (numeroUsuario > numeroSecreto && numeroUsuario <= 10) {
            asignarTexto('p', 'El numero secreto es menor');
            
        } else {
            asignarTexto('p', 'Por favor, ingresa un numero valido');
        }
        limpiarCaja()
    }
    numeroIntentos++;
}
function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = '';

}

function reiniciarJuego() {
    location.reload();

}
asignarTexto('h1', 'Juego del numero secreto');
asignarTexto('p', 'Escoje un numero del 1 al 10');