//Ordenamiento de un arreglo: Crea un arreglo de números desordenados y luego ordénalo de menor 
//a mayor utilizando algún algoritmo de ordenamiento (p. ej., el método sort()).

function ordenarArreglo(arreglo) {
    return String(arreglo.sort((a, b) => a - b));
}

console.log(ordenarArreglo([5, 3, 8, 1, 2]));
