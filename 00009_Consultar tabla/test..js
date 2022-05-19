it(`Si hacemos consultarTabla(2, 'nombre', tabla) debería retornar 'Grace'`, function() {
  let resultado = consultarTabla(2, 'nombre', [
  ['id', 'nombre', 'edad', 'email'],
  [1, 'Ada', 33, 'ada@gmail.com'],
  [2, 'Grace', 45, 'grace@gmail.com'],
])
  assert.equal(resultado, 'Grace',`consultarTabla debería retornar 'Grace' pero fue ${resultado}`);
})

it(`Si hacemos consultarTabla(1, 'email', tabla) debería retornar 'Grace'`, function() {
  let resultado = consultarTabla(1, 'email', [
  ['id', 'nombre', 'edad', 'email'],
  [1, 'Ada', 33, 'ada@gmail.com'],
  [2, 'Grace', 45, 'grace@gmail.com'],
])
  assert.equal(resultado, 'ada@gmail.com',`consultarTabla debería retornar 'ada@gmail.com' pero fue ${resultado}`);
})