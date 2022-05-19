it(`Si hacemos tieneBloqueHorizontal([
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]) debería retornar false`, function() {
  let resultado = tieneBloqueHorizontal([
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
])
  assert.equal(resultado, false,`tieneBloqueHorizontal debería retornar false pero fue ${resultado}`);
})

it(`Si hacemos tieneBloqueHorizontal([
  [1, 2, 3, 4],
  [1, 2, 2, 2],
  [1, 2, 4, 5],
]) debería retornar true`, function() {
  let resultado = tieneBloqueHorizontal([
  [1, 2, 3, 4],
  [1, 2, 2, 2],
  [1, 2, 4, 5],
])
  assert.equal(resultado, true,`tieneBloqueHorizontal debería retornar true pero fue ${resultado}`);
})