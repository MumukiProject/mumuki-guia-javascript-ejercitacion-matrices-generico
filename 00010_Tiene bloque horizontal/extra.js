function tieneBloque(array)/*<elipsis-for-student@*/{
  let indice = 0
  for(let element of array){
    if(element === array[indice -1] && element === array [indice -2]){
      return true
    }
    indice += 1
  }
  return false 
}/*@elipsis-for-student>*/