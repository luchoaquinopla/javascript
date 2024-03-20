const celular = require('../src/Celular'); // Cambiado a minúscula

test('Celular', () => {
    const celularObj = new celular('Samsung', 'Blanco', 'A22'); // Cambiado a minúscula
    expect(celularObj.getMarca()).toBe('Samsung'); // Cambiado a minúscula
    expect(celularObj.getModelo()).toBe('A22'); // Cambiado a minúscula
    expect(celularObj.getColor()).toBe('Blanco'); // Cambiado a minúscula
})