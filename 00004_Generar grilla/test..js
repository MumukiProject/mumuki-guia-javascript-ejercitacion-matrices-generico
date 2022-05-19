it(`Si hacemos generarGrilla(2, 3, [1, 2]) debería retornar una matriz con 2 filas`, function(){
  let resultado = generarGrilla(2, 3, [1, 2])
  assert.equal(resultado.length, 2,`generarGrilla debería retornar una matriz con 2 filas pero fue ${resultado.length}`);
})

it(`Si hacemos generarGrilla(2, 3, [1, 2]) debería retornar una matriz con 3 columnas`, function(){
  let resultado = generarGrilla(2, 3, [1, 2])
  assert.equal(resultado[0].length,3,`generarGrilla debería retornar una matriz con 3 columnas pero fue ${resultado[0].length}`);
})

it(`Si hacemos generarGrilla(6, 5, [2, 4, 8]) debería retornar una matriz con 6 filas`, function(){
  let resultado = generarGrilla(6, 5, [2, 4, 8])
  assert.equal(resultado.length, 6,`generarGrilla debería retornar una matriz con 6 filas pero fue ${resultado.length}`);
})

it(`Si hacemos generarGrilla(6, 5, [2, 4, 8]) debería retornar una matriz con 5 columnas`, function(){
  let resultado = generarGrilla(6, 5, [2, 4, 8])
  assert.equal(resultado[0].length,5,`generarGrilla debería retornar una matriz con 5 columnas pero fue ${resultado[0].length}`);
})

it(`Si hacemos generarGrilla(8, 7, [2, 5, 7]) 2 veces seguidas debería retornas matrices distintas`, function(){
  let resultado1 = generarGrilla(8, 7, [2, 5, 7]);
  let resultado2 = generarGrilla(8, 7, [2, 5, 7]);
  assert.notDeepEqual(resultado1, resultado2);
})

it(`Si hacemos generarGrilla(2, 3, [1, 2]) debería retornar una matriz con elementos de [1, 2]`, function(){
  let resultado = generarGrilla(2, 3, [1, 2]);
  assert(pertenecenA(resultado, [1,2]), "Se encontraron elementos en la matriz que no pertenecen al array items");
})

function pertenecenA(matriz, lista) {
  let filas = matriz.length;
  let columnas = matriz[0].length;
  for(let fila = 0; fila < filas; fila++){
    for(let columna = 0; columna < columnas; columna++){
      if(!lista.includes(matriz[fila][columna])) {
        return false;
      }
    }
  }
  return true;
}