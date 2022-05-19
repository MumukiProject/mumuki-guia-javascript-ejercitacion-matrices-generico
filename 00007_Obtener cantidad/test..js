it(`Si hacemos obtenerCantidad('🍎', [
  ['🍎', '🍏', '🍌', '🍌'],
  ['🍌', '🍎'],
  ['🍎', '🍏', '🍌'],
  ['🍏', '🍌', '🍎', '🍌'],
]) debería retornar 4`, function() {
  let resultado = obtenerCantidad('🍎', [
  ['🍎', '🍏', '🍌', '🍌'],
  ['🍌', '🍎'],
  ['🍎', '🍏', '🍌'],
  ['🍏', '🍌', '🍎', '🍌'],
])
  assert.equal(resultado, 4,`obtenerCantidad debería retornar 4 pero fue ${resultado}`);
})


it(`Si hacemos obtenerCantidad('🍌', [
  ['🍎', '🍏', '🍌', '🍌'],
  ['🍌', '🍎'],
  ['🍎', '🍏', '🍌'],
  ['🍏', '🍌', '🍎', '🍌'],
]) debería retornar 6`, function() {
  let resultado = obtenerCantidad('🍌', [
  ['🍎', '🍏', '🍌', '🍌'],
  ['🍌', '🍎'],
  ['🍎', '🍏', '🍌'],
  ['🍏', '🍌', '🍎', '🍌'],
])
  assert.equal(resultado, 6,`obtenerCantidad debería retornar 6 pero fue ${resultado}`);
})