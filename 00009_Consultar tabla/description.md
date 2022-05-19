Tenemos una matriz que tiene la estructura de una tabla , en donde el primer array contiene el nombre de las columnas, y los siguientes array son las filas donde se ingresan los registros con sus datos en el orden de las columnas.
Por ejemplo, si el índice `1` es la columna `nombre` todas las demás "filas" deben tener el dato nombre en esa posición. La tabla siempre tiene una columna `id`, que es un identificador único para cada registro (un número incremental).


```javascript
const tabla = [
  ['id', 'nombre', 'edad', 'email'],
  [1, 'Ada', 33, 'ada@gmail.com'],
  [2, 'Grace', 45, 'grace@gmail.com'],
]
```
>  Definí la función `consultarTabla`que tome por parámetro un número `id`, un string `columna`, y una matriz `tabla` y que retorne el valor del dato de la columna dada para el registro con el `id` indicado.
>
```javascript
ム consultarTabla(2, 'nombre', tabla)
'Grace'
ム consultarTabla(1, 'email', tabla)
'ada@gmail.com'
```
