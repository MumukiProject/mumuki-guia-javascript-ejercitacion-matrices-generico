it("Si hacemos esMatrizCuadrada([[4, 5],[2, 7, 1],[8, 10],]) debería retornar false", function(){
  let resultado = esMatrizCuadrada([[4, 5],[2, 7, 1],[8, 10],])
  assert.equal(resultado, false,`esMatrizCuadrada debería retornar false pero fue ${resultado}`);
})

it("Si hacemos esMatrizCuadrada([[4, 5, 9],[2, 7, 1],[8, 10, 5],]) debería retornar true", function(){
  let resultado = esMatrizCuadrada([[4, 5, 9],[2, 7, 1],[8, 10, 5],]) 
  assert.equal(resultado, true,`esMatrizCuadrada debería retornar true pero fue ${resultado}`);
})