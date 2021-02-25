// Constantes para probar los ejercicios de calcular áreas y comparar objetos
const rectangle = {
  base: 10,
  altura: 20
}
const rectangle2 = {
  base: 10,
  altura: 20
}
const rectangle3 = {
  base: 15,
  altura: 20
}

const circle = {
  radius: 5
}
// Constantes para probar el ejercicio de la lista de peículas
class Movie {
  constructor (title, year, watched) {
    this.title = title
    this.year = year
    this.watched = watched
  }
}

const firstMovie = new Movie('Ralph Breaks the Internet', 2018, true)
const secondMovie = new Movie('Inside Out', 2015, true)
const thirdMovie = new Movie('Onward', 2020, false)
const fourthMovie = new Movie('Mulan', 2020, false)

// Constantes para el ejercicio de las coordenadas
class Coordinates {
  constructor (xAxis, yAxis) {
    this.xAxis = xAxis
    this.yAxis = yAxis
  }
}

const firstPoint = new Coordinates(0, 0)
const secondPoint = new Coordinates(1, 1)
const thirdPoint = new Coordinates(-1, -2)
const fourthPoint = new Coordinates(3, 3)

// Constantes para el ejercicio de los empleados

const employees = [
  {
    name: 'Jane Smith',
    title: 'Web Developer II',
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 6
    }
  },
  {
    name: 'Frank Castle',
    title: 'Web Developer I',
    skillLevels: {
      javascript: 4,
      python: 4,
      sql: 3
    }
  },
  {
    name: 'Steve Rogers',
    title: 'Database Admin',
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 9
    }
  },
  {
    name: 'Chuck Taylor',
    title: 'Web Developer III',
    skillLevels: {
      javascript: 8,
      python: 7,
      sql: 8
    }
  },
  {
    name: 'Thor Odinson',
    title: 'Web Intern',
    skillLevels: {
      javascript: 4,
      python: 3,
      sql: 6
    }
  }
]
// Aquí empiezan las funciones correspondientes a la resolución de cada ejercicio

// Ejercicio 1: Función que calcula el área de un objeto rectángulo que le pasamos
function calcAreaOfRectangle (rectangle) {
  const area = rectangle.base * rectangle.altura
  console.log('El área del rectángulo es ' + area)
  return area
}
// Ejercicio 2: Función que calcula el área de un objeto círculo que le pasamos
function calcAreaOfCircle (circle) {
  const area = 3.14 * circle.radius ** 2
  console.log('El área del círculo es ' + area)
  return area
}
// Ejercicio 3: Función que compara 2 números y devuelve si uno es mayor que el otro o si son iguales
function compareNumbers (firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    console.log(firstNumber + ' es mayor que ' + secondNumber)
  } else if (secondNumber > firstNumber) {
    console.log(secondNumber + ' es mayor que ' + firstNumber)
  } else if (firstNumber === secondNumber) {
    console.log(firstNumber + ' y ' + secondNumber + ' son iguales')
  }
}
// Ejercicio 5: Función que recoge un array de números que le pasamos e imprime primero los pares y luego los impares
function printEvenOdds (numberArray) {
  const evenArray = []
  const oddArray = []
  for (let index = 0; index < numberArray.length; index++) {
    if (numberArray[index] % 2 === 0) {
      evenArray.push(numberArray[index])
    } else {
      oddArray.push(numberArray[index])
    }
  }
  console.log('Los números pares son ' + evenArray)
  console.log('Los números impares son ' + oddArray)
}
// Ejercicio 6: Función que compare dos objetos y arroje si sus propiedades son iguales o no
function compareObjects (object1, object2) {
  let objectsAreEqual = 0
  let objectSize = 0

  for (const i in object1) {
    if (object1[i] === object2[i]) {
      objectsAreEqual++
    }
    objectSize++
  }
  if (objectsAreEqual === objectSize) {
    console.log('Los objetos son iguales')
  } else {
    console.log('Los objetos no son iguales')
  }
}
// Ejercicio 7: Función que tome una lista de objetos tipo película e imprima las que tienen el atributo watched = false
function unWatchedMovies (arrayOfMovies) {
  const arrayOfUnwatchedMovies = []
  for (const i in arrayOfMovies) {
    if (arrayOfMovies[i].watched === false) {
      arrayOfUnwatchedMovies.push(arrayOfMovies[i].title)
    }
  }
  console.log('No has visto ' + arrayOfUnwatchedMovies)
}

// Ejercicio 8: Función que calcule la distancia en metros entre 2 puntos

function calcDistanceBetweenPoints (firstCoords, secondCoords) {
  const side1 = Math.abs(firstCoords.xAxis - secondCoords.xAxis)
  const side2 = Math.abs(firstCoords.yAxis - secondCoords.yAxis)
  const distance = Math.sqrt(side1 ** 2 + side2 ** 2)
  console.log('La distancia entre los puntos es de ' + distance + ' metros')
}

// Ejercicio 9: Función que tome un array de empleados y devuelva los nombres de aquellos que tienen más de un 5 en JavaScript
function jsApprovedEmployees (arrayOfEmployees) {
  for (let i = 0; i < arrayOfEmployees.length; i++) {
    if (arrayOfEmployees[i].skillLevels.javascript >= 5) {
      console.log(arrayOfEmployees[i].name)
    }
  }
}
// Probar Ejercicio 1. El objeto rectangle ya está creado
/* calcAreaOfRectangle(rectangle) */

// Probar Ejercicio 2. El objeto circle ya está creado
/* calcAreaOfCircle(circle) */

// Probar Ejercicio 3
/* compareNumbers(5, 6)
compareNumbers(5, 5)
compareNumbers(4, 5) */

// Probar Ejercicio 5
/* printEvenOdds([5, 2, 4, 40, 33, 34, 35, 82, 123123, 56]) */

// Probar Ejercicio 6

/* compareObjects(rectangle, rectangle3);
compareObjects(rectangle, rectangle2);
compareObjects(rectangle, circle); */

// Probar Ejercicio 7

/* unWatchedMovies([firstMovie, secondMovie, thirdMovie, fourthMovie]) */

// Probar Ejercicio 8

/* calcDistanceBetweenPoints(thirdPoint, fourthPoint); */

// Probar Ejercicio 9

/* jsApprovedEmployees(employees); */
