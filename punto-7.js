// 7. En una sala de cine se están estrenando 4 películas, se desea crear un
// algoritmo que al ingresar un número del 1 al 4 se muestre el nombre de la
// película, la categoría y su valor de entrada.
// ● La primera película es Batman, su categoría es acción y el valor de entrada
// es 5,000.
// ● La segunda película es Los Vengadores, su categoría es acción y el valor de
// la entrada es 10,000.
// ● La tercera película es SuperCool, su categoría es comedia y el valor de la
// entrada es 8,000.
// ● Por último la cuarta película es rápido y furioso 5, subcategoría es de
// aventura eso valor de entrada es 15,000

console.warn("Punto 7");

const peliculas = Number(prompt('Ingrese un número según la película de la cual desea información,+: 1 Batman, 2 los Vengadores, 3  SuperCool, 4 Rápidos y furiosos'))

const pelicula = peliculas

switch (pelicula) {
  case 1:
    console.log("Pelicula: Batman, Categoria: Acción, Precio entrada: $5.000")
    break
  case 2:
    console.log("Pelicula: Los Vengadores, Categoria: Acción, Precio entrada: $10.000")
    break
  case 3:
    console.log("Pelicula: SuperCool, Categoria: Comedia, Precio entrada: $8.000")
    break
 case 4:
        console.log("Pelicula: Rápido y furioso, Categoria: Aventura, Precio entrada: $15.000")
        break
  default:
    console.log("Ingrese una opción válida")
}
