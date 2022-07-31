// El presidente de la república ha decidido estimular a todos los estudiantes
// de una universidad mediante la asignación de becas mensuales, para esto
// se tomarán en consideración los siguientes criterios:

// Para alumnos mayores de 18 años 
// con promedio mayor o igual a 9, la beca será de $200.000; 
// con promedio mayor o igual a 7.5, de $100.000;
// para los promedios menores de 7.5 pero mayores o iguales a 6.0, de
// $50.000; 
// a los demás se les enviará una carta de invitación a que estudien más en el próximo ciclo escolar.

// A los alumnos de 18 años o menores de esta edad, 
// con promedios mayores o iguales a 9, se les dará $300.000; 
// con promedios menores a 9 pero mayores o iguales a 8, $200.000; 
// para los alumnos con promedios menores a 8 pero mayores o iguales a 6, se les dará $100.000, 
// y a losalumnos que tengan promedios menores a 6 se les enviará la carta de invitación.


const prom = Number(prompt('Ingrese el promedio del estudiante'))
const edad = Number(prompt('Ingrese la edad del estudiante'))

if(edad>18){
    if (prom >= 9) 
    alert(`Según la edad de ${edad} años y el promedio de ${prom} la beca para el estudiante será de $200.000`)
    if (prom >= 7.5)
    alert(`Según la edad de ${edad} años y el promedio de ${prom} la beca para el estudiante será de $100.000`)
   if (prom >= 6.0 && prom < 7.5)
    alert(`Según la edad de ${edad} años y el promedio de ${prom} la beca para el estudiante será de $50.000`)
   

}else
      {  if(edad <= 18)
            if(prom >= 9.0)
            alert(`Según la edad de ${edad} años y el promedio de ${prom} la remuneración para el estudiante será de $300.000`)
            if(prom >= 8.0 )
                alert(`Según la edad de ${edad} años y el promedio de ${prom} la remuneración para el estudiante será de  $200.000`)
            if( prom < 8.0 && prom >= 6.0)
            alert(`Según la edad de ${edad} años y el promedio de ${prom} la remuneración para el estudiante será de  $100.000`) 

    else if (alert(`En este momento,según tu promedio de ${prom} no aplicas para una beca, te recomendamos estudiar más`));

      }
