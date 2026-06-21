//NUMEROS

//1.Escribe una función que tome dos números como argumentos y devuelva su suma.

function suma(num1, num2) {
    return num1 + num2
}


//2.Escribe una función que tome dos números como argumentos y devuelva su resta.

function resta(num1, num2) {
    return num1 - num2
}

//3.Escribe una función que tome dos números como argumentos y devuelva su producto.

function producto(num1, num2) {
    return num1 * num2
}

//4.Escribe una función que tome dos números como argumentos y devuelva su división.

function división(num1, num2) {
    return num1 / num2
}

//5.Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.

function potencia(numb, nume) {
    return numb ** nume
}

//6.Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.

function resto(num1, num2) {
    return num1 % num2
}

//7.Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.

function raiz(num1) {
    return Math.sqrt(num1)
}

//8.Escribe una función que tome un número como argumento y devuelva su valor absoluto.

function vabsoluto(num1) {
    return Math.abs(num1)
}

//9.Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.

function redondeado(num1) {
    return Math.round(num1)
}

//10.Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.

function aleatorio() {
    return Math.random()
}



//LETRAS

//1.Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.

function concatenación(cad1, cad2) {
    return cad1 + cad2
}

//2.Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.

function longitud(texto) {
    return texto.length
}

//3.Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

function mayúsculas(texto) {
    return texto.toUpperCase()
}

//4.Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.

function minúsculas(texto) {
    return texto.toLowerCase()
}

//5.Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.

function posición(texto, indice) {
    return texto[indice]
}

//6.Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.

function invertida(texto) {
    return texto.split("").reverse().join("")
}

//7.Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.

function cantidad(texto, caracter) {
    return texto.split(caracter).length - 1
}

//8.Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.

function sinespacios(cadena) {
    return cadena.split(" ").join("")
}
console.log(sinespacios("hola mundo"))
//9.Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.

function palíndromo(cadena) {
    const invertido = cadena.split("").reverse().join("")
    return cadena === invertido
}

//10.Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.

function primeramayus(texto) {
    return texto[0].toUpperCase() + texto.slice(1)
}
console.log(primeramayus("hola"))

//ARRAYS

//1.Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.

const numeros = [5,5,2,3,4,15]

function sumarray(numeros) {
    let suma = 0

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }
    
    return suma
}
console.log(sumarray(numeros))

//2.Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.

function promedioarray(numeros) {
    let suma = 0

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }

    return suma / numeros.length
}
console.log(promedioarray(numeros))

//3.Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.

function ordenarray(numeros) {
    return numeros.sort((a, b) => a - b)
}
console.log(ordenarray(numeros))

//4.Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.

let numero = 4

function arraymayor(numeros, numero) {
    const resultado = []

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > numero) {
            resultado.push(numeros[i])
        }
    }

    return resultado
}
console.log(arraymayor(numeros, numero))

//5.Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.

const numeros1 = [10,12,14,16,18]

function union(numeros, numeros1) {
    const resultado = []

    for (let i = 0; i < numeros.length; i++) {
        resultado.push(numeros[i])
    }

    for (let i = 0; i < numeros1.length; i++) {
        resultado.push(numeros1[i])
    }

    return resultado
}
console.log(union(numeros, numeros1))

//6.Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.

function maximo(numeros) {
    return Math.max(...numeros)
}
console.log(maximo(numeros))

//7.Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.

function minimo(numeros) {
    return Math.min(...numeros)
}
console.log(minimo(numeros))

//8.Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.

function apariciones(numeros, numero) {
    return numeros.filter(item => item === numero).length
}
console.log(apariciones(numeros, numero))

//9.Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.

function nuevoarray(numeros) {
    const noduplicados = [...new Set(numeros)]
    return noduplicados
}
console.log(nuevoarray(numeros))

//10.Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.

function ordeninverso(numeros) {
    return [...numeros].reverse()
}
console.log(ordeninverso(numeros))