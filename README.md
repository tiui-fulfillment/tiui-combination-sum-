
# tiui-combination-sum - Problema de suma combinada

En Tiui Soluciones, estamos en la búsqueda del mejor talento para unirse a nuestro equipo. Esta prueba tiene como objetivo medir tus habilidades en JavaScript y ver cómo puedes resolver los desafíos propuestos. ¡Demuestra tus capacidades y sé parte de un equipo innovador y dinámico!

Dado un conjunto de números candidatos (candidatos) (sin duplicados) y un número objetivo (objetivo), encuentra todas las combinaciones únicas en candidatos donde los números candidatos suman al objetivo.

Se puede elegir el mismo número repetido de candidatos un número ilimitado de veces.

**Nota:**

Todos los números (incluido el objetivo) serán enteros positivos.
El conjunto de soluciones no debe contener combinaciones duplicadas.

## Ejemplo
```
Input: candidates = [2,3,6,7], target = 7,

A solution set is:
[
  [7],
  [2,2,3]
]
```
```
Input: candidates = [2,3,5], target = 8,

A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

## Instalación
```
npm install
```

## Test
```
npm run test
```

## RETO
Crea una función que encuentre todas las combinaciones específicas sumando los números candidatos para obtener el número objetivo.

## Respuesta del reto

Suponiendo que el arreglo está ordenado (todos los casos de ejemplo lo están), se hace una función recursiva que toma el primer elemento, lo pone en un array y calcula qué complemento necesita para que al sumarse el resultado sea target. Después de eso nuevamente empieza a recorrer el array buscando combinaciones que den el complemento (ya no el target). Cuando el complemento es 0, la combinación da target así que se agrega a un array combinations y se continúa eliminando el último elemento (algo así como mirar rama por rama qué sirve). Si el elemento que sigue es mayor al complemento necesario, se descarta esa suma y todas las que siguen, porque al ser todas mayores, ninguna dará la suma. Cuando ya se hayan explorado o descartado todas las ramas, se retorna el array con las combinaciones posibles, y para evitar repeticiones, se buscan sumas siempre hacia adelante del array, nunca hacia atrás (esto funciona porque también se supone que el array de candidatos no tiene números repetidos)

## Enviar solución de reto
Debes hacer un "Fork" de este proyecto, resolver los problemas y crear un Pull Request hacia este repositorio.

## Únete a Nosotros
En Tiui Soluciones, valoramos la creatividad, la innovación y el espíritu de colaboración. Si te apasiona la tecnología y quieres formar parte de un equipo que está transformando la logística, ¡queremos conocerte!

## Licencia
tiui-combination-sum se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
