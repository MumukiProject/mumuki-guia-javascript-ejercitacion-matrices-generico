it("Si hacemos convertirEnMatriz(2, [1, 2, 3, 4]) debería retornar [[1, 2], [3, 4]]", function() {
  let resultado = convertirEnMatriz(2, [1, 2, 3, 4])
  assert.deepEqual(resultado, [[1, 2], [3, 4]],`convertirEnMatriz debería retornar [[1, 2], [3, 4]] pero fue ${resultado}`);
})

it("Si hacemos convertirEnMatriz(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) debería retornar [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11]]", function() {
  let resultado = convertirEnMatriz(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  assert.deepEqual(resultado, [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11]],`convertirEnMatriz debería retornar [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11]] pero fue ${resultado}`);
})