it("Si hacemos obtenerNumeroMayor([[2, 7, 12, 1],[8, 23],[9, 45, 7],[22, 3, 24, 4],])  debería retornar 45", function() {
  let resultado = obtenerNumeroMayor([[2, 7, 12, 1],[8, 23],[9, 45, 7],[22, 3, 24, 4],]) 
  assert.equal(resultado, 45,`obtenerNumeroMayor([[2, 7, 12, 1],[8, 23],[9, 45, 7],[22, 3, 24, 4],])  debería retornar 45 pero fue ${resultado}`);
})

it("Si hacemos obtenerNumeroMayor([[2, 7, 12, 1],[8, 37],[19, 5, 22],[21, 3, 24, 4],]) debería retornar 37", function() {
  let resultado = obtenerNumeroMayor([[2, 7, 12, 1],[8, 37],[19, 5, 22],[21, 3, 24, 4],]) 
  assert.equal(resultado, 37,`obtenerNumeroMayor([[2, 7, 12, 1],[8, 37],[19, 5, 22],[21, 3, 24, 4],]) debería retornar 37 pero fue ${resultado}`);
})
