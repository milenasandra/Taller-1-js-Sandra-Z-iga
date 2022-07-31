// Hacer un algoritmo que calcule e imprima los números primos comprendidos
// entre 1 y 100.

console.warn('Punto algoritmo que calcule e imprima los números primos entre 1 y 100.')

let primos = []

let cantidadMultiplos = 0
for (let i = 0; i <=100; i++){
    for (let j = 1; j <= i;j++){
        if(i % j === 0){
            cantidadMultiplos++
            if (cantidadMultiplos > 2){
                break
            }
        }
    }
    if (cantidadMultiplos === 2){
        primos.push(i)
    }
    cantidadMultiplos = 0
}
 console.log(primos)