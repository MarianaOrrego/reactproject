const persona = {
    nombre: 'Mariana',
    apellido: 'Orrego',
    edad: 23,
    direccion: {
        ciudad: 'Pereira',

    }
};
//Forma correcta
const persona2 = {...persona }; //realiza clon del objeto
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);