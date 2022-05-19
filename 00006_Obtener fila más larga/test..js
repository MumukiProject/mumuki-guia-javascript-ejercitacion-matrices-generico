it("Si hacemos obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]]) debería retornar [3, 7, 5]", function() {
  let resultado = obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]])
  assert.deepEqual(resultado, [3, 7, 5],`obtenerFilaMasLarga debería retornar [3, 7, 5] pero fue ${resultado}`);
})

it("Si hacemos obtenerFilaMasLarga([[1], [3, 7], [6, 8]]) debería retornar [3, 7]", function(){
  let resultado = obtenerFilaMasLarga([[1], [3, 7], [6, 8]])
  assert.deepEqual(resultado, [3, 7],`obtenerFilaMasLarga debería retornar [3, 7] pero fue ${resultado}`);
})