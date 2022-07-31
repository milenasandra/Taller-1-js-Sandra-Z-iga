// 1. Escribir un algoritmo que valide si la suma de 2 números ingresados es
// positiva, negativa o cero.


const num1 = Number(prompt('Ingrese número 1'))
const num2 = Number(prompt('Ingrese número 2'))

const suma = num1 + num2
if (suma > 0) {
    alert(`La suma de ${num1} y ${num2} Es un número positivo`)
} else if (suma === 0) {
    alert('Es cero')
} else {
    alert(`La resta de ${num1} y ${num2} Es un número positivo`)
}

