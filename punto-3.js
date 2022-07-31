// Escribir un algoritmo para calcular el índice de masa corporal de una
// persona.

const peso = Number(prompt('Ingrese su peso en Kl'))
const altura = Number(prompt('Ingrese su altura en metros'))

let resultadoimc =  (peso/(altura*altura)).toFixed(2)


alert(`Según su peso de ${peso} kl y su estatura de ${altura} metros su IMC es ${resultadoimc}`)


