import Display from './Display.js';

const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach((boton) => {
	boton.addEventListener('click', () =>
		display.agregarNumero(boton.innerHTML)
	);
});

botonesOperadores.forEach((boton) => {
	boton.addEventListener('click', () => display.computar(boton.value));
});

const btnBorrarTodo = document.querySelector('[data-func="borrar-todo"]');
btnBorrarTodo.addEventListener('click', () => display.borrarTodo());

const btnBorrar = document.querySelector('[data-func="borrar"]');
btnBorrar.addEventListener('click', () => display.borrar());
