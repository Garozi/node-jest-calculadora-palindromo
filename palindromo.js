function ePalindromo(str) {
    const strReversa = str.split('').reverse().join('');
    return str === strReversa;
}

module.exports = ePalindromo;
