//Enunciado del problema
//1- Obtener el promedio de notas de un alumno 
//2- la suma de notas debe ser el retorno de una función
//3- el promedio el retorno de otra función
//4- Las notas son: 6,8,9,2,5,10
//5- crear un repo
//6- enviar por formulario

//Suma de notas
function sumaNotas(notas){
    let totalSumaNotas = 0;
    let cantidadNotas = notas.length;
    for(let i = 0; i < cantidadNotas; i++){
        totalSumaNotas += notas[i]
    }
    return totalSumaNotas
}

//Promedio de la suma de notas
function promedioNotas(sumaNotas){
    let cantidadNotas = notas.length;
    let promedio = sumaNotas / cantidadNotas
    promedio = promedio.toFixed(2)
    return promedio
}

const notas = [6,8,9,2,5,10]
let sumaTotal = sumaNotas(notas)
let promedio = promedioNotas(sumaTotal);
// console.log(sumaTotal)
console.log("El promedio de notas es:" + " " + promedio)


