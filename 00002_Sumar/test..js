it("Si hacemos sumar([[4, 5],[2, 7, 1],[8, 10],]) debería retornar 37", function() {
  let resultado = sumar([[4, 5],[2, 7, 1],[8, 10],])
  assert.equal(resultado, 37,`La suma debería retornar 37 pero fue ${resultado}`);
})

it("Si hacemos sumar([[19, 5, 22],[21, 3, 24, 4],] debería retornar 98", function() {
  let resultado = sumar([[19, 5, 22],[21, 3, 24, 4],]) 
  assert.equal(resultado, 98,`La suma debería retornar 98 pero fue ${resultado}`);
})