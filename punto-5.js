// 5. Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el
// mes al que corresponde el valor ingresado, la cantidad de días que tiene
// ese mes y sus signos del zodiaco. Ejemplo: si el valor ingresado es 5,
// entonces imprimir “Mayo”, “31 días”, “Tauro - Géminis”.


console.warn("Punto 5-switch");

const mes = Number(prompt('Ingrese un número según el mes del cual desea información'))

const meses = mes

switch (mes) {
  case 1:
    console.log("Mes: Enero, Días: 31, signos: Capricornio - Aries")
    break
  case 2:
    console.log("Mes: Febrero, Días: 28, signos: Aries - Acuario ")
    break
  case 3:
    console.log("Mes: Marzo, Días: 30, signos:  Acuario - Piscis  ")
    break
 case 4:
    console.log("Mes: Abril, Días: 31, signos:Piscis - Tauro ")
        break
case 5:
    console.log("Mes: Mayo, Días: 31, signos: Tauro - Géminis")
        break
case 6:
    console.log("Mes: Junio, Días: 31, signos: Geminis - Cancer ")
        break
case 7:
    console.log("Mes: Julio, Días: 31, signos: Cancer -Leo")
        break
case 8:
    console.log("Mes: Agosto, Días: 31, signos: Leo - Virgo ")
        break
case 9:
    console.log("Mes: Septiembre, Días: 31, signos: Virgo - Libra ")
        break
case 10:
    console.log("Mes: Octubre, Días: 31, signos: libra - Escorpio")
        break  
case 11:
    console.log("Mes: Noviembre, Días: 31, signos: Escorpio - Sagitario ")
        break  
case 12:
    console.log("Mes: Diciembre, Días: 31, signos: Sagitario  - Capricornio ")
        break              
  default:
    console.log("Ingrese una opción válida")
}