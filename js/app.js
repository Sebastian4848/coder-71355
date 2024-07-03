alert('Bienvenido al juego de adivinar el numero, a continuación encuentras la mecanica del juego:\n\n - Debes adivinar un número del 0 al 100. \n - Tienes 7 intentos para divinar. \n - Cada vez que ingreses un numero se te avisará si estas por encima o por debajo del numero ganador. \n - Escribe "salir" en cualquier momento para abandonar el juego. \n\n Buena suerte! ')


let i = 1;
let x = Math.floor((Math.random() * 100) + 0);
console.log(x)

for (i; i <= 7; i++) {
    let input = prompt("Ingrese un numero.");
    let inputtxt = input.toLocaleLowerCase();
    console.log(inputtxt)
    let test1 = inputtxt.length;
    if (inputtxt === "salir") {
        alert("Hasta luego, que vuelvas pronto.")
        break
    }

    let numero = parseInt(input);
    console.log(numero)
    let test2 = numero.toString().length;
    if (isNaN(numero) || numero < 0 || numero > 100 || test1 != test2) {
        i = i - 1;
        alert(`El numero que ingresaste no es valido, te siguen quedando ${7 - i} intentos.`)
    } else {
        if (numero === x) {
            alert(`Felicidades, has ganado!\nEl numero buscado es el ${x}`)
            break
        } else if (numero > x) {
            alert(`El numero que ingresaste es mayor que el buscado, te quedan ${7 - i} intentos.`)
        } else if (numero < x) {
            alert(`El numero que ingresaste es menor que el buscado, te quedan ${7 - i} intentos.`)
        }
    }
    if (i === 7) {
        alert(`Te has quedado sin intentos, vuelve a empezar.\nEl numero buscado era el ${x}`)
    }
    console.log(i)
}
