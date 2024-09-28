function calculadora(a, b, operacao) {
    switch (operacao) {
        case 'soma':
            return a + b;
        case 'subtracao':
            return a - b;
        case 'multiplicacao':
            return a * b;
        case 'divisao':
            if (b === 0) throw new Error('Divisão por zero não é permitida');
            return a / b;
        default:
            throw new Error('Operação inválida');
    }
}

module.exports = calculadora;
    