const saludar = function(nombre) {
    return `Hola, ${ nombre }`;
}

//funcion de flecha

const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = (nombre) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola Mundo`;


console.log(saludar2('Mariana'))
console.log(saludar3('Andrea'))
console.log(saludar4())


const getUser = () => ({

    uid: 'ABC123',
    username: 'Mofin031'

});

const user = getUser();
console.log(user)


//Ejercicio
//1. Transformar a una función flecha
//2. Tiene que retornar un objeto implicito 
//3. Pruebas
/*
function getUserActivo(nombre) {
    return {
        uid: 'ABC123',
        username: nombre
    }
};

const usuarioActivo = getUserActivo('Mariana');
console.log(usuarioActivo);*/


//Solución
const getUserActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre
});

const usuarioActivo = getUserActivo('Mariana');
console.log(usuarioActivo);