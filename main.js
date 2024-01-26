import utils from './utils'
import { suma, multiplicar, operacion } from './utilidades.js'
import { getNameStudent, studentsYounger } from './datastudents.js'
const name = utils.getName()
console.log(name)



const a = 1
const b = 5
const c = 3
console.log(suma(a, c))
console.log(multiplicar({ a, c }))

console.log(operacion({ a, b }))


const estudiantes = [
    {
        nombre: "Ana",
        edad: 19,
        calificaciones: [85, 90, 88]
    },
    {
        nombre: "Luis",
        edad: 20,
        calificaciones: [78, 85, 92]
    },
    {
        nombre: "María",
        edad: 21,
        calificaciones: [95, 88, 90]
    },
    {
        nombre: "Carlos",
        edad: 22,
        calificaciones: [70, 75, 82]
    },
    {
        nombre: "Elena",
        edad: 20,
        calificaciones: [89, 93, 87]
    }
];
const edad = 21
const nombre = 'elena'
console.log(studentsYounger(edad, estudiantes))
console.log(getNameStudent(nombre, estudiantes))