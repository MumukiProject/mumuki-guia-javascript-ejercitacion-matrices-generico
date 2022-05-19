it(`Si hacemos generarMatrizEscalonada(3) debería retornar  [
    [0], 
    [0, 0], 
    [0, 0, 0]
  ] `, function() {
  let resultado = generarMatrizEscalonada(3)
  assert.deepEqual(resultado,  [
    [0], 
    [0, 0], 
    [0, 0, 0]
  ] ,`generarMatrizEscalonada debería retornar  [
    [0], 
    [0, 0], 
    [0, 0, 0]
  ]  pero fue ${resultado}`);
})

it(`Si hacemos generarMatrizEscalonada(5) debería retornar [
    [0], 
    [0, 0], 
    [0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0, 0]
  ] `, function() {
  let resultado = generarMatrizEscalonada(5)  
  assert.deepEqual(resultado, [
    [0], 
    [0, 0], 
    [0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0, 0]
  ] ,`generarMatrizEscalonada debería retornar [
    [0], 
    [0, 0], 
    [0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0, 0]
  ]  pero fue ${resultado}`);
})