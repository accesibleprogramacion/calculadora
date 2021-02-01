const displayValorAnterior = document.querySelector('[data-valor-anterior]');
const displayValorAactual = document.querySelector('[data-valor-actual]');
const botonesNumeros = document.querySelectorAll('[data-numero]');
const botonesOperadores = document.querySelectorAll('[data-operador]');

const display = new Display(displayValorAnterior, displayValorAactual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});
