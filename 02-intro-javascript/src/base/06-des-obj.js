//Desestructuración de objetos
const persona = {
    nombre: 'Sandra',
    edad: 44,
    clave: 'Familiar',
};

const { nombre } = persona;
const { nombre: nombre2, clave, edad } = persona;

console.log(nombre);
console.log(nombre2);
console.log(clave);
console.log(edad);


//Destructuración tipo 1
const retornaPersona = (usuario) => {
    const { edad, clave, nombre, } = usuario;

    console.log(edad, clave, nombre)
}

retornaPersona(persona);

//Destructuración tipo 2

const retornaPersona2 = ({ nombre, edad }) => {

    console.log(nombre, edad)
}

retornaPersona2(persona);

//Asignar valores por defecto
//Si la propiedad existe en el objeto, se muestra la del objeto sino se muestra el valor por defecto asignado en la función de flecha

const retornaPersona3 = ({ nombre, edad, rango = 'madre' }) => {

    console.log(nombre, edad, rango)
}

retornaPersona3(persona);