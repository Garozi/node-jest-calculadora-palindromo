const calculadora = require('./calculadora');

test('soma de 10 e 5 deve ser 15', () => {
    expect(calculadora(10, 5, 'soma')).toBe(15);
});

test('subtração de 10 e 5 deve ser 5', () => {
    expect(calculadora(10, 5, 'subtracao')).toBe(5);
});

test('multiplicação de 10 e 5 deve ser 50', () => {
    expect(calculadora(10, 5, 'multiplicacao')).toBe(50);
});

test('divisão de 10 por 5 deve ser 2', () => {
    expect(calculadora(10, 5, 'divisao')).toBe(2);
});

test('divisão por zero deve lançar erro', () => {
    expect(() => calculadora(10, 0, 'divisao')).toThrow('Divisão por zero não é permitida');
});
