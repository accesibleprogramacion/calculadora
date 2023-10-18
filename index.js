const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

document.addEventListener('keydown', function(event) {
    const teclaInput = event.key;
    if (esTeclaPermitidaNumero(teclaInput)) {
        display.agregarNumero(teclaInput);
    }else if(esTeclaPermitidaOperador(teclaInput)){        
        const signos = {
            '*': 'multiplicar',
            '+': 'sumar',
            '-': 'restar',
            '/': 'dividir',
            'Enter': 'igual'
        }       
        display.computar(signos[teclaInput]);
    }else if(teclaInput === 'Backspace'){
        display.borrar();
    }else if(teclaInput === 'Escape'){
        display.borrarTodo();
    }   
});

function esTeclaPermitidaNumero(tecla) {
    const teclasPermitidasNumeros = Array.from(botonesNumeros).map(boton => boton.textContent);
    return teclasPermitidasNumeros.includes(tecla);

    
}

function esTeclaPermitidaOperador(tecla) {    
    const teclasPermitidasOperadores = Array.from(botonesOperadores).map(boton => boton.textContent);    
    return teclasPermitidasOperadores.includes(tecla);
}

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});