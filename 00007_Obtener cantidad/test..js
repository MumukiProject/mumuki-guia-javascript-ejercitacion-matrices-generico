it(`Si hacemos obtenerCantidad('π', [
  ['π', 'π', 'π', 'π'],
  ['π', 'π'],
  ['π', 'π', 'π'],
  ['π', 'π', 'π', 'π'],
]) deberΓ­a retornar 4`, function() {
  let resultado = obtenerCantidad('π', [
  ['π', 'π', 'π', 'π'],
  ['π', 'π'],
  ['π', 'π', 'π'],
  ['π', 'π', 'π', 'π'],
])
  assert.equal(resultado, 4,`obtenerCantidad deberΓ­a retornar 4 pero fue ${resultado}`);
})


it(`Si hacemos obtenerCantidad('π', [
  ['π', 'π', 'π', 'π'],
  ['π', 'π'],
  ['π', 'π', 'π'],
  ['π', 'π', 'π', 'π'],
]) deberΓ­a retornar 6`, function() {
  let resultado = obtenerCantidad('π', [
  ['π', 'π', 'π', 'π'],
  ['π', 'π'],
  ['π', 'π', 'π'],
  ['π', 'π', 'π', 'π'],
])
  assert.equal(resultado, 6,`obtenerCantidad deberΓ­a retornar 6 pero fue ${resultado}`);
})