const nombre = 'Mariana';
const apellido = 'Orrego';

//const nombreCompleto = nombre + ' ' + apellido; <- Modo antigup
const nombreCompleto = ` ${ nombre } ${ apellido } `;
console.log(nombreCompleto);

function getSaludo(nombreCompleto) {
    return 'Hola ' + nombreCompleto;
}

console.log(` Este es un texto: ${ getSaludo( nombre ) } `);