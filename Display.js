class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.valorAnterior = '';
        this.valorActual = ''; 
        this.calculadora = new Calculadora();
        this.tipoDeCalculo = undefined;
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: 'x',
            dividir: '%',
        }
    }

    borrarTodo() {
        this.valorAnterior = '';
        this.valorActual = '';
        this.tipoDeCalculo = undefined;
        this.imprimirValores();
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoDeCalculo !== 'igual' && this.calcular();
        this.tipoDeCalculo = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior ;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${ this.signos[this.tipoDeCalculo] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorAnterior) || isNaN(valorActual)) return;
        this.valorActual = this.calculadora[this.tipoDeCalculo](valorAnterior, valorActual);
    }
}