it(`Si hacemos consultarTabla(2, 'nombre', tabla) debería retornar 'Gaby'`, function() {
  let resultado = consultarTabla(2, 'nombre', [
  ['id', 'nombre', 'edad', 'email'],
  [1, 'Ale', 33, 'ale@gmail.com'],
  [2, 'Gaby', 45, 'gaby@gmail.com'],
])
  assert.equal(resultado, 'Gaby',`consultarTabla debería retornar 'Gaby' pero fue ${resultado}`);
})

it(`Si hacemos consultarTabla(1, 'email', tabla) debería retornar 'Gaby'`, function() {
  let resultado = consultarTabla(1, 'email', [
  ['id', 'nombre', 'edad', 'email'],
  [1, 'Ale', 33, 'ale@gmail.com'],
  [2, 'Gaby', 45, 'gaby@gmail.com'],
])
  assert.equal(resultado, 'ale@gmail.com',`consultarTabla debería retornar 'ale@gmail.com' pero fue ${resultado}`);
})