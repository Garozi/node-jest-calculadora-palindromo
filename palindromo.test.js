const ePalindromo = require('./palindromo');

test('palavra "arara" é palíndromo', () => {
    expect(ePalindromo('arara')).toBe(true);
});

test('palavra "casa" não é palíndromo', () => {
    expect(ePalindromo('casa')).toBe(false);
});

test('string vazia é palíndromo', () => {
    expect(ePalindromo('')).toBe(true);
});
