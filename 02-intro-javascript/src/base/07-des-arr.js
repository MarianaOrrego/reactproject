//Desestructuración de arreglos
const personajes = ['Micky', 'Donald', 'Pluto'];

const [p1] = personajes;
//Para mostrar el segundo elemento se realiza de la siguiente manera
const [, p2] = personajes;
console.log(p1)
console.log(p2)


const retornaArreglo = () => {
    return ['ABC', 123]
}

const arr = retornaArreglo();
console.log(arr)

//desestructuracion
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)