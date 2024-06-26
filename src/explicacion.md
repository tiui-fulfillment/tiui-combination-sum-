La idea inicial era generar todas las combinaciones posibles de los elementos
que estan en el array `candidates` y luego filtrar las combinaciones que sumen
el valor `target`, pero rapidamente me di cuenta que esto no era eficiente.

Al final despues de pensar un poco, me di cuenta que podia usar un algoritmo
que utilice recursividad para explorar combinaciones pero solo las que generen
la suma que buscamos o esten bastante cerca.

La idea es la siguiente:

1. Iterar sobre los elementos del array `candidates`.

2. Pensando me di cuenta que una vez que estemos buscando una combinacion
   valida iniciando desde los ultimos elementos del array, no tiene sentido
   estar buscando en los elementos anteriores ya que estos ya fueron explorados,
   ya que es lo mismo tener [1, 2, 3] que [3, 2, 1] en el array de soluciones.

3. Por lo tanto, podemos pasar el indice del elemento actual que estamos explorando
   para que la proxima iteracion empiece desde ese indice.

4. Si la suma actual es igual al objetivo, agregamos la combinacion actual a la lista
   de combinaciones finales.

5. Si la suma actual es mayor al objetivo, no seguimos explorando, y esa combinacion
   se descarta.

6. Si la suma actual es menor al objetivo, seguimos explorando con el mismo candidato
   que tenemos actualmente.

7. Despues del paso 4 y 5, regresamos al bucle principal, y quitamos el ultimo elemento
   de la combinacion actual para explorar otras combinaciones con otros candidatos.

8. Repetimos los pasos 4, 5, 6 y 7 hasta que hayamos explorado todas las combinaciones
   posibles (que el bucle principal haya terminado).

9. Al final retornamos la lista de combinaciones finales.

Los datos (variables) que necesitamos para la funcion son:

- candidates -> el array de elementos que queremos explorar.
- target -> el valor que queremos que sumen las combinaciones.
- currTotalSum -> la suma actual de la combinacion que estamos explorando.
- finalCombinations -> la lista de combinaciones finales.
- currentCombination -> la combinacion actual que estamos explorando.
- startFrom -> el indice del elemento actual que estamos explorando.

El codigo queda mas o menos de la siguiente manera:

```javascript
// Si esta condicion se cumple, indica que la combinacion actual es valida
// y la agregamos a la lista de combinaciones finales.
if (currTotalSum === target) {
  finalCombinations.push([...currentCombination]);
  return; // al retornar quitaremos el ultimo elemento de la combinacion actual
}

// Si la suma actual es mayor al objetivo, no seguimos explorando.
else if (currTotalSum > target) {
  return; // al retornar quitaremos el ultimo elemento de la combinacion actual
}

// en caso de que la suma actual sea menor al objetivo, seguimos explorando.

// Iteramos sobre los candidatos desde el indice startFrom.
for (let i = startFrom; i < candidates.length; i++) {
  // Agregamos el candidato actual a la combinacion actual.
  // esto puede tener 3 posibles resultados:
  // 1. La combinacion actual es valida y se agregara a la lista final.
  // 2. La suma actual es mayor al objetivo y no se agregara a la lista final.
  // 3. La suma actual es menor al objetivo y se seguira explorando con el
  // mismo candidato que tenemos actualmente
  currentCombination.push(candidates[i]);

  // Llamamos recursivamente a la funcion con la suma actualizada y el mismo candidato.
  // Aqui se revisa si la combinacion actual es valida.
  funcionRecursiva(
    candidates,
    target,
    currTotalSum + candidates[i],
    finalCombinations,
    currentCombination,
    i,
  );

  // Quitamos el ultimo elemento de la combinacion actual para explorar
  // otras combinaciones independientemente si la combinacion actual es
  // valida o no.
  currentCombination.pop();
}
```
